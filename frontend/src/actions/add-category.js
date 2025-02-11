import { ACTION_TYPE } from './action-type';

export const addCategory = (category) => ({
    type: ACTION_TYPE.ADD_CATEGORY,
    payload: category,
});
