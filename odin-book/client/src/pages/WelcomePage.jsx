import React from 'react'

import { CreatePost } from '../components/post'
import Posts from '../components/posts'

export const WelcomePage = () => {
  return (
    <>
      <CreatePost />
      <Posts />
    </>
  )
}
