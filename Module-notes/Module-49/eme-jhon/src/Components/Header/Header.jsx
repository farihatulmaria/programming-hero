import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';


const Header = () => {
    return (
        <header>
            <nav>
                <img src={logo} alt="logo" />
                <div>
                    <a href="/order">Order</a>
                    <a href="/review">Order Review</a>
                    <a href="/inventory">Manage Inventory</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;