import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmXEMENnNfqpORsFvlmQPNEdDrggkY9nU",
  authDomain: "crwn-db-8f9b8.firebaseapp.com",
  projectId: "crwn-db-8f9b8",
  storageBucket: "crwn-db-8f9b8.appspot.com",
  messagingSenderId: "193936735657",
  appId: "1:193936735657:web:057ef2e1da00cdbbe998b8",
  measurementId: "G-4J0EH9FFWG",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = await firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  const createUser = async () => {
    const { displayName, email } = userAuth;
    const createdAd = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAd,
        ...additionalData,
      });
    } catch (e) {
      console.log("Error creating user", e.message);
    }
  };

  if (!snapShot.exists) {
    await createUser();
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectToAdd = []) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log({ collectionRef });

  const batch = firestore.batch();
  objectToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj)
  });

  return await batch.commit();
};

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  // Covert array to Object
  return transformedCollection.reduce( (accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
