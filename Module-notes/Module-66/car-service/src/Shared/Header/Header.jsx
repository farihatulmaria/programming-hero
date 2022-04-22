import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
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
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                        {
                            user && <>
                                <Nav.Link href="/add-service">Add Services</Nav.Link>
                                <Nav.Link href="/manage-service">Manage Services</Nav.Link>
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