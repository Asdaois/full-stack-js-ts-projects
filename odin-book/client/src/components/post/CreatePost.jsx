import React, { useState } from 'react'
import PostCreation from './PostCreation'
import PostForm from './PostForm'

const CreatePost = () => {
  const [showForm, setShowForm] = useState(false)
  return (
    <div className='w-full bg-slate-200 p-4 rounded-xl transition-height duration-300'>
      {showForm
        ? (
          <PostForm onExit={() => setShowForm(false)} />
          )
        : (
          <PostCreation onClick={() => setShowForm(true)} />
          )}
    </div>
  )
}

export default CreatePost
