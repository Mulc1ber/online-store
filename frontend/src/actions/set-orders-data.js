import { ACTION_TYPE } from './action-type';
export const setOrdersData = (orders) => ({
    type: ACTION_TYPE.SET_ORDERS_DATA,
    payload: orders,
});
