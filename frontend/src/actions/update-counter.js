import { ACTION_TYPE } from './action-type';

export const updateCounter = (quantity) => ({
    type: ACTION_TYPE.UPDATE_COUNTER,
    payload: quantity,
});
