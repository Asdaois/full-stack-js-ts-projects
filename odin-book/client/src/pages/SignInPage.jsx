import React from 'react'
import { LogIn, SignUp } from '../components/authentication'

const SignInPage = () => {
  return (
    <div className='flex min-h-screen bg-slate-100'>
      <div className='bg-white self-center md:flex md:flex-col md:w-2/3 md:m-auto mt-8 shadow-lg p-4 rounded-xl drop-shadow-xl'>
        <header className='text-center'>
          <title className='md:block md:text-8xl md:tracking-wide shadow-slate-300 text-shadow-md'>
            Odin book
          </title>
          <span className='md:text-gray-700'>A simple copy of Facebook</span>
        </header>

        <div className='md:flex md:justify-center'>
          <LogIn />
          <div className='self-center h-80 w-[1px] rounded-full border-2 border-gray-200' />
          <SignUp />
        </div>
      </div>
    </div>
  )
}

export default SignInPage
