import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleService from '../SingleService/SingleService';
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
      fetch('services.json')
      .then(res => res.json())
      .then(data=> setServices(data))
      .catch(err => console.log(err))
    }, [])
    
    return (
        <section id='services'>
            <h1 className='text-center fw-bold text-primary my-5'>Our Service</h1>
            <Container>
                <Row lg={3} md={2} xs={1} className='g-5'>
                {
                    services.map(service => <SingleService key={service.id} service={service}/>)
                }
                </Row>
            </Container>
        </section>
    );
};

export default Services;