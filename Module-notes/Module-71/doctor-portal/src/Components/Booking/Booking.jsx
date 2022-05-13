import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Offer from '../Offer/Offer';
import BookingForm from './BookingForm';

const Booking = ({selectedDate}) => {
    const [appointments, setAppointments] = useState([]);
    const [treatment, setTreatment] = useState(null) 
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, [])
    
    return (
        <div className='booking px-5 my-20'>
            <h6 className="title py-10">Available Appointments on {format(selectedDate, 'PP')}</h6>
            <div className="appointments grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {
                    appointments.map(appointment => <Offer key={appointment._id} setTreatment={setTreatment} appointment={appointment}/>)
                }
            </div>
            {treatment && <BookingForm Date={selectedDate} setTreatment={setTreatment} treatment={treatment}/>}
        </div>
    );
};

export default Booking;