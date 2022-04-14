import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {

    const dateTime = () =>{
        let currentDate = new Date();
        let displayDate = currentDate.getFullYear();
        
        return displayDate;
    }

    return (
        <footer className='bg-dark w-100'>
            <Container className='text-center text-white py-4'>
                <p>copyright © demo-company {dateTime()}</p>
            </Container>
        </footer>
    );
};

export default Footer;