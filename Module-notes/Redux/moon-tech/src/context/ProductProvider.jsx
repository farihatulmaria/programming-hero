import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { actionTypes } from '../state/ProductState/ActionTypes';
import { initialState, ProductReducer } from '../state/ProductState/ProductReduces';

const PRODUCT_CONTEXTS = createContext();

const ProductProvider = ({children}) => {
    const [state ,dispatch] = useReducer(ProductReducer,initialState)

    useEffect(() => {
        dispatch({type:actionTypes.FECTHING_START})
        fetch('products.json')
        .then((res) =>res.json())
        .then(data => dispatch({type:actionTypes.FECTHING_SUCCESS,payload:data}))
        .catch(err=>dispatch({type:actionTypes.FECTHING_ERROR}))
     }, [])
    const value = {
        state,
        dispatch 
    }

    return (
        <>
            <PRODUCT_CONTEXTS.Provider value={value}>
                {children}
            </PRODUCT_CONTEXTS.Provider>
        </>
    )
};
export const useProducts = () =>{
    const state = useContext(PRODUCT_CONTEXTS);
    return state;
}

export default ProductProvider;