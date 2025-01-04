import { addOrder, getUser } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';
import { fransformOrder } from '../transformers';
import { generateDate } from '../utils';

export const saveOrder = async (hash, totalPrice, orderInfo, userLogin, products) => {
    const accessRoles = [ROLE.ADMIN, ROLE.BUYER];

    const access = await sessions.access(hash, accessRoles);

    if (!access) {
        return {
            error: 'Доступ запрещен',
            res: null,
        };
    }

    const orderHash = Math.random().toFixed(10).slice(2);

    const user = await getUser(userLogin);

    const sanitizeProductsForOrder = products.map((product) => {
        const { id, imageUrl, name, category, price, quantity } = product;
        return {
            id,
            imageUrl,
            name,
            category,
            price,
            quantity,
        };
    });

    const orderResult = {
        hash: orderHash,
        created_at: generateDate(),
        status: 'processing',
        total_price: totalPrice,
        user_info: orderInfo,
        user,
        products: sanitizeProductsForOrder,
    };

    await addOrder(orderResult);

    const sanitizeOrder = fransformOrder(orderResult);

    return {
        error: null,
        res: sanitizeOrder,
    };
};
