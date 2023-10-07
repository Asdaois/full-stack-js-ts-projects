// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, signOut } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCw99RQwEmqWa0nQKqF1nSMSlSOQVbhM_4',
  authDomain: 'odin-book-5c4bb.firebaseapp.com',
  projectId: 'odin-book-5c4bb',
  storageBucket: 'odin-book-5c4bb.appspot.com',
  messagingSenderId: '704944803290',
  appId: '1:704944803290:web:6aaf8d5d1f03632c1a04e3',
  measurementId: 'G-CRE3JXDD4X'
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
export const auth = getAuth(firebaseApp)

export const signOutUSer = () => signOut(auth)
