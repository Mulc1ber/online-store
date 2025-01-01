import { ACTION_TYPE } from '../actions';

const initialCategoriesState = {
    categories: [],
};

export const categoriesReducer = (state = initialCategoriesState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_CATEGORIES_DATA:
            return {
                ...state,
                categories: action.payload,
            };
        // // TODO возможно не пригодится
        // case ACTION_TYPE.ADD_CATEGORY:
        //     return {
        //         ...state,
        //         categories: [...state.categories, action.payload],
        //     };
        // // TODO возможно не пригодится
        // case ACTION_TYPE.UPDATE_CATEGORY:
        //     return {
        //         ...state,
        //         categories: state.categories.map((category) =>
        //             category.id === action.payload.id
        //                 ? { ...category, ...action.payload }
        //                 : category,
        //         ),
        //     };
        // // TODO возможно не пригодится
        // case ACTION_TYPE.DELETE_CATEGORY:
        //     return {
        //         ...state,
        //         categories: state.categories.filter((category) => category.id !== action.payload),
        //     };
        // TODO возможно не пригодится
        case ACTION_TYPE.RESET_CATEGORIES_DATA:
            return initialCategoriesState;
        default:
            return state;
    }
};
