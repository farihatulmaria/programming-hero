import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.js';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(user){
        console.log(user);
    }
    return (
        <div className='login'>
           <div className="flexible h-[700px]">
                <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title font-light mx-auto my-3">Login</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' />
                            </div>
                            <p className='text-xs underline'>Forgot Password ?</p>
                            <button>Login</button>
                            <p className='text-sm text-center'>New to Doctors Portal? <Link className='!text-primary' to="/sign-up">Create new account</Link></p>
                            <div className="divider">OR</div>
                            <button className='btn-outlined' onClick={()=>signInWithGoogle()}>Continue with Google</button>
                        </div>
                </div>
           </div>
        </div>
    );
};

export default Login;