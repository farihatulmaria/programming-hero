import axios from 'axios';
import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase';
const BookingForm = ({treatment,Date,setTreatment}) => {
    const [user] = useAuthState(auth);
    const {_id,name,slots}= treatment;
    const formattedDate = format(Date,'PP');
    const handleBooking =(e)=>{
        e.preventDefault();
        const event = e.target; 
        const slot = event.slot.value;
        const date =  formattedDate;
        const time =  event.slot.value;
        const patientName =  user.displayName;
        const phone =  event.phone.value;
        const email =  user.email;
        const booking ={
            patientName,
            email,
            phone, 
            date,
            time,
            name,
            treatmentId:_id,
        }
        const url = 'http://localhost:5000/booking';
        axios.post(url,{
            body:booking,
        })
        .then(res => setTreatment(null))
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn bg-gradient-to-r border-0 from-secondary to-primary btn-sm btn-circle text-white absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg my-3 -mt-1 mb-5">{name}</h3>
                    <form onSubmit={handleBooking} className="space-y-4">
                        <input type="text" name='date' placeholder="Date" className="!bg-slate-200" value={formattedDate} readOnly />

                        <select name='slot' className="select select-primary w-full max-w-lg">
                            <option disabled selected>Select Your Time</option>
                            {
                                slots.map((slot,index)=> <option key={index}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' className="!bg-slate-200" value={user?.displayName} placeholder="Full Name" required/>
                        <input type="email" name='email' value={user?.email} placeholder="Email" className="!bg-slate-200" readOnly/>
                        <input type="tel" name='phone' placeholder="Phone Number" required/>
                        <button className="btn-block" type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;