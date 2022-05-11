import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Offer from '../Offer/Offer';

const Booking = ({selectedDate}) => {
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch('appointments.json')
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, [])
    
    return (
        <div className='booking px-5 my-20'>
            <h6 className="title py-10">Available Appointments on {format(selectedDate, 'PP')}</h6>
            <div className="appointments grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {
                    appointments.map(appointment => <Offer Date={selectedDate} key={appointment._id} appointment={appointment}/>)
                }
            </div>
        </div>
    );
};

export default Booking;