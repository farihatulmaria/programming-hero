import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: []
}

export const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        loadProduct:(state,action)=>{
            state.product = [action.payload];
        },
        addProduct:(state,action)=>{
            state.product.push(action.payload);
        },
        deleteProduct:(state,action)=>{
            state.product.filter(product=>product._id !== action.payload)
        }
    }
})
export const { loadProduct, addProduct,deleteProduct} = productSlice.actions
export default productSlice.reducer