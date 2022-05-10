import React from 'react';
import clock from '../../assets/icons/clock.svg';
import location from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';
const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <InfoCard img={clock}/>
            <InfoCard img={location}/> 
            <InfoCard img={phone}/> 
        </div>
    );
};

export default Info;