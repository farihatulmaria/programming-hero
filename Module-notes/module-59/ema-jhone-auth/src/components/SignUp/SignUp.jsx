import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase';

const SignUp = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();  
    const [confirmPassword, setConfirmPassword] = useState();  
    const [errorMessage, setErrorMessage] = useState(); 
    
    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);

    let navigate = useNavigate();
   

    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value);
    }
    const handleConfirmPasswordBlur = (e) => {
        setConfirmPassword(e.target.value);
    }

    const createUserAccount=(e)=>{
        e.preventDefault();
        if(password !== confirmPassword){
            setErrorMessage('Your two password did not matched');
            return;
        }else if(password.length < 6){
            setErrorMessage('Password should be at least 6 characters or longer')
        }
        createUserWithEmailAndPassword(email,password)
        .then(()=>{
            setErrorMessage('');
            console.log(user);
        })
    }

    if(user){
        navigate('/')
    }
    return (
        <div className="container">
            <div className="form">
                <h2>Sign Up</h2>
                <form onSubmit={createUserAccount}>
                    <label>Email</label>
                    <input onBlur={handleEmailBlur} type="email" id="email" /> 

                    <label>Password</label>
                    <input onBlur={handlePasswordBlur} type="password" id="password" />

                    <label>Confirm Password</label>
                    <input onBlur={handleConfirmPasswordBlur} type="password" id="password-confirm" />

                    <input type="submit" id="submit-btn" value='Sign Up'  />

                </form>
                <p>Already have an account? <Link to={'/login'}>Login</Link></p>
                <p className='text-gray'>or</p>
                <p style={{color:'red'}}>{errorMessage}</p>
                <button>
                    <FontAwesomeIcon icon={faGoogle}/> Continue with Google
                </button>
            </div>
        </div>
    );
};

export default SignUp;