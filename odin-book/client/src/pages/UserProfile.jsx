import React from 'react'
import { useParams } from 'react-router-dom'

export const UserProfile = () => {
  const { id } = useParams()

  return (
    <div>
      <p>Hello from {id}&apos;s profile!</p>
    </div>
  )
}
