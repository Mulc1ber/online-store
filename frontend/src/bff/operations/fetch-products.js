import { getProducts } from '../api';

export const fetchProducts = async (searchPhrase) => {
    const products = await getProducts(searchPhrase);

    return {
        error: null,
        res: products,
    };
};
