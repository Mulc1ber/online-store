module.exports = function (order) {
    return {
        id: order.id,
        createdAt: order.createdAt,
        status: order.status,
        totalPrice: order.totalPrice,
        userInfo: {
            shipping: order.userInfo.shipping,
            payment: order.userInfo.payment,
            username: order.userInfo.username,
            email: order.userInfo.email,
        },
        user: {
            id: order.user.id,
            login: order.user.login,
            roleId: order.user.role,
        },
        products: order.products.map((product) => ({
            id: product.id,
            name: product.name,
            price: product.price,
            imageUrl: product.image,
            category: {
                label: product.category.label,
                name: product.category.name,
            },
            quantity: product.quantity,
        })),
    };
};
