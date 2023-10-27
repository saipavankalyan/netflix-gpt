// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdC9jScmJD2tKi2xYSpNYtUoWvS8Jcoo4",
  authDomain: "netflixgpt-1df45.firebaseapp.com",
  projectId: "netflixgpt-1df45",
  storageBucket: "netflixgpt-1df45.appspot.com",
  messagingSenderId: "398048129963",
  appId: "1:398048129963:web:a53762a045ce2ff10418ee",
  measurementId: "G-8FNQ18PLV5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
