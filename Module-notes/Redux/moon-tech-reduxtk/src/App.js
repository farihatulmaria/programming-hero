import React from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Router/routes';

function App() {
  return (
    <>
      <Toaster/>
      <RouterProvider router={routes}/>
    </>
  );
}

export default App;
