// import { deleteComment, deleteCategory, getComments } from '../api';
// import { sessions } from '../sessions';
// import { ROLE } from '../constants';

import { deleteCategory, getCategories } from '../api';

export const removeCategory = async (categoryId) => {
    // export const removeCategory = async (hash, id) => {
    // const accessRoles = [ROLE.ADMIN];

    // const access = await sessions.access(hash, accessRoles);

    // if (!access) {
    //     return {
    //         error: 'Доступ запрещен',
    //         res: null,
    //     };
    // }

    await deleteCategory(categoryId);

    const categories = await getCategories();

    return {
        error: null,
        res: categories,
    };
};
