import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {
    return (
        <div className="container">
            <div className="form">
                <h2>Login</h2>
                <form>
                    <label>Email</label>
                    <input type="email" name="email" id="email" /> 

                    <label>Password</label>
                    <input type="password" name="password" id="password" />

                    <input type="submit" name="submit-btn" id="submit-btn" value='Login' />
                </form>
                <p>New to Ema-john? <Link to={'/signUp'}>Create New Account</Link></p>
                <p className='text-gray'>or</p>

                <button>
                    <FontAwesomeIcon icon={faGoogle}/> Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Login;