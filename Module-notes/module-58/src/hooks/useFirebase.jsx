import { useState } from "react";

const useFirebase = () => {
  const [user, setUser] = useState({});

  function signInWithGoogle(){
      console.log('signing in');
  }
  
  return {user,signInWithGoogle}
};

export default useFirebase;