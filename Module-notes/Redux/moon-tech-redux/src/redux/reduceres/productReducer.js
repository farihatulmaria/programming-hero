import { ADD_PRODUCT, ADD_TO_CART, DELETE_PRODUCT, LOAD_PRODUCT, REMOVE_FROM_CART } from "../actionTypes";

const initalState = { 
    cart:[],
    allProducts:[]
};

const productReducer =( state = initalState ,action) => {
    const selectedProduct = state.cart.find(product=> product._id === action.payload._id);
    switch(action.type){
        case LOAD_PRODUCT:
            return{
                ...state,
                allProducts:action.payload
            }
        case ADD_PRODUCT:
            return{
                ...state,
                allProducts:[...state.allProducts, action.payload]
            }
        case DELETE_PRODUCT:
            return{
                ...state,
                allProducts: state.allProducts.filter(product=> product._id !== action.payload)
            }
        case ADD_TO_CART:
            if(selectedProduct){
                const newCart = state.cart.filter(product=>product._id !== selectedProduct._id)
                selectedProduct.quantity = selectedProduct.quantity + 1
                return {
                    ...state,
                    cart:[...newCart,selectedProduct]
                };
            }
            return {
                ...state,
                cart:[...state.cart,{...action.payload,quantity:1}]
            } ;
        case REMOVE_FROM_CART:
            if(selectedProduct.quantity > 1){
                const newCart = state.cart.filter(product=>product._id !== selectedProduct._id)
                selectedProduct.quantity = selectedProduct.quantity - 1
                return {
                    ...state,
                    cart:[...newCart,selectedProduct]
                };
            }
            return {
                ...state,
                cart: state?.cart?.filter(product=> product._id !== action.payload._id)
            };
        default :return state
    }
}

export default productReducer;