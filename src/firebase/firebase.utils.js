import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";

const config = {
  apiKey: "AIzaSyA8JWVFdXIsrisoDAC9Z2iR7d2tqARoeWo",
  authDomain: "crwn-db-4fab9.firebaseapp.com",
  projectId: "crwn-db-4fab9",
  storageBucket: "crwn-db-4fab9.appspot.com",
  messagingSenderId: "887110940530",
  appId: "1:887110940530:web:7ba4caaeba2b9636f40feb",
  measurementId: "G-KFD816CDK9",
};

export const creatUserprofileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`); //DocumentReference

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
//NEw

// const firebaseApp = initializeApp(config);
//NEw
export const auth = firebase.auth();

//NEW
// const auth = getAuth(firebaseApp);

//NEW
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
