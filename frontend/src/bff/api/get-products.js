import { fransformProduct } from '../transformers';

export const getProducts = async (searchPhrase) =>
    fetch(`http://localhost:3005/products?name_like=${searchPhrase}`)
        // fetch(`http://localhost:3005/products?name_like=`)
        .then((loadedProducts) => loadedProducts.json())
        .then((loadedProducts) => loadedProducts && loadedProducts.map(fransformProduct));
