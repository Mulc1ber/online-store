import { ACTION_TYPE } from './action-type';

export const setErrorMessageProduct = (error) => ({
    type: ACTION_TYPE.SET_ERROR_MESSAGE_PRODUCT,
    payload: error,
});
