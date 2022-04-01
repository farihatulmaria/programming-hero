import React from 'react';
import './Tshirt.css';
const Tshirt = ({tshirt,handleAddToCart}) => {
    const {name,picture,price}=tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt={name} />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={()=>handleAddToCart(tshirt)}>Add To Cart</button>
        </div>
    );
};

export default Tshirt;