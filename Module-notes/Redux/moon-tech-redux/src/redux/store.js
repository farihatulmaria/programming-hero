import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
// import logger from 'redux-logger';
import rootReducer from './reduceres/rootReducer';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));


export default store;