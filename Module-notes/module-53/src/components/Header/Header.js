import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <a href="/home">
                <img src={logo} alt=""  />
            </a>
            <div>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;