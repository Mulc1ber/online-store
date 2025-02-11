import { request } from '../utils';
import { setErrorMessageOrders } from './set-error-message-orders';
import { setLoaderOrders } from './set-loader-orders';
import { setOrdersData } from './set-orders-data';

export const loadOrdersAsync = () => (dispatch) => {
    dispatch(setLoaderOrders());
    request(`/api/orders/user`)
        .then((orders) => {
            if (orders.error) {
                throw new Error(orders.error);
            }

            dispatch(setOrdersData(orders.data));
        })
        .catch((error) => {
            dispatch(setErrorMessageOrders(error.message));
        });
};
