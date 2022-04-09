
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC811zKF7Fr1NAoEQ4wMf6eCW_o6QdTpZY",
  authDomain: "ema-jhon-auth-1955c.firebaseapp.com",
  projectId: "ema-jhon-auth-1955c",
  storageBucket: "ema-jhon-auth-1955c.appspot.com",
  messagingSenderId: "449397481524",
  appId: "1:449397481524:web:77fb2e548cff195ade6a61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth