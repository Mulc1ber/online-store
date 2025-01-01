import { ACTION_TYPE } from './action-type';

export const setProductsData = (products) => ({
    type: ACTION_TYPE.SET_PRODUCTS_DATA,
    payload: products,
});
