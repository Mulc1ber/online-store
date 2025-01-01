import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import {
    appReducer,
    counterReducer,
    userReducer,
    usersReducer,
    productReducer,
    productsReducer,
    categoriesReducer,
    productsInCartReducer,
} from './reducers';

const reducer = combineReducers({
    app: appReducer,
    counter: counterReducer,
    user: userReducer,
    users: usersReducer,
    product: productReducer,
    products: productsReducer,
    categories: categoriesReducer,
    productsInCart: productsInCartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
