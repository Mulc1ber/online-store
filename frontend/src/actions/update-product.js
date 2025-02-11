import { ACTION_TYPE } from './action-type';

export const updateProduct = (product) => ({
    type: ACTION_TYPE.UPDATE_PRODUCT,
    payload: product,
});
