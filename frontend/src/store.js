import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import {
    appReducer,
    userReducer,
    orderReducer,
    counterReducer,
    productReducer,
    productsInCartReducer,
} from './reducers';

const reducer = combineReducers({
    app: appReducer,
    user: userReducer,
    order: orderReducer,
    counter: counterReducer,
    product: productReducer,
    productsInCart: productsInCartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
