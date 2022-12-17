import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes"

export const toogleBrands = (brand)=>{
    return {
        type:TOGGLE_BRAND,
        payload:brand
    }
}
export const toogleStock = ()=>{
    return {
        type:TOGGLE_STOCK
    }
}