
import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase';
const Header = () => {
    const [ user ] = useAuthState(auth);

    return (
        <header className='mb-5'>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink className='nav-link' to={'/'}>Home</NavLink>
                    <NavLink className='nav-link' to={'/products'}>products</NavLink>
                    <NavLink className='nav-link' to={'/orders'}>orders</NavLink>
                    <NavLink className='nav-link' to={'/register'}>register</NavLink>
                    {
                        user?.uid ? 
                        <>
                            <NavDropdown id="basic-nav-dropdown">
                                <Container className='text-center p-3'>
                                    <img className='user-img' src={user ? user?.photoURL: ''} alt="" />
                                    <p>{user ? user?.displayName: 'stranger'}</p>
                                    <Button onClick={()=> signOut(auth)}>Sign Out</Button>
                                </Container>
                            </NavDropdown>
                        </>
                        : <NavLink className='nav-link' to='/login'>Login</NavLink>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    );
    
};

export default Header;