import { configureStore } from '@reduxjs/toolkit';
import { productApi } from '../features/api/apiSlice';
import cartSlice from '../features/cart/cartSlice';
import filtersSlice from '../features/filters/filtersSlice';

export const store = configureStore({
  devTools:true,
  reducer: {
    cart:cartSlice,
    filter:filtersSlice,
    [productApi.reducerPath]:productApi.reducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(productApi.middleware)
});
