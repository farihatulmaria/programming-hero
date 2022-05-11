import React from 'react';

const Offer = ({appointment}) => {
    const {name,slots}= appointment;
    return (
        <div className="card py-5 bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="title">{name}</h2>
                <p>{slots.length} {slots.length > 1 ? 'SPACES':'SPACE'} AVAILABLE</p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal" className="my-3 modal-button">Book Appointment</label>

                    {/* modal */}
                    
                    <input type="checkbox" id="booking-modal" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="font-bold text-lg">{name}</h3>
                            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                            <div className="modal-action">
                                <label for="booking-modal" className="btn">Yay!</label>
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
