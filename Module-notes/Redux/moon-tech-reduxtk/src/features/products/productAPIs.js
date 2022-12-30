import axios from "../../utils/axios.config.js";

export const fetchProducts = async ()=>{
    const data = await axios.get("/products");
    return data?.data?.data;
}

export const postProduct = async(product)=>{
    await axios.post("/product",product)
}
export const deleteProduct = async(id)=>{
    await axios.delete(`/product/${id}`)
}