import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import SingleService from '../SingleService/SingleService';
const Services = () => {

    const [services] = useServices();
    return (
        <section id='services'>
            <h1 className='text-center fw-bold text-primary my-5'>Our Service</h1>
            <Container>
                <Row lg={3} md={2} xs={1} className='g-5'>
                {
                    services.map(service => <SingleService key={service._id} service={service}/>)
                }
                </Row>
            </Container>
        </section>
    );
};

export default Services;