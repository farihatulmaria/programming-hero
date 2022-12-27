import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/cart/cartSlice';
import filtersSlice from '../features/filters/filtersSlice';
import productSlice from '../features/products/productSlice';

export const store = configureStore({
  devTools:true,
  reducer: {
    product:productSlice,
    cart:cartSlice,
    filter:filtersSlice
  },
});
