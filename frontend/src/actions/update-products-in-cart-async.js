import { updateProductsInCart } from './update-products-in-cart';

export const updateProductsInCartAsync =
    ({ id, name, price, imageUrl, category, quantity }) =>
    (dispatch, getState) => {
        dispatch(updateProductsInCart({ id, name, price, imageUrl, category, quantity }));
        const productsInCart = getState().productsInCart.productsInCart;
        localStorage.setItem('cart', JSON.stringify(productsInCart));
    };
