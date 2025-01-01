import { ACTION_TYPE } from './action-type';

export const updateQuantityProduct = ({ productId, quantity }) => ({
    type: ACTION_TYPE.UPDATE_QUANTITY_PRODUCT,
    payload: { productId, quantity },
});
