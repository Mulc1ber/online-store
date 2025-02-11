import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import {
    appReducer,
    userReducer,
    orderReducer,
    ordersReducer,
    counterReducer,
    productReducer,
    productsReducer,
    productsInCartReducer,
    categoriesReducer,
} from './reducers';

const reducer = combineReducers({
    app: appReducer,
    user: userReducer,
    order: orderReducer,
    orders: ordersReducer,
    counter: counterReducer,
    product: productReducer,
    products: productsReducer,
    productsInCart: productsInCartReducer,
    categories: categoriesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
