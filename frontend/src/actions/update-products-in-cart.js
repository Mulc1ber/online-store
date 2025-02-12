import { ACTION_TYPE } from './action-type';

export const updateProductsInCart = ({ id, name, price, imageUrl, category, quantity }) => ({
    type: ACTION_TYPE.UPDATE_PRODUCTS_IN_CART,
    payload: { id, name, price, imageUrl, category, quantity },
});
