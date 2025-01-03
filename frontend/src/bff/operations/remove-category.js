import { deleteCategory } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const removeCategory = async (hash, categoryId) => {
    const accessRoles = [ROLE.ADMIN];

    const access = await sessions.access(hash, accessRoles);

    if (!access) {
        return {
            error: 'Доступ запрещен',
            res: null,
        };
    }

    await deleteCategory(categoryId);

    return {
        error: null,
        res: true,
    };
};
