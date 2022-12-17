import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Main = () => {
    return (
      <div className='px-10 bg-gray-800 h-max'>
        <NavBar />
        <Outlet />
      </div>
    );
};

export default Main;