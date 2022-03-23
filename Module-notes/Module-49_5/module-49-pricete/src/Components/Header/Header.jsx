import React from 'react';
import logo from '../../images/Logo.svg';
const Header = () => {
    return (
        <header>
            <nav>
                <img src={logo} alt="eme-json" />
                <ul>
                    <li><a href="/order">order</a></li>
                    <li><a href="/review">order review</a></li>
                    <li><a href="/inventory">manage inventory</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;