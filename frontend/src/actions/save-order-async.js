import { request } from '../utils';
import { setOrderData } from './set-order-data';

export const saveOrderAsync = (orderResult) => (dispatch) => {
    return request('/api/orders', 'POST', orderResult).then((orderData) => {
        if (orderData.error) return orderData;

        dispatch(setOrderData(orderData.data));
        return orderData;
    });
};
