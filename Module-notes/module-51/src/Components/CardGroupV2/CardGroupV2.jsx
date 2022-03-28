import React from 'react';
import { CardGroup } from 'react-bootstrap';
import CardV2 from '../CardV2/CardV2';
const CardGroupV2 = () => {
    const products = [
        {
            id:1,
            name:"Mac",
            price:100000,
            img:"https://cdn.pixabay.com/photo/2015/04/21/12/16/mac-733178_960_720.jpg"
        },
        {
            id:3,
            name:"Mac Pro",
            price:200000,
            img:"https://cdn.pixabay.com/photo/2015/04/21/12/16/mac-733178_960_720.jpg"
        },
        {
            id:4,
            name:"Mac Ultra",
            price:500000,
            img:"https://cdn.pixabay.com/photo/2015/04/21/12/16/mac-733178_960_720.jpg"
        },
            
        ]
    return (
        <div className='card-section'>
            <CardGroup className='gap-4'>
                {
                    products.map(product => <CardV2 key={product.id} product={product}/>)
                }
            </CardGroup>
        </div>
    );
};

export default CardGroupV2;