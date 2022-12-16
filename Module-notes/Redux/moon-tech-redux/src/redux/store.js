import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore } from 'redux';
import productReducer from './reduceres/ProductReducer';

const store = createStore(productReducer,composeWithDevTools());

export default store;