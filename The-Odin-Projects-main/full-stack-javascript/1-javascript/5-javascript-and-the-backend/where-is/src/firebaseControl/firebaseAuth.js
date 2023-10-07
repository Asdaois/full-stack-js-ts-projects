import firebase from "../firebase";

function signIn(params) {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

function signOut() {
  firebase.auth().signOut();
}

function isUserSignedIn() {
  return !!firebase.auth().currentUser;
}

function getUsername() {
  if(isUserSignedIn()) {
    return firebase.auth().currentUser.displayName;
  } else {
    return "Anonimous";
  }
}

export { signIn, signOut, getUsername };
