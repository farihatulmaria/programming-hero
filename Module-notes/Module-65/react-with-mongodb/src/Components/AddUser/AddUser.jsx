import React from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
const AddUser = () => {
    const handleAddUser = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const user = {name,email,password}

        // Sending data to user
        fetch('http://localhost:5000/user' , {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert("You're now our user");
            e.target.reset()
        })
  }
    return (
        <div>
            <h1 className='text-center my-5 fw-bold'>Become a User in Our Website</h1>
            <Container className='d-flex align-items-center justify-content-center' style={{minHight:'70vh'}}>
                <div className="w-100" style={{maxWidth:'500px'}}>
                    <Card className='p-3 border-secondary shadow'>
                        <Card.Body>
                            <Form onSubmit={handleAddUser}>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Enter Your Name</Form.Label>
                                    <Form.Control name='name' type="text" placeholder="Enter Your Name" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name='password'  type="password" placeholder="Password" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Add User
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    );
};

export default AddUser;