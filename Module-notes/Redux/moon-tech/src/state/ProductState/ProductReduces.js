import { actionTypes } from "./ActionTypes";
export const initialState = {
    loading:false,
    products:[],
    error:false,
    cart:[]
};
export const ProductReducer = (preState, action)=>{
    switch(action.type){
        case actionTypes.FECTHING_START:
            return {
                ...preState ,
                loading:true,
                error:false
            }
        case actionTypes.FECTHING_SUCCESS:
                return {
                    ...preState ,
                    loading:false,
                    products:action.payload,
                    error:false
                }
        case actionTypes.FECTHING_ERROR:
                return {
                    ...preState ,
                    loading:false,
                    error:true
                }
        case actionTypes.ADD_TO_CART:
            return {
                ...preState ,
                cart:[...preState.cart,action.payload]
            }
        default:
            return preState
    }
}