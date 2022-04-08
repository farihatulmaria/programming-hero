import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header className='mb-5'>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink className='nav-link' to={'/'}>Home</NavLink>
                    <NavLink className='nav-link' to={'/products'}>products</NavLink>
                    <NavLink className='nav-link' to={'/orders'}>orders</NavLink>
                    <NavLink className='nav-link' to={'/register'}>register</NavLink>
                    <NavLink className='nav-link' to={'/login'}>login</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    );
};

export default Header;