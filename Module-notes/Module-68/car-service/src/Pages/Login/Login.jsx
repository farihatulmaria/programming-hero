import axios from 'axios';
import React, { useRef } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,loading
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending,] =useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    if(loading || sending){
        return <Loading/>
    }
    if(user){
        navigate('/');
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email,password);
        
        const {data} = await axios.post('http://localhost:5000/login', {email})
        localStorage.setItem('accessToken' , data.accessToken)
    }
    const navigateRegister=()=>{
        navigate('/register')
    }    
    const resetPassword = async () =>{
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast.success('Sent email');
        }else{
            toast.warning('Please Enter Your Email Address');
        }
    }
    return (
        <div>
            <Container style={{minHeight:'70vh'}} className='d-flex align-items-center justify-content-center'>
                <div style={{minWidth:'400px'}} >
                    <Card className='p-2'>
                        <Card.Body>
                            <Card.Title>
                                <h2>Please Login </h2>
                            </Card.Title>
                            
                                <Form onSubmit={handleSubmit}>
                                    
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                                        <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control ref={passwordRef} type="password" required placeholder="Password" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember Me" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Login
                                    </Button>
                                </Form>
                                <p>Don't Have An Account? <Link to={'/register'} onClick={navigateRegister} className='pe-auto text-decoration-none'>Register Now</Link></p>

                                <p>Forgot Your Password? <Link to={'/login'} onClick={resetPassword} className='pe-auto text-decoration-none'>Reset Password</Link></p>
                        </Card.Body>
                    </Card>
                    <SocialLogin/>
                </div>
            </Container>
        </div>
    );
};

export default Login;