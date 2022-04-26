import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase';
import logo from '../../images/logo.png';
 
const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <header>
            <Navbar fixed='top' bg='dark' variant="dark" expand="lg" className='mb-5'>
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img src={logo} style={{width:"80%"}} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="home#services">Services</Nav.Link>
                        <Nav.Link href="home#experts">Experts</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                        {
                            user && <>
                                <Nav.Link href="/add-service">Add Services</Nav.Link>
                                <Nav.Link href="/manage-service">Manage Services</Nav.Link>
                                <Nav.Link href="/order">Order</Nav.Link>
                            </>
                        }

                       { user ? <Button onClick={()=>signOut(auth)}>Sign Out</Button> : <Nav.Link href="/login">Login</Nav.Link>}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;