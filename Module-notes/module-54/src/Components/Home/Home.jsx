import React, { useState } from 'react';
import useTshirts from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';
const Home = () => {
    const [tshirts, setTshirts] = useTshirts([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(tShirt => tShirt._id === selectedItem._id);
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else{
            alert('item already added');
        }

    }

    const handleRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(rest);
    }
    const removeAllFromCart = (selectedItem) => setCart([]);
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <Tshirt tshirt ={tshirt} handleAddToCart={handleAddToCart} key={tshirt._id}/>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}
                removeAllFromCart={removeAllFromCart}/>
            </div>
        </div>
    );
};

export default Home;