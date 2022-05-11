import { format } from 'date-fns';
import React from 'react';

const Booking = ({selectedDate}) => {
    return (
        <div className='booking  my-10'>
            <h6 className="title my-3">Available Appointments on {format(selectedDate, 'PP')}</h6>
        </div>
    );
};

export default Booking;