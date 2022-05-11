import React, { useState } from 'react';
import AppointmentBanner from '../../Components/AppointmentBanner/AppointmentBanner';
import Booking from '../../Components/Booking/Booking';

const Appointment = () => {
  const [selectedDate, setSelected] = useState(new Date());
    return (
        <div>
            <AppointmentBanner selectedDate={selectedDate} setSelected={setSelected}/>
            <Booking selectedDate={selectedDate} setSelected={setSelected}/>
        </div>
    );
};

export default Appointment;