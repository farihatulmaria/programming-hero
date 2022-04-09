import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase';
import './Home.css';
const Home = () => {
    const [user] = useAuthState(auth); 
     return (
        <div>
            <h1 className='text-center'>
                Hi there {user ? user?.displayName :''}
            </h1>
        </div>
    );
};

export default Home;