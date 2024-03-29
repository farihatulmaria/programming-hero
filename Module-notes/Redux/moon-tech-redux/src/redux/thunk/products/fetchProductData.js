import { loadProduct } from "../../actionCreator/productAction";
const fetchProductData = () =>{
    return async (dispatch,getState)=>{
        const res = await fetch("http://localhost:5000/products")
        const data = await res.json();
        console.log(data);
        if(data?.data?.length){
            dispatch(loadProduct(data.data))
        }
    }
}

export default fetchProductData;