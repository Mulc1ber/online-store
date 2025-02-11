import { ACTION_TYPE } from './action-type';

export const setErrorMessageOrders = (error) => ({
    type: ACTION_TYPE.SET_ERROR_MESSAGE_OREDRS,
    payload: error,
});
