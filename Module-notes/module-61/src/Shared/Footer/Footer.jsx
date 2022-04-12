import React from 'react';
const Footer = () => {
    const dateTime = () =>{
        let currentDate = new Date();
        let displayDate = currentDate.getDate() + '/' + currentDate.getMonth() + '/' + currentDate.getFullYear();
        
        return displayDate;
    }
    return (
        <footer>
            <p>copyright © demo-company {dateTime()}</p>
        </footer>
    );
};

export default Footer;