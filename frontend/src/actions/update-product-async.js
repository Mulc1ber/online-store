import { request } from '../utils/request';
import { setErrorMessageProducts } from './set-error-message-products';

import { setLoaderProducts } from './set-loader-products';
import { updateProduct } from './update-product';

export const updateProductAsync = (id, newProductData) => (dispatch) => {
    dispatch(setLoaderProducts());
    request(`/api/products/${id}`, 'PATCH', newProductData)
        .then((updatedProduct) => {
            dispatch(updateProduct(updatedProduct.data));
        })
        .catch((error) => {
            dispatch(setErrorMessageProducts(error));
        });
};
