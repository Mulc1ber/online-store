import { setCategoriesData } from './set-categories-data';

export const saveCategoryAsync = (requestServer, newCategoryData) => (dispatch) =>
    requestServer('saveCategory', newCategoryData).then((updatedCategories) => {
        console.log('updatedCategories', updatedCategories);

        dispatch(setCategoriesData(updatedCategories.res));
    });
