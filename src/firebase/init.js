// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAGltSbeoeNbGwLZ0JpPStr0NM-WElnVQ",
  authDomain: "first-firebase-project-2e093.firebaseapp.com",
  projectId: "first-firebase-project-2e093",
  storageBucket: "first-firebase-project-2e093.appspot.com",
  messagingSenderId: "572221943509",
  appId: "1:572221943509:web:ba80e5ddb140221e4c7c5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();