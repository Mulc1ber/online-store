import { ACTION_TYPE } from '../actions';

const initialProductsState = {
    products: [],
    isLoading: false,
    isSortingOrFiltering: false,
    errorMessage: null,
};

export const productsReducer = (state = initialProductsState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                isLoading: false,
                isSortingOrFiltering: false,
                errorMessage: null,
            };

        case ACTION_TYPE.UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload.id ? action.payload : product,
                ),
                isLoading: false,
                errorMessage: null,
            };

        case ACTION_TYPE.ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
                isLoading: false,
                errorMessage: null,
            };

        case ACTION_TYPE.REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter((product) => product.id !== action.payload),
                isLoading: false,
                errorMessage: null,
            };

        case ACTION_TYPE.SET_LOADER_PRODUCTS:
            return {
                ...state,
                isLoading: true,
                errorMessage: null,
            };

        case ACTION_TYPE.SET_ERROR_MESSAGE_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                isSortingOrFiltering: false,
                errorMessage: action.payload,
            };

        case ACTION_TYPE.SORT_OR_FILTER_PRODUCTS:
            return {
                ...state,
                isSortingOrFiltering: true,
            };

        default:
            return state;
    }
};
