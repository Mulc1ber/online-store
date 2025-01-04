import { ACTION_TYPE } from './action-type';
export const setOrderData = (order) => ({
    type: ACTION_TYPE.SET_ORDER_DATA,
    payload: order,
});
