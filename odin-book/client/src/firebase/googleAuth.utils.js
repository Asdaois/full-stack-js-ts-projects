import {
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'

import { auth } from './firebase.utils'

const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => signInWithPopup(auth, provider)

export const getCurrentUser = () => {
  return auth.currentUser?.toJSON()
}
