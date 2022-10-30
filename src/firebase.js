import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAJprcbXNspxhBxDXAP_GKi7N-lV9ysP1Q",
  authDomain: "clone-d8d62.firebaseapp.com",
  projectId: "clone-d8d62",
  storageBucket: "clone-d8d62.appspot.com",
  messagingSenderId: "680336315920",
  appId: "1:680336315920:web:fa0d5c22e662982b0cdc95",
  measurementId: "G-R7CNCP2KWX",
};

//initialise the app
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
