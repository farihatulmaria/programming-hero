import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from '../Components/ProductCard';

export let allproducts;

const Home = () => {
  const [products, setProducts] = useState([]);
  allproducts = products;
  useEffect(() => {
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
    .catch(err=>console.log(err))
  }, [])
  const state = useSelector((state)=>state);
  console.log(state);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {
        products.map(product=> <ProductCard key={product._id} product={product}/>)
      }
    </div>
  );
};

export default Home;