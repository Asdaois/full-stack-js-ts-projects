import React from 'react'
import { FcGoogle } from 'react-icons/fc'

import { signInWithGoogle } from '../../firebase/googleAuth.utils'

const GoogleLogIn = () => {
  return (
    <button
      onClick={signInWithGoogle}
      className='bg-white border-none px-4 py-2 rounded-xl
    cursor-pointer  shadow-2xl hover:shadow-inner transition
    duration-500 ease-in-out  transform hover:-translate-x hover:scale-105 flex justify-center items-center'
    >
      <FcGoogle size={20} />
      oogle
    </button>
  )
}

export default GoogleLogIn
