import firebase from 'firebase/compat/app'; // Import the compat version of the app module
import 'firebase/compat/auth'; // Import the compat version of the auth module
import 'firebase/compat/firestore'; // Import the compat version of the firestore module

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAivgAhqgdVVEWqgONmHls_QE20pFcOw2w",
  authDomain: "ecom-487cb.firebaseapp.com",
  projectId: "ecom-487cb",
  storageBucket: "ecom-487cb.appspot.com",
  messagingSenderId: "758622842567",
  appId: "1:758622842567:web:4d640c2746089ec0ef58e2",
  measurementId: "G-S868SNEMW3" // Optional
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { firebaseApp, db, auth };
