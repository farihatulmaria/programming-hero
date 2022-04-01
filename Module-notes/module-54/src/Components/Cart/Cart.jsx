import React from 'react';
import './Cart.css';
const Cart = ({cart,handleRemoveFromCart,removeAllFromCart}) => {
    /*Conditional rendering options*/
    // 1. Element variable
    // 2. Ternary operator
    // 3. && operator
    // 4. || operator
    let command;
    if(cart.length === 0){
        command = <p>Please Add At Least One Items</p>;
    }else if(cart.length === 1){
        command = <p>Please Add More Items...</p>
    }
    else{
        command = <p><small>Thanks for adding item</small></p>
    }
    return (
        <div>
            <h1>This is from Cart Component</h1>
            
            <p>Selected Items : {cart.length}</p>
            {
                cart.map(tShirt =><p>
                    {tShirt.name} 
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                    </p>)
            }
            {cart.length === 3 && <div></div>}
            {command}
            {
                cart.length !== 4 ?<p>keep adding</p> : <button onClick={()=>removeAllFromCart()}>Remove All</button>
            }
        </div>
    );
};

export default Cart;