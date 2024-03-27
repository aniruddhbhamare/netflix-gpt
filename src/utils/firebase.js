// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA97cGxehd75RGyXHb_pZ6aWqbvbqkknMo",
  authDomain: "netflixgpt-bf59a.firebaseapp.com",
  projectId: "netflixgpt-bf59a",
  storageBucket: "netflixgpt-bf59a.appspot.com",
  messagingSenderId: "454383489091",
  appId: "1:454383489091:web:6a97fdf194499b657804f6",
  measurementId: "G-KY7R2S71KC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
