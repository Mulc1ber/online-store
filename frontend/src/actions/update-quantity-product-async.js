import { updateQuantityProduct } from './update-quantity-product';

export const updateQuantityProductAsync =
    ({ productId, quantity }) =>
    (dispatch, getState) => {
        dispatch(updateQuantityProduct({ productId, quantity }));
        const productsInCart = getState().productsInCart.productsInCart;
        localStorage.setItem('cart', JSON.stringify(productsInCart));
    };
