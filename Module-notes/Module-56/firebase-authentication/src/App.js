import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';
import app from './firebase.init';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({})

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  
  // sign in function
  const handleGoogleSignIn = () =>{
    signInWithPopup( auth, googleProvider)
    .then(result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error => {
      console.log(error);
    })
  }
  const handleGithubSignIn=()=>{
    signInWithPopup(auth,githubProvider)
    .then(result =>{
      const user = result.user;
      setUser(user);
    })
    .catch(err => console.log(err))
  } 

  const handleGoogleSignOut = () =>{
    signOut(auth)
    .then(()=>{
      setUser({})
    })
    .catch(error=>console.log(error))
  }
  
  return (
    <div className="App">
      <h2>{user.uid ? 'Sign Out' : 'Sign In'}</h2>
      {
        user.uid ? 
        <>
        <button onClick={()=> handleGoogleSignOut()}>google</button>
        <button onClick={()=> handleGoogleSignOut()}>github</button>
        </>:
        <>
        <button onClick={()=> handleGoogleSignIn()}>google</button>
        <button onClick={()=> handleGithubSignIn()}>github</button>
        </>
        }
      <br />     
      <br />
      <img src={user.photoURL} alt="" />
      <h3>{user.displayName}</h3>
      <h3>{user.email}</h3>
    </div>
  );

}

export default App;
