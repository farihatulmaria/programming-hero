import React from 'react';
import Card from '../Card/Card';
import './CardGroup.css';
const CardGroup = () => {
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
    <div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                products.map(product => <Card key={product.id} product={product}/>)
            }
        </div>
    </div>
    );
};

export default CardGroup;