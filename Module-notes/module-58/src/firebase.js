// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpYq2YSdGZHGvTK_KbrV0JrL0O5a4NdZI",
  authDomain: "fir-pulse-react-router.firebaseapp.com",
  projectId: "fir-pulse-react-router",
  storageBucket: "fir-pulse-react-router.appspot.com",
  messagingSenderId: "865522894022",
  appId: "1:865522894022:web:2190015d23592303a4c3c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;