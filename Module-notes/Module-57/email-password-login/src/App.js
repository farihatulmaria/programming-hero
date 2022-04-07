import 'bootstrap/dist/css/bootstrap.min.css';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { Button, Container, Form } from 'react-bootstrap';
import Header from './Components/Header/Header';
import app from "./firebase.init";

const auth = getAuth(app)

function App() {
  const [validated, setValidated] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameBlur = event => {
    setEmail(event.target.value);
  }
  const handleEmailBlur = event => {
    setUserName(event.target.value);
  }
  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }
  const handleRegisteredChange = event =>{
    setRegistered(event.target.checked)
  }

  const handleFormSubmit = event => {

    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }

    if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setError('Password Should contain at least one special character');
      return;
    }
    setValidated(true);
    setError('');

    if(registered) {
      console.log(email, password);
      signInWithEmailAndPassword(auth, email, password)
      .then(result =>{
        const user = result.user;
        console.log(user);
      })
      .catch(error =>{
        console.error(error);
        setError(error.message);
      })
    }
    else{
      createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setEmail('');
        setPassword('');
        verifyEmail();
        updateUserProfile()
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      })
    }

    
    event.preventDefault();
  }

  const handlePasswordReset = () =>{
    sendPasswordResetEmail(auth, email)
    .then(() =>{
      console.log('email sent')
    })
  }
  const updateUserProfile =()=>{
    updateProfile(auth.currentUser,{
      displayName:userName
    })
    .then(()=>{
      console.log('ok');
    })
    .catch(error=>console.error(error.message))
  }
  const verifyEmail = () =>{
    sendEmailVerification(auth.currentUser)
    .then(() =>{
      console.log('Email Verification Sent');
    })
  }

  return (
    <>
    <Header/>
      <div className="registration">
        <Container>
          <h2 className="text-primary">Please { registered ? 'Login': 'Register'}!!</h2>
          <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          {
            registered ? '':
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name </Form.Label>
              <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter your name" required />
              <Form.Control.Feedback type="invalid">
                Please provide a name.
              </Form.Control.Feedback>
            </Form.Group>
          }

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check onChange={handleRegisteredChange} type="checkbox" label="Already Registered?" />
            </Form.Group>
            <p className="text-danger">{error}</p>
            <Button onClick={handlePasswordReset} variant="link">Forget Password?</Button>
            <br />
            <Button variant="primary" type="submit">
              {registered ? 'Login':  'Register'}
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default App;