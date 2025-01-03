import { ACTION_TYPE } from '../actions';

const initialCounterState = {
    count: 0,
};

export const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case ACTION_TYPE.UPDATE_COUNTER:
            return {
                ...state,
                count: action.payload,
            };
        default:
            return state;
    }
};
