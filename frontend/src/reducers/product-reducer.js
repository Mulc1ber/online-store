import { ACTION_TYPE } from '../actions';

const initialProductState = {
    product: {
        id: null,
        name: null,
        price: null,
        category: null,
        imageUrl: null,
        description: null,
        specifications: null,
        shipping: null,
        stock: null,
    },
    isLoading: false,
    errorMessage: null,
};

export const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_PRODUCT:
            return {
                ...state,
                product: { ...state.product, ...action.payload },
                isLoading: false,
                errorMessage: null,
            };

        case ACTION_TYPE.SET_LOADER_PRODUCT:
            return {
                ...state,
                isLoading: true,
                errorMessage: null,
            };

        case ACTION_TYPE.SET_ERROR_MESSAGE_PRODUCT:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload,
            };

        default:
            return state;
    }
};
