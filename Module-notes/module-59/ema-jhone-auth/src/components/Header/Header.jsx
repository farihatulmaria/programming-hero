import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <a href="/home">
                <img src={logo} alt=""  />
            </a>
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
                <Link to="/signUp">Sign Up</Link>
            </div>
        </nav>
    );
};

export default Header;