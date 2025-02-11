import { request } from '../utils/request';
import { removeProduct } from './remove-product';
import { setErrorMessageProducts } from './set-error-message-products';
import { setLoaderProducts } from './set-loader-products';

export const removeProductAsync = (id) => (dispatch) => {
    dispatch(setLoaderProducts());
    request(`/api/products/${id}`, 'DELETE')
        .then(() => {
            dispatch(removeProduct(id));
        })
        .catch((error) => {
            dispatch(setErrorMessageProducts(error));
        });
};
