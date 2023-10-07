import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import { userApi } from '../../api/usersApi.js'
import { NotificationsButton } from '../notifications_button/NotificationsButton'

export const Notifications = () => {
  const user = useSelector((state) => state.user)
  const [notificationsArray, setNotificationsArray] = useState([])
  const [notifications, setNotifications] = useState('')

  useEffect(() => {
    const getRequest = async () => {
      if (user.current) {
        setNotificationsArray(await userApi.getNotifications(user.current._id))
      }
    }

    getRequest()
  }, [user])

  useEffect(() => {
    if (notificationsArray.length > 0) {
      setNotifications(
        notificationsArray.map((value) => {
          return (
            <div key={value._id}>
              <strong>{value.subject}</strong>
              <p>{value.message}</p>
              <NotificationsButton
                type={value.type}
                typeID={value.typeID}
                read={value.read}
              />
            </div>
          )
        })
      )
    } else {
      setNotifications('No notifications')
    }
  }, [notificationsArray])

  return <div>{notifications}</div>
}
