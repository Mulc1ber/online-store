import { ACTION_TYPE } from './action-type';

export const deleteProductsInCart = (productId) => ({
    type: ACTION_TYPE.DELETE_PRODUCTS_IN_CART,
    payload: productId,
});
