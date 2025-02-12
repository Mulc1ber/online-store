import { ACTION_TYPE } from '../actions';

const initialProductsInCartState = {
    productsInCart: [],
};

export const productsInCartReducer = (state = initialProductsInCartState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_PRODUCTS_IN_CART:
            return {
                ...state,
                productsInCart: action.payload,
            };
        case ACTION_TYPE.UPDATE_PRODUCTS_IN_CART:
            const updatedProducts = state.productsInCart.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity + action.payload.quantity };
                }
                return item;
            });

            if (!updatedProducts.some((item) => item.id === action.payload.id)) {
                updatedProducts.push({
                    ...action.payload,
                    quantity: action.payload.quantity,
                });
            }

            return {
                ...state,
                productsInCart: updatedProducts,
            };

        case ACTION_TYPE.UPDATE_QUANTITY_PRODUCT:
            const updatedQuantityProduct = state.productsInCart.map((product) =>
                product.id === action.payload.productId
                    ? { ...product, quantity: action.payload.quantity }
                    : product,
            );

            return {
                ...state,
                productsInCart: updatedQuantityProduct,
            };

        case ACTION_TYPE.DELETE_PRODUCTS_IN_CART:
            return {
                ...state,
                productsInCart: state.productsInCart.filter(
                    (product) => product.id !== action.payload,
                ),
            };

        case ACTION_TYPE.RESET_PRODUCTS_IN_CART:
            return initialProductsInCartState;
        default:
            return state;
    }
};
