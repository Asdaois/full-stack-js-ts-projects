import { auth } from '../firebase/firebase.utils'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOutUser, updateUser } from '../features/user/userSlice'
import { useNavigate } from 'react-router-dom'

const useAuthentication = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  useEffect(() => {
    onAuthStateChanged(auth, async (userLogged) => {
      if (userLogged) {
        dispatch(updateUser(userLogged.toJSON()))
        navigate('/')
      } else {
        dispatch(logOutUser())
        navigate('/login')
      }
    })
  }, [])

  return user
}

export default useAuthentication
