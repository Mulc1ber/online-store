import { ACTION_TYPE } from './action-type';
export const setProductsInCart = (products) => ({
    type: ACTION_TYPE.SET_PRODUCTS_IN_CART,
    payload: products,
});
