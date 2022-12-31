import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAGXi-ymxQDnykNtnGwJh5rk4BJ74GT1XQ",
  authDomain: "jobbox-6e6ea.firebaseapp.com",
  projectId: "jobbox-6e6ea",
  storageBucket: "jobbox-6e6ea.appspot.com",
  messagingSenderId: "552192775520",
  appId: "1:552192775520:web:e23851b8bc8f08dcf23a05"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth