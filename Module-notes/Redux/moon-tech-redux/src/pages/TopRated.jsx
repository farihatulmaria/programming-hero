import React from "react";
import ProductCard from "../Components/ProductCard";
import { allproducts } from "./Home";

const TopRated = () => {
  const ratedProducts = allproducts?.filter(product=>product.rating >= 4);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {
        ratedProducts?.map(product=><ProductCard key={product._id} product={product}/>)
      }
    </div>
  );
};

export default TopRated;