import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
const Header = () => {
    const {user,handleSignOut} = useFirebase();
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
                    <span>{user?.displayName && user?.displayName}</span>
                    {/* {
                        user.uid ? <Button onClick={handleSignOut}>Sign Out</Button>:
                        <NavLink className='nav-link' to={'/login'}>login</NavLink>
                    } */}
                    {
                        user?.uid ? <Button onClick={handleSignOut}>sign out</Button> : <NavLink className='nav-link' to='/login'>Login</NavLink>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    );
    
};

export default Header;