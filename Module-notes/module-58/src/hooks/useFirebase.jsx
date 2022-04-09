import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from "react";
import app from '../firebase';

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  
  const signInWithGoogle =()=>{
    signInWithPopup(auth,googleProvider)
    .then((result)=>{
      const user = result.user;
      console.log(user);
      setUser(user);
    })
    .catch((error)=>{
      const errorMessage = error.message;
      console.log(errorMessage);
    })
  }
  
  const handleSignOut=() =>{
    signOut(auth)
    .then(()=>{
      console.log('signed out');
    })
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);
  
  
  return {user,signInWithGoogle,handleSignOut}
};

export default useFirebase;
