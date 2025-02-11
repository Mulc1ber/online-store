import { request } from '../utils/request';
import { removeCategory } from './remove-category';
import { setErrorMessageCategories } from './set-error-message-categories';
import { setLoaderCategories } from './set-loader-categories';

export const removeCategoryAsync = (id) => (dispatch) => {
    dispatch(setLoaderCategories());
    request(`/api/categories/${id}`, 'DELETE')
        .then(() => {
            dispatch(removeCategory(id));
        })
        .catch((error) => {
            dispatch(setErrorMessageCategories(error));
        });
};
