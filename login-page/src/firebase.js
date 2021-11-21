//import {firebase} from "firebase/app";
import { useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJAAtT_jzeGw6p3xb6jYBdCBfCOSDVQmY",
  authDomain: "test-tik-a5ecc.firebaseapp.com",
  projectId: "test-tik-a5ecc",
  storageBucket: "test-tik-a5ecc.appspot.com",
  messagingSenderId: "323307477011",
  appId: "1:323307477011:web:c56b78ef9fbff9081bc7e6",
  measurementId: "G-FFNC0GB07N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}