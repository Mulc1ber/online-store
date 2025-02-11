import { ACTION_TYPE } from './action-type';

export const setErrorMessageProducts = (error) => ({
    type: ACTION_TYPE.SET_ERROR_MESSAGE_PRODUCTS,
    payload: error,
});
