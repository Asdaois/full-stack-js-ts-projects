import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { UserProfile } from './pages/UserProfile'
import { UserFriendList } from './pages/UserFriendList'
import { WelcomePage } from './pages/WelcomePage'
import NotificationsPage from './pages/NotificationsPage'
import Users from './pages/Users'

const Router = () => {
  return (
    <Routes>
      <Route exact path='/' element={<WelcomePage />} />
      <Route exact path='/user/:id' element={<UserProfile />} />
      <Route exact path='/user/:id/friends/' element={<UserFriendList />} />
      <Route path='/notifications' element={<NotificationsPage />} />
      <Route path='/users' element={<Users />} />
    </Routes>
  )
}

export default Router
