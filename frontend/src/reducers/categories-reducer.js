import { ACTION_TYPE } from '../actions';

const initialCategoriesState = {
    categories: [],
    isLoading: false,
    errorMessage: null,
};

export const categoriesReducer = (state = initialCategoriesState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
                isLoading: false,
                errorMessage: null,
            };

        case ACTION_TYPE.UPDATE_CATEGORY:
            return {
                ...state,
                categories: state.categories.map((category) =>
                    category.id === action.payload.id ? action.payload : category,
                ),
                isLoading: false,
                errorMessage: null,
            };

        case ACTION_TYPE.ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload],
                isLoading: false,
                errorMessage: null,
            };

        case ACTION_TYPE.REMOVE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter((category) => category.id !== action.payload),
                isLoading: false,
                errorMessage: null,
            };

        case ACTION_TYPE.SET_LOADER_CATEGORIES:
            return {
                ...state,
                isLoading: true,
                errorMessage: null,
            };

        case ACTION_TYPE.SET_ERROR_MESSAGE_CATEGORIES:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload,
            };

        default:
            return state;
    }
};
