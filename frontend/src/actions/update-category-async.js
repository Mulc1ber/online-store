import { request } from '../utils/request';
import { setErrorMessageCategories } from './set-error-message-categories';
import { setLoaderCategories } from './set-loader-categories';
import { updateCategory } from './update-category';

export const updateCategoryAsync = (id, newCategoryData) => (dispatch) => {
    dispatch(setLoaderCategories());
    request(`/api/categories/${id}`, 'PATCH', newCategoryData)
        .then((updatedCategory) => {
            dispatch(updateCategory(updatedCategory.data));
        })
        .catch((error) => {
            dispatch(setErrorMessageCategories(error));
        });
};
