import { ACTION_TYPE } from '../actions';
import { ROLE } from '../constants';

const initialOrderState = {
    id: null,
    createdAt: null,
    status: null,
    totalPrice: 0,
    userInfo: {
        shipping: null,
        payment: null,
        username: null,
        email: null,
    },
    user: {
        id: null,
        login: null,
        password: null,
        registeredAt: null,
        roleId: ROLE.GUEST,
    },
    products: [],
};

export const orderReducer = (state = initialOrderState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_ORDER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
