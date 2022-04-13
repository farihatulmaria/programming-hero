// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
/*apiKey: process.env.REACT_APP_API_KEY,
  
  authDomain: process.env.REACT_APP_AUTH_DOMAIN ,
  
  projectId: process.env.REACT_APP_PROJECT_ID,
  
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  
  messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
  
  appId: process.env.REACT_APP_APP_ID, */
  apiKey: "AIzaSyCQmeZGkGq1ntVDlZn2cnvatVU_UfvloM0",
  authDomain: "car-services-2c62f.firebaseapp.com",
  projectId: "car-services-2c62f",
  storageBucket: "car-services-2c62f.appspot.com",
  messagingSenderId: "162829014318",
  appId: "1:162829014318:web:9f56e0279acb98f05b16bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;