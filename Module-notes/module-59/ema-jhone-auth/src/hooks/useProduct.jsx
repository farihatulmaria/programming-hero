/* an custom useState */

import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
      fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-cart-caluclation-module-49/main/public/products.json')
      .then(res => res.json())
      .then(data => setProducts(data));

    }, []) 

    return [products , setProducts];
}

export default useProducts;