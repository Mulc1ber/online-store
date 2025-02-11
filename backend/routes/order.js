const express = require('express');
const { addOrder, getOrders, getOrdersForUser } = require('../controllers/order');
const mapOrder = require('../helpers/mapOrder');
const authenticated = require('../middlewares/authenticated');
const hasRole = require('../middlewares/hasRole');
const ROLES = require('../constants/roles');

const router = express.Router({ mergeParams: true });

// authenticated

router.get('/', authenticated, hasRole([ROLES.ADMIN, ROLES.USER]), async (req, res) => {
    const orders = await getOrders();

    res.send({ data: orders.map(mapOrder) });
});

router.get('/user', authenticated, hasRole([ROLES.ADMIN, ROLES.USER]), async (req, res) => {
    try {
        const userId = req.user.id;
        if (!userId) {
            return res.send({ error: 'Пользователь не найден' });
        }

        const orders = await getOrdersForUser(userId);

        res.send({ data: orders.map(mapOrder) });
    } catch (error) {
        res.send({ error: 'Список заказов пуст' || 'Unknown error' });
    }
});

router.post('/', authenticated, hasRole([ROLES.ADMIN, ROLES.USER]), async (req, res) => {
    try {
        const order = await addOrder({
            status: req.body.status,
            totalPrice: req.body.totalPrice,
            userInfo: {
                shipping: req.body.userInfo.shipping,
                payment: req.body.userInfo.payment,
                username: req.body.userInfo.username,
                email: req.body.userInfo.email,
            },
            user: req.user.id,
            products: req.body?.products?.map((product) => ({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.imageUrl,
                category: {
                    label: product.category.label,
                    name: product.category.name,
                },
                quantity: product.quantity,
            })),
        });

        res.send({ data: mapOrder(order) });
    } catch (error) {
        res.send({
            error:
                `Что-то пошло не так. Попробуйте еще раз позднее. ${error.message}` ||
                'Unknown error',
        });
    }
});

module.exports = router;
