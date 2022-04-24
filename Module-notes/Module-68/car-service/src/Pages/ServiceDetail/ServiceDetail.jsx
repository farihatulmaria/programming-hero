import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})
    useEffect(() => {
      const url = `http://localhost:5000/services/${serviceId}`

      fetch(url)
      .then(res => res.json())
      .then(data => setService(data))
      .catch(err => console.log(err))
    }, [])
    
    return (
        <Container>
            <h2 className='text-center my-5'>{service.name}</h2>
            <p>{service.description}</p>
            <div className='text-center'>
                <Link to={`/checkout/${service._id}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </Container>
    );
};

export default ServiceDetail;