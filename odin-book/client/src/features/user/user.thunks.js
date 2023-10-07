import { createAsyncThunk } from '@reduxjs/toolkit'
import { userApi } from '../../api/usersApi'
import { signInEmail, signUpEmail } from '../../firebase/emailAuth.utils'

export const signUpUser = createAsyncThunk(
  'user/signup',
  /**
   * @param {{email, password, displayName}} newUser
   */
  async (newUser) => {
    const user = await signUpEmail(newUser)
    if (user.error) throw new Error(user.error)

    user.dateOfBirth = newUser.dateOfBirth
    user.gender = newUser.gender
    return user
  }
)

export const signInUser = createAsyncThunk(
  'user/signin',
  async ({ email, password }) => {
    const firebaseUser = await signInEmail({ email, password })
    if (firebaseUser.error) throw new Error(firebaseUser.error)

    // get user from server
    let user = await userApi.getByUid(firebaseUser.uid)
    console.log({ user })

    if (!user) {
      user = await userApi.create(firebaseUser)
      console.log(user)
    }

    return { firebaseUser }
  }
)

export const authenticationSuccess = (state, action) => {
  if (state.status === 'success') return
  // const user = await userApi.getByUid(action.payload.uid)
  // console.log({ user })
  state.current = action.payload
  state.status = 'success'
}

export const authenticationFailure = (state, action) => {
  console.log(action.error.message)
  state.status = 'failed'
}
