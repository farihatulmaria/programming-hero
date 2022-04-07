import 'bootstrap/dist/css/bootstrap.min.css';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import app from './firebase.init';

const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');

  createUserWithEmailAndPassword(auth,email,passWord)
  .then(result=>{
    const user = result.user;
    console.log(user);
  })
  .catch(error=>{
    console.error(error)
  })



  // functions for handling registration form
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordBlur = (event) => {
    setPassWord(event.target.value);
  }
  const handleFormSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
    <div className="registration">
      <Container className='my-5'>
        <h2 className='text-primary'>Register </h2>
        <Form  onSubmit={handleFormSubmit} className='my-5'>
          <Form.Group className="mb-3" controlId="formBasicEmail">

            <Form.Label>Email address</Form.Label>
            <Form.Control required onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
            <Form.Control.Feedback type="invalid">
              Please input an email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">

            <Form.Label>Password</Form.Label>
            <Form.Control required onBlur={handlePasswordBlur} type="password" placeholder="Password" />
            <Form.Control.Feedback type="invalid">
              Please enter a Password.
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
    </>
  );
}

export default App;
