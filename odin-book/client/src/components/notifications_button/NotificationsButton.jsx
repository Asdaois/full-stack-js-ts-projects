import React, {
  useEffect,
  useState
} from 'react'

import { userApi } from '../../api/usersApi.js'

export const NotificationsButton = ({ type, typeID, read }) => {
  const [button, setButton] = useState('')

  const handleFriendRequest = async (choice) => {
    await userApi.handleFriendRequest(typeID, choice)
    setButton('')
  }

  useEffect(() => {
    switch (type) {
      case 'FriendRequest':
        if (!read) {
          setButton(
            <div>
              <button
                onClick={() => {
                  handleFriendRequest('Accepted')
                }}
              >
                Accept
              </button>{' '}
              <button
                onClick={() => {
                  handleFriendRequest('Rejected')
                }}
              >
                Reject
              </button>
            </div>
          )
        } else {
          setButton('')
        }
        break
    }
  }, [type])

  return button
}
