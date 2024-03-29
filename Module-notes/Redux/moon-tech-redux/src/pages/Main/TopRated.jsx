import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../Components/ProductCard";

const TopRated = () => {
  const products = useSelector(state=>state.product.allProducts)
  const ratedProducts = products?.filter(product=>product.rating >= 4);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {
        ratedProducts?.map(product=><ProductCard key={product._id} product={product}/>)
      }
    </div>
  );
};

export default TopRated;