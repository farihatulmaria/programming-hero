import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
const Header = () => {
    return (
        <div>
            <h1>Welcome to my routing website</h1>
            <nav>
                <CustomLink index to="/">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/friends">Friends</CustomLink>
                <CustomLink to="/posts">Posts</CustomLink>
            </nav>
        </div>
    );
};

export default Header;