import { ADD_PRODUCT, ADD_TO_CART, DELETE_PRODUCT, LOAD_PRODUCT, REMOVE_FROM_CART } from "../actionTypes"

export const loadProduct =(data)=>{
    return{
        type:LOAD_PRODUCT,
        payload:data
    }
}
export const addProduct =(data)=>{
    return{
        type:ADD_PRODUCT,
        payload:data
    }
}
export const deleteProduct =(id)=>{
    return{
        type:DELETE_PRODUCT,
        payload:id
    }
}
export const addToCart =(data)=>{
    return{
        type:ADD_TO_CART,
        payload:data
    }
}
export const removeFromCart =(data)=>{
    return{
        type:REMOVE_FROM_CART,
        payload:data
    }
}