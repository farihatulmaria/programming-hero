import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
const Registration = () => {

    const handleEmailBlur = (event) => {
        console.log(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        console.log(event.target.value);
    }
    const handleFormSubmit = (event) => {
      console.log(event.target[0].value);
      console.log(event.target[1].value);
      event.preventDefault()
    }
    return (
    <div className="Registration">
        <Container className='my-5'>
            <h2 className='text-primary mt-3'>Register </h2>
            <Form onSubmit={handleFormSubmit}>

            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">

                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </Container>
    </div>
    );
};

export default Registration;