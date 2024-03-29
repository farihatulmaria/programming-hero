import { deleteProduct } from "../../actionCreator/productAction";

const deleteProductData = (id)=>{
    return async (dispatch,getState)=>{
        const res = await fetch(`http://localhost:5000/product/${id}`,{
            method:'DELETE',
            headers:{
                "Content-type":"application/json"
            },
        })
        const data = await res.json();
        if(data.acknowledged){
            dispatch(deleteProduct(id))
        }
    }
}

export default deleteProductData