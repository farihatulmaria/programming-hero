import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from 'redux';
import cartCounter from './middleware/cartCounter';
// import logger from 'redux-logger';
import rootReducer from './reduceres/rootReducer';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(cartCounter)));


export default store;