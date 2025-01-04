import { setOrderData } from './set-order-data';

export const saveOrderAsync =
    (requestServer, totalPrice, orderInfo, userLogin, productsInCart) => (dispatch) =>
        requestServer('saveOrder', totalPrice, orderInfo, userLogin, productsInCart).then(
            ({ error, res }) => {
                if (error) return { error };

                dispatch(setOrderData(res));
                return { res };
            },
        );
