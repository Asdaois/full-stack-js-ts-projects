import Image from 'next/image'
import { LinksManager } from 'components/LinksManager'
import { LoginLogout } from 'components/LoginLogout'
import Logo from '../public/logo.png'
import React from 'react'

export default async function Aside () {
  return (
    <aside
      className='w-64 flex flex-col justify-between overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 min-h-[80vh]'
      aria-label='Sidebar'
    >
      <div className=''>
        <div className='flex pl-2.5 mb-5'>
          <Image
            src={Logo}
            className='mr-3 h-14 w-14 sm:h-7  object-contain'
            alt='Ferrominera Logo'
          />
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            Ferronet
          </span>
        </div>
        <LinksManager />
      </div>
      <div className='p-4'>
        <LoginLogout />
      </div>
    </aside>
  )
}
