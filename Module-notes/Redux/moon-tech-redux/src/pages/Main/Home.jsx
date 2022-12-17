import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../Components/ProductCard";
import { toogleBrands, toogleStock } from '../../redux/actionCreator/filterAction';

export let allproducts;

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const filters = useSelector(state=>state.filter.filters);
  const {stock,brands}= filters;
  allproducts = products;
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  const activeClass = "text-white  bg-indigo-500 border-transparent";
  let content;
  if(products.length >= 1){
    content = products.map(product=><ProductCard key={product._id} product={product}/>)
  }
  if(products.length >=1 && (stock || brands)){
    content = products
        .filter(product=>{
          if(stock){
            return  product.status === true
          }
            return product
        }).filter(product=>{
          if(brands.length){
            return  brands.includes(product.brand)
          }
            return product
        })
        .map(product=><ProductCard key={product._id} product={product}/>)
  }
  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button
          className={`text-white border px-3 py-2 rounded-full font-semibold ${stock? `${activeClass}`: ""} `}
          onClick={()=>dispatch(toogleStock())}>
          In Stock
        </button>
        <button className={`text-white border px-3 py-2 rounded-full font-semibold ${brands?.includes("amd") ? `${activeClass}`: ""} `} onClick={()=> dispatch(toogleBrands("amd"))}>
          AMD
        </button>
        <button className={`text-white border px-3 py-2 rounded-full font-semibold ${brands?.includes("intel") ? `${activeClass}`: ""}`} onClick={()=> dispatch(toogleBrands("intel"))}>
          Intel
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        {content}
      </div>
    </div>
  );
};

export default Home;