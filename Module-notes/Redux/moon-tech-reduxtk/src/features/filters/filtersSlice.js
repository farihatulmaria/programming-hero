import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    brands:[],
    stock: false,
    keyWord:""
}
const filtersSlice = createSlice({
    name:'filters',
    initialState,
    reducers:{
        toogleBrands:(state,action)=>{
            if(!state.brands.includes(action.payload)){
                state.brands.push(action.payload)
            }else{
                state.brands = state.brands.filter(brand=>brand !== action.payload)
            }
        },
        toogleStock:(state,action)=>{
            state.stock = !state.stock;
        }
    }
})
export const {toogleBrands,toogleStock} = filtersSlice.actions
export default filtersSlice.reducer