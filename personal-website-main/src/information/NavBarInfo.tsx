import React from 'react'
import NavBar from '../components/navbar'
import NavBarLink from '../components/navbar-link'

const NavBarInfo = () => {
  return (
    <NavBar logo={<span className='pl-1 h-8 text-xl font-bold text-white border-l-8 border-purple-500'>Jose Guevara</span>}>
      <NavBarLink href='#presentation' display='Home' />
      <NavBarLink href='#skills' display='Skills' />
      <NavBarLink href='#projects' display='Projects' />
      <NavBarLink href='#about' display='About' />
    </NavBar>
  )
}

export default NavBarInfo
