import { getProducts } from '../api';

export const fetchProducts = async (searchPhrase, sort, order) => {
    const products = await getProducts(searchPhrase, sort, order);

    return {
        error: null,
        res: products,
    };
};
