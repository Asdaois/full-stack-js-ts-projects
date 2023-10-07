import React from 'react'

type Props = {
  href: string;
  display: string;
}

const NavBarLink = ({ href, display }: Props) => {
  return (
    <a href={href} className='block py-1 px-2 mt-1 font-semibold text-white rounded sm:mt-0 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
      <span>{display}</span>
    </a>
  )
}

export default NavBarLink
