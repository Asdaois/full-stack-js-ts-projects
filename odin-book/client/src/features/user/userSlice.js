import { createSlice } from '@reduxjs/toolkit'
import {
  authenticationFailure,
  authenticationSuccess,
  signInUser,
  signUpUser
} from './user.thunks'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: null,
    status: 'notLogged'
  },
  reducers: {
    updateUser: authenticationSuccess,
    logOutUser: (state) => {
      state.current = null
      state.status = 'notLogged'
    }
  },
  extraReducers: {
    [signUpUser.fulfilled]: authenticationSuccess,
    [signUpUser.rejected]: authenticationFailure,
    [signInUser.fulfilled]: authenticationSuccess,
    [signInUser.rejected]: authenticationFailure
  }
})

export const { updateUser, logOutUser } = userSlice.actions
export default userSlice.reducer
