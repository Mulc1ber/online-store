import { request } from '../utils/request';
import { addCategory } from './add-category';
import { setErrorMessageCategories } from './set-error-message-categories';
import { setLoaderCategories } from './set-loader-categories';

export const addCategoryAsync = (newCategoryData) => (dispatch) => {
    dispatch(setLoaderCategories());
    request(`/api/categories/`, 'POST', newCategoryData)
        .then((updatedCategory) => {
            dispatch(addCategory(updatedCategory.data));
        })
        .catch((error) => {
            dispatch(setErrorMessageCategories(error));
        });
};
