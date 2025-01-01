import { addCategory, getCategories, updateCategory } from '../api';
// import { sessions } from '../sessions';
// import { ROLE } from '../constants';

export const saveCategory = async (newCategorytData) => {
    // export const saveCategory = async (hash, newCategorytData) => {
    // const accessRoles = [ROLE.ADMIN];

    // const access = await sessions.access(hash, accessRoles);

    // if (!access) {
    //     return {
    //         error: 'Доступ запрещен',
    //         res: null,
    //     };
    // }

    newCategorytData.id
        ? await updateCategory(newCategorytData)
        : await addCategory(newCategorytData);

    const categories = await getCategories('');

    return {
        error: null,
        res: categories,
    };
};
