import axiosApi from './axiosApi'

const create = async (user) => {
  const response = await axiosApi.post('users/create', user)
  // TODO: Handle the response?
  return response.data
}

const search = async (string, uid) => {
  const response = await axiosApi.get(`users/search/${string}/${uid}`)
  return response.data.result
}

const getByUid = async (uid) => {
  const response = await axiosApi.get(`users/firebase/${uid}`)
  // TODO: Handle response and error
  return response.data
}

const sentFriendRequest = async (userID, friendID) => {
  const response = await axiosApi.post(`users/request/${userID}/${friendID}`)
  return response.data
}

const handleFriendRequest = async (requestID, choice) => {
  const response = await axiosApi.put(`users/request/${requestID}/${choice}`)
  return response.data
}

const getNotifications = async (userID) => {
  const response = await axiosApi.get(`users/notifications/${userID}`)
  return response.data.notifications
}

export const userApi = {
  create,
  getByUid,
  search,
  sentFriendRequest,
  getNotifications,
  handleFriendRequest
}
