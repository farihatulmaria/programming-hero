import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleExpert = ({expert}) => {
    const  {name , img} = expert;
    return (
        <Col>
            <Card>
                <Card.Img src={img}/>
                <Card.Body className='text-center'>
                    <Card.Title>
                        {name}
                    </Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleExpert;