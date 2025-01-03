import { ACTION_TYPE } from '../actions';

const initialProductState = {
    id: '',
    name: '',
    price: '',
    category: '',
    imageUrl: '',
    description: '',
    specifications: '',
    shipping: '',
    stock: '',
};

export const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case ACTION_TYPE.RESET_PRODUCT_DATA:
            return initialProductState;
        default:
            return state;
    }
};
