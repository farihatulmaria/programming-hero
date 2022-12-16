import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";

const Cart = () => {
  const state = useSelector(state=>state);
  let cart = state.cart;
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {
        cart?.map(product=><ProductCard key={product._id} product={product}/>)
      }
    </div>
  );
};

export default Cart;