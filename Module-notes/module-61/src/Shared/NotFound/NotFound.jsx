import React from 'react';
import sleeping from '../../images/sleeping-cat.png';
const NotFound = () => {
    return (
        <div className='text-center my-5'>
            <h2>We Can't Find The Page Your Wanted</h2>
            <img src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;