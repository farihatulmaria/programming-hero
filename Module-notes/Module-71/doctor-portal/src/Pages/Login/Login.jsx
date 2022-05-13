import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import auth from '../../firebase.js';
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user2,
        loading2,
        error2,
      ] = useSignInWithEmailAndPassword(auth);
      
    const navigate = useNavigate();
    const handleLoginWithEmailAndPass =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email,password);
    }
    if(loading){
        return <Loading/>
    }
    if(user){
        navigate('/');
    }
    return (
        <div className='login'>
           <div className="flexible h-[700px]">
                <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title font-light mx-auto my-3">Login</h2>
                            <form onSubmit={handleLoginWithEmailAndPass}>
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
                                <p className='text-xs underline my-3'><Link to="/sign-up">Forgot Password ?</Link></p>

                                <button className='w-full my-3'>Login</button>
                            </form>
                            
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