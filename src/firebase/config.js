// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyY_8M6HJ5-2eVl3Y_crTR28bkomZzJ0U",
  authDomain: "journal-app-90bcb.firebaseapp.com",
  projectId: "journal-app-90bcb",
  storageBucket: "journal-app-90bcb.appspot.com",
  messagingSenderId: "654100175449",
  appId: "1:654100175449:web:fa7ab8bcb21e8ffc57af48",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseFirestore = getFirestore(FirebaseApp);
