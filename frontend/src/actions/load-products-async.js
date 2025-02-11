import { request } from '../utils';
import { setErrorMessageProducts } from './set-error-message-products';
import { setLoaderProducts } from './set-loader-products';
import { setProducts } from './set-products';

export const loadProductsAsync =
    (searchPhrase = '', sort = '', order = '') =>
    (dispatch) => {
        dispatch(setLoaderProducts());

        const url =
            !searchPhrase && !sort && !order
                ? `/api/products`
                : `/api/products?search=${searchPhrase}&sort=${sort}&order=${order}`;

        request(url)
            .then((products) => {
                if (products.error) {
                    dispatch(setErrorMessageProducts(products.error));
                    return;
                }
                dispatch(setProducts(products.data));
            })
            .catch((error) => {
                dispatch(setErrorMessageProducts(error));
            });
    };
