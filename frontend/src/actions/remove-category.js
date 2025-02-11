import { ACTION_TYPE } from './action-type';

export const removeCategory = (categoryId) => ({
    type: ACTION_TYPE.REMOVE_CATEGORY,
    payload: categoryId,
});
