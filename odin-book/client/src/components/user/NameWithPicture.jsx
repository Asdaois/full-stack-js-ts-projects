import React from 'react'
import { DisplayName, ProfilePicture } from '.'

const NameWithPicture = () => {
  return (
    <div className='flex items-center gap-2'>
      <ProfilePicture />
      <DisplayName />
    </div>
  )
}

export default NameWithPicture
