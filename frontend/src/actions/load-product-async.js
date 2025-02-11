import { request } from '../utils';
import { setErrorMessageProduct } from './set-error-message-product';
import { setLoaderProduct } from './set-loader-product';
import { setProduct } from './set-product';

export const loadProductAsync = (id) => (dispatch) => {
    dispatch(setLoaderProduct());
    request(`/api/products/${id}`)
        .then((products) => {
            if (products.error) {
                dispatch(setErrorMessageProduct(products.error));
                return;
            }
            dispatch(setProduct(products.data));
        })
        .catch((error) => {
            dispatch(setErrorMessageProduct(error));
        });
};
