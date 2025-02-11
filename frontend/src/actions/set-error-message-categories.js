import { ACTION_TYPE } from './action-type';

export const setErrorMessageCategories = (error) => ({
    type: ACTION_TYPE.SET_ERROR_MESSAGE_CATEGORIES,
    payload: error,
});
