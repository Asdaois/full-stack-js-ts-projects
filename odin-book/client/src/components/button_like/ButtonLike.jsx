import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { postLiked } from '../../features/posts/posts.thunks'
import { Like } from '../icons'

const ButtonLike = ({ postID }) => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(postLiked({ postID, userID: user.current._id }))
  }

  return (
    <button
      className='button w-1/3 flex justify-center gap-2'
      onClick={handleClick}
    >
      <Like />
      Like
    </button>
  )
}

export default ButtonLike
