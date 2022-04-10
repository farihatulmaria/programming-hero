import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth);
    
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
                {
                    user ? <button onClick={()=>signOut(auth)}>Sign Out</button> :
                    <Link to="/login">Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;