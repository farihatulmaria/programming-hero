import { createStore } from 'redux';
import productReducer from './reduceres/ProductReducer';

const store = createStore(productReducer);

export default store;