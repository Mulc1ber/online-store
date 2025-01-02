import { fransformProduct } from '../transformers';

export const getProducts = async (searchPhrase = null, sort = null, order = null) => {
    let url = 'http://localhost:3005/products?';

    if (searchPhrase) {
        url += `name_like=${searchPhrase}&`;
    }

    if (sort) {
        url += `_sort=${sort}&`;
    }

    if (order) {
        url += `_order=${order}`;
    }

    return fetch(url)
        .then((loadedProducts) => loadedProducts.json())
        .then((loadedProducts) => loadedProducts && loadedProducts.map(fransformProduct));
};
