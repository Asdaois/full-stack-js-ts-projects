import React, { useState } from 'react'

import TelegramIcon from '../../assets/icons/TelegramIcon'

type Props = {
  children: React.ReactNode;
  logo: any;
};

const NavBar = ({ children, logo }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur flex-none lg:z-50 dark:border-slate-50/[0.06] dark:bg-slate-900/75 left-0 sm:flex sm:justify-between sm:py-3 sm:px-4 sm:items-center border-b">
      <div className="flex justify-between items-center py-3 px-4 sm:p-0">
        <div className="flex items-center gap-4">
          {logo}
          <div className="text-white">
            <a
              href="#contact-me"
              className="block py-1 px-2 mt-1 font-semibold text-white rounded sm:mt-0 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
            >
              <TelegramIcon />
            </a>
          </div>
        </div>

        <div className="sm:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-white focus:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6 fill-current"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={isOpen ? 'block' : 'hidden'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />{' '}
              :
              <path
                className={isOpen ? 'hidden' : 'block'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`px-2 pt-1 pb-4 ${
          isOpen ? 'block' : 'hidden'
        } sm:flex sm:gap-2 sm:p-0`}
      >
        {children}
      </div>
    </header>
  )
}

export default NavBar
