import { ACTION_TYPE } from '../actions';

const initialProductsState = {
    products: [],
};

export const productsReducer = (state = initialProductsState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_PRODUCTS_DATA:
            return {
                ...state,
                products: action.payload,
            };
        // // TODO возможно не пригодится
        // case ACTION_TYPE.ADD_PRODUCT:
        //     return {
        //         ...state,
        //         products: [...state.products, action.payload],
        //     };
        // // TODO возможно не пригодится
        // case ACTION_TYPE.UPDATE_PRODUCT:
        //     return {
        //         ...state,
        //         products: state.products.map((product) =>
        //             product.id === action.payload.id ? { ...product, ...action.payload } : product,
        //         ),
        //     };
        // // TODO возможно не пригодится
        // case ACTION_TYPE.DELETE_PRODUCT:
        //     return {
        //         ...state,
        //         products: state.products.filter((product) => product.id !== action.payload),
        //     };
        // TODO возможно не пригодится
        case ACTION_TYPE.RESET_PRODUCTS_DATA:
            return initialProductsState;
        default:
            return state;
    }
};

// const initialProductsState = {};

// export const productsReducer = (state = initialProductsState, action) => {
//     switch (action.type) {
//         default:
//             return state;
//     }
// };
