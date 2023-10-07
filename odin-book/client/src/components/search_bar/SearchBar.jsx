import React, {
  useEffect,
  useState
} from 'react'

import { BsSearch } from 'react-icons/bs'
import { useSelector } from 'react-redux'

import { userApi } from '../../api/usersApi.js'
import FriendRequestButton from '../friend_request'
import { ProfilePicture } from '../user'

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('')
  const [searchResult, setSearchResult] = useState([])

  const user = useSelector((state) => state.user)

  useEffect(() => {
    const search = async () => {
      if (searchValue !== '') {
        const result = await userApi.search(searchValue, user.current?.uid)
        setSearchResult(result)
      } else {
        setSearchResult([])
      }
    }
    search()
  }, [searchValue, user])

  return (
    <div className='flex'>
      <div className='flex items-center gap-2 border-2 border-slate-300 rounded-xl px-4 w-full py-1'>
        <BsSearch />
        <input
          className='bg-transparent outline-none'
          type='text'
          id='search'
          name='searchFriend'
          placeholder='Search for a friend! :)'
          value={searchValue}
          onChange={(e) => {
            const { value } = e.target
            setSearchValue(value)
          }}
        />
      </div>
      <div
        className={`${
          searchResult.length === 0 && 'hidden'
        } fixed bg-slate-400 translate-y-8 box-border rounded-lg p-2 w-60 `}
      >
        <p className=''>Results:</p>
        {searchResult.map((value, key) => {
          return (
            <div key={key} className='flex justify-between items-center'>
              <div className='flex gap-4 items-center'>
                <ProfilePicture small />
                <div className='capitalize'>
                  {value.firstName} {value.lastName}
                </div>
              </div>
              <FriendRequestButton friendID={value._id} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
