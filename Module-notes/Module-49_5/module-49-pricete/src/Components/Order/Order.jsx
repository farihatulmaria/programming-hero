import React, { useEffect, useState } from 'react';
import './Order.css'
import Product from '../Product/Product';
const productUrl = 'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json';
const Order = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(productUrl)
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    }, [])
    return (
        <section className='order-section'>
            <div className="product-container">
                {
                    products.map(product => <Product product={product}/>)
                }
            </div>
            <div className="order-container"></div> 
        </section>
    );
};

export default Order;