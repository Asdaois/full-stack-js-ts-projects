import React from 'react'

import emptyProfile from './emptyProfile.png'

const ProfilePicture = ({ pictureLink, small, medium }) => {
  return (
    <img
      src={pictureLink || emptyProfile}
      alt='profile'
      className={`rounded-full aspect-auto ${small ? 'h-5 w-5' : medium ? 'h-8 w-8' : 'h-10 w-10'}`}
    />
  )
}

export default ProfilePicture
