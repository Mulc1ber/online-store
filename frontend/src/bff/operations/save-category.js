import { addCategory, updateCategory } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const saveCategory = async (hash, newCategorytData) => {
    const accessRoles = [ROLE.ADMIN];

    const access = await sessions.access(hash, accessRoles);

    if (!access) {
        return {
            error: 'Доступ запрещен',
            res: null,
        };
    }

    newCategorytData.id
        ? await updateCategory(newCategorytData)
        : await addCategory(newCategorytData);

    return {
        error: null,
        res: true,
    };
};
