import { ACTION_TYPE } from './action-type';

export const updateProductsInCart = ({ product, quantity }) => ({
    type: ACTION_TYPE.UPDATE_PRODUCTS_IN_CART,
    payload: { product, quantity },
});
