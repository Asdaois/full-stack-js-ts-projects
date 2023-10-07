import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
import { firebaseApp } from './firebase.utils'

const auth = getAuth(firebaseApp)

/**
 * @param {{email, password, displayName}} newUser
 * @returns user
 */
export const signUpEmail = async (newUser) => {
  console.log(newUser)
  const { email, password, displayName } = newUser
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    await updateProfile(userCredential.user, { displayName })
    return userCredential.user.toJSON()
  } catch (error) {
    console.log(error)
    return { error: error.message }
  }
}

export const signInEmail = async (user) => {
  const { email, password } = user
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    return userCredential.user.toJSON()
  } catch (error) {
    return { error: error.message }
  }
}
