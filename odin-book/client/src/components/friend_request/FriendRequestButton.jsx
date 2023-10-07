import React from 'react'

import { BsPersonPlusFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'

import { userApi } from '../../api/usersApi'

export const FriendRequestButton = ({ friendID }) => {
  const user = useSelector((state) => state.user)

  const sendRequest = () => {
    userApi.sentFriendRequest(user.current._id, friendID)
  }

  return <button onClick={sendRequest}><BsPersonPlusFill size={20} /></button>
}
