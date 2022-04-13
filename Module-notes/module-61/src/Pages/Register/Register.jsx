import React, { useRef } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handleRegister = (e) =>{
        e.preventDefault();
        // const email = emailRef.current.value;
        // const password = passwordRef.current.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
    }
    const navigate = useNavigate();
    const navigateLogin=()=>{
        navigate('/login')
    } 
    return (
        <div>
        <Container style={{minHeight:'70vh'}} className='d-flex align-items-center justify-content-center'>
            <div style={{minWidth:'500px'}} >
               <Card className='p-2'>
                   <Card.Body>
                       <Card.Title>
                        <h2>Register Now</h2>
                       </Card.Title>
                        <Form onSubmit={handleRegister} className='my-4'>
                            
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control name='userName' ref={nameRef} type="text" placeholder="Enter your name"  />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name='email' ref={emailRef} type="email" placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name='password' ref={passwordRef} type="password" required placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p>Already Have An Account? <Link to={'/register'} onClick={navigateLogin} className='pe-auto text-decoration-none'>Login</Link></p>
                   </Card.Body>
               </Card>
            </div>
            </Container>
            
        </div>
    );
};

export default Register;