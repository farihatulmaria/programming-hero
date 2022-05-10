import React from 'react';
import { DayPicker } from 'react-day-picker';
import BannerImg from '../../assets/images/chair.png';
const AppointmentBanner = () => {
    return (
        <div className="hero h-[800px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={BannerImg} className="max-w-lg my-5 rounded-lg shadow-2xl" alt='' />
                <div className="px-10">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <DayPicker/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;