import { fab, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const {signInWithGoogle } = useFirebase();
    return (
        <div>
            <Container>
            <h2>please login</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <div className='my-3'>
                    <Button onClick={signInWithGoogle}><FontAwesomeIcon icon={fab, faGoogle} /></Button>
                </div>
                
            </Container>
        </div>
    );
};

export default Login;