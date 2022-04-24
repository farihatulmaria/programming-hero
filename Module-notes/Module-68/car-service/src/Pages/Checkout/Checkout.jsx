import React from 'react';
import { Button, Card, Container, FloatingLabel, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    return (
        <div className='check-out'>
           <Container>
                <h2 className=' mt-5'>{service.name}</h2>
                <p>{service.description}</p>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <h2>Please Checkout your booking</h2>
                        </Card.Title>
                        <Form className='my-5'>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Name"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Name" name='name'/>
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control type="email" name='email' placeholder="name@example.com" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingService"
                                label="Service Name"
                                className="mb-3"
                            >
                                <Form.Control type="text" name='service' value={service.name} placeholder="Service" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingAddress"
                                label="Address"
                                className="mb-3"
                            >
                                <Form.Control type="text" name='address' placeholder="Address" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingPhone"
                                label="Phone"
                                className="mb-3"
                            >
                                <Form.Control type="number" name='phone' placeholder="Phone" />
                            </FloatingLabel>
                            <Button type='submit' className='w-100 py-2'>Place Order</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container> 
        </div>
    );
};

export default Checkout;