import React from 'react';

const BookingForm = ({treatment,Date,setTreatment}) => {
    const {name,slots}= treatment;
    const handleBooking =(e)=>{
        e.preventDefault();
        const date =  e.target.date.value;
        const time =  e.target.slot.value;
        const patientName =  e.target.name.value;
        const phone =  e.target.phone.value;
        const email =  e.target.email.value;
        const info ={
            date:date,
            time:time,
            name:patientName,
            service:name,
            phone:phone,
            email:email
        }
        console.log(info);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg my-3 -mt-1 mb-5">{name}</h3>
                    <form onSubmit={handleBooking} className="space-y-4">
                        <input type="text" name='date' placeholder="Date" className="!bg-slate-200" value={Date} readOnly />

                        <select name='slot' className="select select-primary w-full max-w-lg">
                            <option disabled selected>Select Your Time</option>
                            {
                                slots.map(slot=> <option>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Full Name" required/>
                        <input type="tel" name='phone' placeholder="Phone Number" required/>
                        <input type="email" name='email' placeholder="Email" required/>
                        <button className="btn-block" type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;