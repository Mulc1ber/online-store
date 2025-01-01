import { setCategoriesData } from './set-categories-data';

export const removeCategoryAsync = (requestServer, elementId) => (dispatch) => {
    requestServer('removeCategory', elementId).then((categories) => {
        dispatch(setCategoriesData(categories.res));
    });
};
