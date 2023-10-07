import './layout.css'

import React from 'react'
import Navbar from '../navbar'

const Layout = ({ children }) => {
  return (
    <div className='flex justify-center'>
      <Navbar />
      <main className='flex flex-col w-2/5 justify-self-center '>
        {children}
      </main>
    </div>
  )
}

export default Layout
