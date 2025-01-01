import { ACTION_TYPE } from './action-type';

export const setCategoriesData = (categories) => ({
    type: ACTION_TYPE.SET_CATEGORIES_DATA,
    payload: categories,
});
