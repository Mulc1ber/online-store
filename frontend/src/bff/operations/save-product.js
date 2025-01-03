import { addProduct, updateProduct } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const saveProduct = async (hash, newProductData) => {
    const accessRoles = [ROLE.ADMIN];

    const access = await sessions.access(hash, accessRoles);

    if (!access) {
        return {
            error: 'Доступ запрещен',
            res: null,
        };
    }

    newProductData.id ? await updateProduct(newProductData) : await addProduct(newProductData);

    return {
        error: null,
        res: true,
    };
};
