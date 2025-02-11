import { request } from '../utils/request';
import { addProduct } from './add-product';
import { setErrorMessageProducts } from './set-error-message-products';
import { setLoaderProducts } from './set-loader-products';

export const addProductAsync = (newProductData) => (dispatch) => {
    dispatch(setLoaderProducts());
    request(`/api/products/`, 'POST', newProductData)
        .then((updatedProduct) => {
            dispatch(addProduct(updatedProduct.data));
        })
        .catch((error) => {
            dispatch(setErrorMessageProducts(error));
        });
};
