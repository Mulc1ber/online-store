import { deleteProduct } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const removeProduct = async (hash, productId) => {
    const accessRoles = [ROLE.ADMIN];

    const access = await sessions.access(hash, accessRoles);

    if (!access) {
        return {
            error: 'Доступ запрещен',
            res: null,
        };
    }

    await deleteProduct(productId);

    return {
        error: null,
        res: true,
    };
};
