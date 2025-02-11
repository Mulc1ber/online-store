import { updateProductsInCart } from './update-products-in-cart';

export const updateProductsInCartAsync =
    ({ product, quantity }) =>
    (dispatch, getState) => {
        dispatch(updateProductsInCart({ product, quantity }));
        const productsInCart = getState().productsInCart.productsInCart;
        localStorage.setItem('cart', JSON.stringify(productsInCart));
    };
