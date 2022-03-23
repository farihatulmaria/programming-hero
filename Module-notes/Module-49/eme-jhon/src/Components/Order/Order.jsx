import React, { useEffect, useState } from 'react';
import Product from '../../Components/Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import './Order.css';

const productUrl ='https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json';

const Order = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        fetch(productUrl)
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    },[])

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];

        for (const id in storedCart) {
            const addedProduct = products.find((product) => product.id === id);

           if(addedProduct){
               const quantity = storedCart[id];
               addedProduct.quantity = quantity;
               savedCart.push(addedProduct);
           }
        }
        setCart(savedCart);
    },[products])

    const handleAddToCart = (selectedProduct) =>{
        let newCart = []
        const exists = cart.find(product => product.id === selectedProduct.id)
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart , selectedProduct];
        }else{
            const remaining = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity++;
            newCart = [...remaining,exists] 
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    return (
        <section className='order-section'>
            <div className="product-container">
               {
                   products.map((product)=> <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>)
               }
            </div>
            <div className="cart-container">
                <Cart cart={cart}/>
            </div>
        </section>
    );
};

export default Order;