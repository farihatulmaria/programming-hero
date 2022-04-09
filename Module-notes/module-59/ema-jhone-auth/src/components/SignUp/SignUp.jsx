import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase';

const SignUp = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();     
    const [
    createUserWithEmailAndPassword,
    user
    ] = useCreateUserWithEmailAndPassword(auth);
    
    const [confirmPassword, setConfirmPassword] = useState();  
    const [error, setError] = useState(); 

    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value);
    }
    const handleConfirmPasswordBlur = (e) => {
        setConfirmPassword(e.target.value);
    }
    const createUser=(e)=>{
        e.preventDefault();
        if(password !== confirmPassword){
            setError('Your two password did not matched');
            return;
        }if(password.length === 6){
            setError('Password should be at least 6 characters or longer')
        }
        
    }
    return (
        <div className="container">
            <div className="form">
                <h2>Sign Up</h2>
                <form onSubmit={createUser}>
                    <label>Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" id="email" /> 

                    <label>Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="password" />

                    <label>Confirm Password</label>
                    <input onBlur={handleConfirmPasswordBlur} type="password" name="password" id="password-confirm" />

                    <input type="submit" name="submit-btn" id="submit-btn" value='Sign Up'  />

                </form>
                <p>Already have an account? <Link to={'/login'}>Login</Link></p>
                <p className='text-gray'>or</p>
                <p style={{color:'red'}}>{error}</p>
                <button>
                    <FontAwesomeIcon icon={faGoogle}/> Continue with Google
                </button>
            </div>
        </div>
    );
};

export default SignUp;