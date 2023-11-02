// compat packages are API compatible with namespaced code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI_zfroxqvCxdlO3mD7pLfJVuauyjBnWo",
  authDomain: "linkedin-clone-yt-acede.firebaseapp.com",
  projectId: "linkedin-clone-yt-acede",
  storageBucket: "linkedin-clone-yt-acede.appspot.com",
  messagingSenderId: "31262241716",
  appId: "1:31262241716:web:b45d9e0a9cf8dac66c78e1",
  measurementId: "G-7H6RMKLJD9",
};

//   Line 15 is the line of code that connects everything- the whole app to the firebase database.
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
