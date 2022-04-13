import React from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase';
const Register = () => {
   const [
        createUserWithEmailAndPassword,
        user,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    if(user){
        navigate('/');
    }

    const handleRegister = event =>{
        event.preventDefault();
        // const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
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
                                <Form.Control name='userName' type="text" placeholder="Enter your name"  />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name='email' type="email" placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name='password' type="password" required placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p>Already Have An Account? <Link to={'/register'} className='pe-auto text-decoration-none'>Login</Link></p>
                   </Card.Body>
               </Card>
            </div>
            </Container>
            
        </div>
    );
};

export default Register;