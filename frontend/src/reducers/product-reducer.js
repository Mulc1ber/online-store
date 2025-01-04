import { ACTION_TYPE } from '../actions';

const initialProductState = {
    id: null,
    name: null,
    price: null,
    category: null,
    imageUrl: null,
    description: null,
    specifications: null,
    shipping: null,
    stock: null,
};

export const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case ACTION_TYPE.RESET_PRODUCT_DATA:
            return initialProductState;
        default:
            return state;
    }
};
