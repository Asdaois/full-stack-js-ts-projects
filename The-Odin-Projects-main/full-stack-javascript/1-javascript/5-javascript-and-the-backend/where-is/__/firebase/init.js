if (typeof firebase === "undefined")
  throw new Error(
    "hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js"
  );

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
