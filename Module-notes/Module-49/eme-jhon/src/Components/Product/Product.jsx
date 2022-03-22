import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';




const Product = (props) => {
    const {product,handleAddToCart} =props;
    const {name,img,seller,price,ratings} = product;
    
    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className="product-info">
                <p className="product-name">
                    {name}
                </p>
                <p className="product-price">Price: ${price}</p>

                <p className="product-seller">Manufacturer: {seller}</p>
                <p className="product-ratings">Ratings: {ratings} stars</p>
            </div>
            <button className='cart-btn' onClick={()=> handleAddToCart(product)}>
                Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;