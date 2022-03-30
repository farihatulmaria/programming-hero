import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart , setCart] = useCart(products);

    const removeFromCart = (id) => {
        const newCart = cart.filter((cartItems) => cartItems.id !== id);
        setCart(newCart);
        removeFromDb(id);
    }
    return (
        <div className='shop-container'>
            <div className="review-container">
                {
                    cart.map(product => <ReviewItem 
                        key={product.id} 
                        product ={product}
                        removeFromCart ={removeFromCart}
                        />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;