import { request } from '../utils';
import { setErrorMessageCategories } from './set-error-message-categories';
import { setLoaderCategories } from './set-loader-categories';
import { setCategories } from './set-categories';

export const loadCategoriesAsync = () => (dispatch) => {
    dispatch(setLoaderCategories());
    request('/api/categories')
        .then((categories) => {
            if (categories.error) {
                dispatch(setErrorMessageCategories(categories.error));
                return;
            }
            dispatch(setCategories(categories.data));
        })
        .catch((error) => {
            dispatch(setErrorMessageCategories(error));
        });
};
