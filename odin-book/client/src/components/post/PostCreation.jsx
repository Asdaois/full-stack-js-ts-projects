import React from 'react'
import { ProfilePicture } from '../user'

const PostCreation = ({ onClick }) => {
  return (
    <div className='flex items-center'>
      <div className='w-12'>
        <ProfilePicture />
      </div>
      <button
        className='w-full bg-slate-400 text-xl text-left h-10 px-4 rounded-3xl hover:bg-slate-500 hover:text-gray-200'
        onClick={onClick}
      >
        What&apos;s on your mind?
      </button>
    </div>
  )
}

export default PostCreation
