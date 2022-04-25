import axios from 'axios';
import React from 'react';
import { Button, Card, Container, FloatingLabel, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase';
import useServiceDetail from '../../hooks/useServiceDetail';
const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);
    
    const handleOrder = e =>{
        e.preventDefault();
        
        const order = {
            email: user.email,
            service : service.name,
            serviceId: serviceId,
            address: e.target.address.value,
            phone : e.target.phone.value,
        }
        axios.post('',order)
        .then(res=> res.data )
    }
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
                        <Form  onSubmit={handleOrder} className='my-5'>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Name"
                                className="mb-3"
                            >
                                <Form.Control value={user.displayName} type="text" placeholder="Name" name='name' readOnly required disabled/>
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control value={user.email} type="email" name='email' placeholder="name@example.com"  required readOnly disabled/>
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingService"
                                label="Service Name"
                                className="mb-3"
                            >
                                <Form.Control type="text" name='service' value={service.name} placeholder="Service" required readOnly disabled/>
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingAddress"
                                label="Address"
                                className="mb-3"
                            >
                                <Form.Control type="text" name='address' placeholder="Address" autoComplete='off' required />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingPhone"
                                label="Phone"
                                className="mb-3"
                            >
                                <Form.Control type="number" name='phone' placeholder="Phone"  required/>
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