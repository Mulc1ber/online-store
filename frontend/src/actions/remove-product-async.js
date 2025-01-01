import { setProductsData } from './set-products-data';

export const removeProductAsync = (requestServer, elementId) => (dispatch) => {
    requestServer('removeProduct', elementId).then((products) => {
        dispatch(setProductsData(products.res));
    });
};
