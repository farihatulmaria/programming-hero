// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrNUbkb8kIFO0iBtH-JW4PbE3ZHH-fBYA",
  authDomain: "email-password-login-e46a1.firebaseapp.com",
  projectId: "email-password-login-e46a1",
  storageBucket: "email-password-login-e46a1.appspot.com",
  messagingSenderId: "562867579495",
  appId: "1:562867579495:web:f2d1bfb6f4fba9096982c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;