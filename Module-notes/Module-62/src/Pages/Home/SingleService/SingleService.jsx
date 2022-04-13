import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const SingleService = ({service}) => {
    const {name,img,price,description,id} = service;
    let navigate = useNavigate();
    const navigateToServiceDetails = (id) => {
        navigate(`/service/${id}`)
    }
    return (
        <Col>
            <Card>
                <Card.Img variant='top' src={img}/>
                <Card.Body>
                    <Card.Title>
                        <h3>{name}</h3>
                    </Card.Title>
                    <h4>Price: {price}</h4>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button onClick={()=> navigateToServiceDetails(id)} className='w-100'>Book The Service</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleService;