import React from 'react'
import { signOutUSer } from '../../firebase/firebase.utils'

const Logout = () => {
  return (
    <div>
      <button onClick={signOutUSer}>Logout</button>
    </div>
  )
}

export default Logout
