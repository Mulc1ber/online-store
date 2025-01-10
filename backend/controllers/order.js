const Order = require('../models/Order');

// add
async function addOrder(order) {
    const newOrder = await Order.create(order);

    await newOrder.populate('user');

    return newOrder;
}

// get
function getOrders() {
    return Order.find().populate('user');
}

module.exports = {
    addOrder,
    getOrders,
};
