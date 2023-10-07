import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBXYYykXhQSdxr0BrBRT8iSajsbmZJ6cJQ",
  authDomain: "where-is-ea30c.firebaseapp.com",
  projectId: "where-is-ea30c",
  storageBucket: "where-is-ea30c.appspot.com",
  messagingSenderId: "842161187670",
  appId: "1:842161187670:web:f530b46877a86e7bf644f7",
  measurementId: "G-4V2JQHEMHP"
};

firebase.initializeApp(config);

export default firebase;
