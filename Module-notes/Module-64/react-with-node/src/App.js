import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { Button, Card, Container, Form } from 'react-bootstrap';

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  const handleAddUser = e => {
    e.preDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };

    // post data to server

    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        const newUsers = [...users, data];
        setUsers(newUsers);
        console.log(data);
      })

  }

  return (
    <>
      <h1 style={{textAlign:'center'}}>Loading a own data {users.length}</h1>
     <Container className='my-5'>
       <Card>
         <Card.Body>
         <Form onSubmit={handleAddUser}>
            <Form.Group className="mb-3" >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email"
              name='email' />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add User
            </Button>
          </Form>
         </Card.Body>
       </Card>
     </Container>
      <ul>
        {
          users.map(user => <li key={user.id}>{user.name}</li>)
        }
      </ul>
    </>
  );
}

export default App;
