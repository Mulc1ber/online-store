import { ACTION_TYPE } from '../actions';

const initialCounterState = {
    count: 0,
};

export const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        // TODO возможно не пригодится
        case ACTION_TYPE.SET_COUNTER:
            return {
                ...state,
                count: action.payload,
            };
        case ACTION_TYPE.UPDATE_COUNTER:
            return {
                ...state,
                count: action.payload,
            };
        // TODO возможно не пригодится
        case ACTION_TYPE.RESET_COUNTER:
            return initialCounterState;
        default:
            return state;
    }
};
