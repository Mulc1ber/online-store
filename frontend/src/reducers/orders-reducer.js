import { ACTION_TYPE } from '../actions';

const initialOrdersState = {
    orders: [],
    isLoading: false,
    errorMessage: null,
};

export const ordersReducer = (state = initialOrdersState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_ORDERS_DATA:
            return {
                ...state,
                orders: action.payload,
                isLoading: false,
                errorMessage: null,
            };

        case ACTION_TYPE.SET_LOADER_OREDRS:
            return {
                ...state,
                isLoading: true,
                errorMessage: null,
            };

        case ACTION_TYPE.SET_ERROR_MESSAGE_OREDRS:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload,
            };

        default:
            return state;
    }
};
