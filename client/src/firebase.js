// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-5f339.firebaseapp.com",
  projectId: "real-estate-5f339",
  storageBucket: "real-estate-5f339.appspot.com",
  messagingSenderId: "511685668553",
  appId: "1:511685668553:web:1fa6ee7e605ea59d23e718",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
