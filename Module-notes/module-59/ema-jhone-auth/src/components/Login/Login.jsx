import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [
        signInWithEmailAndPassword,
        user,
        error
      ] = useSignInWithEmailAndPassword(auth);
    const emailBlur = (e) =>{
        setEmail(e.target.value)
    }
    const passWordBlur = (e) =>{
        setPassword(e.target.value)
    }

    let navigate = useNavigate();
    let location = useLocation();
    if(user){
        navigate('/')
    } else{
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    const formSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email,password)
        .then(()=>{
            console.log(user);
        })
    }
    return (
        <div className="container">
            <div className="form">
                <h2>Login</h2>
                <form onSubmit={formSubmit}>
                    <label>Email</label>
                    <input onBlur={emailBlur} type="email" name="email" id="email" /> 

                    <label>Password</label>
                    <input onBlur={passWordBlur} type="password" name="password" id="password" />

                    <input type="submit" name="submit-btn" id="submit-btn" value='Login' />
                </form>
                <p>New to Ema-john? <Link to={'/signUp'}>Create New Account</Link></p>
                <p className='text-gray'>or</p>
                <p style={{color:'red'}}>{error}</p>
                <button>
                    <FontAwesomeIcon icon={faGoogle}/> Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Login;