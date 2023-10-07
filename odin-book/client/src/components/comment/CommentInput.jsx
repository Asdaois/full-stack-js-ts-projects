import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { addCommentToPost } from '../../features/posts/posts.thunks'
import ProfilePicture from '../user/profile_picture'

const CommentInput = ({ postID, postType, setVisible }) => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  /**
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const handleSubmit = async (e) => {
    e.preventDefault()

    // console.log(e.currentTarget.elements);
    const comment = {
      userID: e.currentTarget.userID.value,
      content: { text: e.currentTarget['content-text'].value },
      postType: postType || 'Comment'
    }

    setVisible(false)

    dispatch(addCommentToPost({ postID, comment }))
    e.currentTarget.reset()
  }

  return (
    <div className='flex justify-between items-center w-full gap-2 mb-4'>
      <ProfilePicture />
      <form
        action={'' /* TODO: Here the path to the server */}
        method='post'
        className='w-full flex items-center'
        onSubmit={handleSubmit}
        autoComplete='off'
      >
        <input type='hidden' name='userID' value={user.current?._id} autoComplete='off' />
        <div className='rounded-3xl bg-slate-400 px-4 w-full h-10 flex items-center'>
          <input
            type='text'
            name='content-text'
            className='bg-transparent outline-none w-full placeholder-slate-700'
            placeholder='Write a comment...'
          />
        </div>
      </form>
    </div>
  )
}

export default CommentInput
