import React from 'react';

const Offer = ({appointment,Date}) => {
    const {name,slots}= appointment;
    return (
        <div className="card py-5 bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="title">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : "Try it on another day"}</p>
                <p>{slots.length} {slots.length > 1 ? 'SPACES':'SPACE'} AVAILABLE</p>

                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal" className="my-3 modal-button" disabled={slots.length===0}>Book Appointment</label>

                    {/* modal */}

                    <input type="checkbox" id="booking-modal" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="font-bold text-lg my-3">{name}</h3>
                            <div className="space-y-4">

                                <input type="text" placeholder="Date" className="input bg-slate-200 input-bordered input-primary w-full max-w-lg" value={Date} readOnly />

                                <input type="text" placeholder="Time" className="input bg-slate-200  input-bordered input-primary w-full max-w-lg" value={slots[0]} readOnly/>

                                <input type="text" placeholder="Full Name" className="input input-bordered input-primary w-full max-w-lg" />
                                <input type="tel" placeholder="Phone Number" className="input input-bordered input-primary w-full max-w-lg" />
                                <input type="email" placeholder="Email" className="input input-bordered input-primary w-full max-w-lg" />
                            </div>
                            <div className="modal-action">
                                <label htmlFor="booking-modal" className="btn">Yay!</label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Offer;

/* 








*/
