import React from 'react';
import { Card } from 'react-bootstrap';
const CardV2 = (props) => {
    const {name,img,price} = props.product;

    return (
        <>
           <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                           Price:{price}
                    </Card.Text>
                </Card.Body>
            </Card> 
        </>
    );
};

export default CardV2;