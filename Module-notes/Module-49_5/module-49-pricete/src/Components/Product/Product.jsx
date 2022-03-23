import React from 'react';
import './Product.css'
const Product = (props) => {
    const {product} = props;
    const {name,id,price,seller,img,rating} = product 
    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className="product-info">
                <h2 className='product-name'>{name}</h2>
                <h3 className='product-price'>Price: ${price}</h3>
                <p className='product-seller'>Manufacturer : {seller}</p>
                <p className='product-rating'>Rating: {rating} stars</p>
            </div>
            <button className='cart-btn'>add to cart</button>
        </div>
    );
};

export default Product;