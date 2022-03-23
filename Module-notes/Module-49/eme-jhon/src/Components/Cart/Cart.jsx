import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    
    for(const product of cart){

        quantity +=  product.quantity;
        total +=  product.price * product.quantity;
        shipping += product.shipping + product.quantity;
    }

    const tax = Number((total * 0.1).toFixed(2));

    let grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h2 className='title'>Order Summary</h2>
            <div className="total">
                <h4>Selected Items: {quantity}</h4>
                <h4>Total Price: ${total}</h4>
                <h4>Total Shipping: ${shipping}</h4>
                <h4>Tax: {tax}</h4>
                <h4>Grand Total: ${grandTotal.toFixed(2)}</h4> 
            </div>
        </div>
    );
    
};

export default Cart;