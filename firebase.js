/*
  Name: Firebase.js
  Description: Create the Firebase ID for Firebase to collect our information
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 11/20/2022
  Date revised: 11/20/2022
  Preconditions: Import firebase/firestore
  Postconditions: Creates a color scheme context to export
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
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
export const dataBase = getFirestore(app);
export const auth = getAuth( app );
