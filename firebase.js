// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword,
         signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTahgzEzT-BgW7RehvX6GL2LxxoXvKayg",
  authDomain: "big-bops.firebaseapp.com",
  projectId: "big-bops",
  storageBucket: "big-bops.appspot.com",
  messagingSenderId: "540797973623",
  appId: "1:540797973623:web:fb8f77bf8e5d90308c8272"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );
export const auth = getAuth( app );

//create new user
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  //sign in existing users
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

//set up an observer and get user data, needs to be done for every page that might need user info
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});