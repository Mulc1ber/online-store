import { addProduct, updateProduct } from '../api';
// import { sessions } from '../sessions';
// import { ROLE } from '../constants';

export const saveProduct = async (newProductData) => {
    // export const saveProduct = async (hash, newProductData) => {
    // const accessRoles = [ROLE.ADMIN];

    // const access = await sessions.access(hash, accessRoles);

    // if (!access) {
    //     return {
    //         error: 'Доступ запрещен',
    //         res: null,
    //     };
    // }

    newProductData.id ? await updateProduct(newProductData) : await addProduct(newProductData);

    // const products = await getProducts('');

    return {
        error: null,
        res: true,
        // res: products,
    };
};
