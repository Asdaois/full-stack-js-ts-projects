import React from 'react'
import { Link } from 'react-router-dom'
import { NameWithPicture } from '../user'

import { FiUsers, FiLogOut } from 'react-icons/fi'
import { GiThreeFriends } from 'react-icons/gi'
import { IoIosNotifications } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { Logout } from '../authentication'
import { AiFillHome } from 'react-icons/ai'

// Styles...
const link = 'flex items-center gap-2'
const icon = 'w-10 h-10'

const Navbar = () => {
  const user = useSelector(state => state.user)

  return (
    <div className='w-1/5 fixed top-0 left-0 min-h-screen p-4'>
      <nav className='bg-slate-200 min-h-[20vh] p-4 flex flex-col gap-4 rounded-xl'>
        <Link to={`/profile/${user?.current?._id}`}>
          <NameWithPicture />
        </Link>
        <Link to='/' className={link}><AiFillHome className={icon} />Home</Link>
        <Link to='/notifications' className={link}><IoIosNotifications className={icon} />Notifications</Link>
        <Link to='/friends' className={link}><GiThreeFriends className={icon} /> Friends</Link>
        <Link to='/users' className={link}><FiUsers className={icon} />Users</Link>
        <div className={`${link} hover:cursor-pointer`}><FiLogOut className={icon} /><Logout /></div>
      </nav>
    </div>
  )
}

export default Navbar
