import { fransformOrder } from '../bff/transformers';
import { setOrderData } from './set-order-data';

export const saveOrderAsync =
    (requestServer, totalPrice, orderInfo, userLogin, productsInCart) => (dispatch) =>
        requestServer('saveOrder', totalPrice, orderInfo, userLogin, productsInCart).then(
            (orderData) => {
                const sanitizeOrder = fransformOrder(orderData.res);

                dispatch(setOrderData(sanitizeOrder));

                return sanitizeOrder.hash;
            },
        );
