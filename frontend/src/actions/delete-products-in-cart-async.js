import { deleteProductsInCart } from './delete-products-in-cart';

export const deleteProductsInCartAsync = (productId) => (dispatch, getState) => {
    dispatch(deleteProductsInCart(productId));
    const productsInCart = getState().productsInCart.productsInCart;
    localStorage.setItem('cart', JSON.stringify(productsInCart));
};
