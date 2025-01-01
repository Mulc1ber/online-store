import { ACTION_TYPE } from './action-type';

export const setCounter = (counter) => ({
    type: ACTION_TYPE.SET_COUNTER,
    payload: counter,
});
