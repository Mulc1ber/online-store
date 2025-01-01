// import { deleteComment, deleteProduct, getComments } from '../api';
// import { sessions } from '../sessions';
// import { ROLE } from '../constants';

import { deleteProduct, getProducts } from '../api';

export const removeProduct = async (productId) => {
    // export const removeProduct = async (hash, id) => {
    // const accessRoles = [ROLE.ADMIN];

    // const access = await sessions.access(hash, accessRoles);

    // if (!access) {
    //     return {
    //         error: 'Доступ запрещен',
    //         res: null,
    //     };
    // }

    await deleteProduct(productId);

    const products = await getProducts('');

    return {
        error: null,
        res: products,
    };
};
