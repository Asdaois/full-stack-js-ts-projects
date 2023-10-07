import { useState } from "react";
import firebase from "../firebase";
import { signIn, signOut, getUsername } from "../firebaseControl/firebaseAuth";

export default function SignGoogle() {
  const [username, setUsername] = useState(getUsername());

  // eslint-disable-next-line
  const initListenerFirebaseAuth = (() => {
    // Listen to auth state changes.
    firebase.auth().onAuthStateChanged(authStateObserver);
  })(); 

  function authStateObserver() {
    setUsername(getUsername());
  }

  return (
    <div className='SignGoogle'>
      <button onClick={signIn}>Sign with google</button>
      <button onClick={signOut}>Sign Out</button>
      <div>{username}</div>
    </div>
  );
}
