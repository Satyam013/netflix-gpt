// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY4X9r1cjNQ17VA9cW6iAPNDrzq-mKQAc",
  authDomain: "netflixgpt-fa0e6.firebaseapp.com",
  projectId: "netflixgpt-fa0e6",
  storageBucket: "netflixgpt-fa0e6.firebasestorage.app",
  messagingSenderId: "135429522399",
  appId: "1:135429522399:web:1509dc872d521f2bf9ba6a",
  measurementId: "G-6DZ7ZS80YK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();