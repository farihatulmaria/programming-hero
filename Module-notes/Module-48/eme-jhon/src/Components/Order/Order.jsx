import React, { useEffect, useState } from 'react';
import Product from '../../Components/Product/Product';
import './Order.css';

const productUrl ='https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json';

const Order = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch(productUrl)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    
    const handleAddToCart = (product) =>{
        const newCart = [...cart , product];
        setCart(newCart);
    }
    return (
        <section className='order-section'>
            <div className="product-container">
               {
                   products.map((product)=> <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>)
               }
            </div>
            <div className="cart-container">
                <h2 className='title'>Order Summary</h2>
                <h4>Selected Items: {cart.length}</h4>
            </div>
        </section>
    );
};

export default Order;