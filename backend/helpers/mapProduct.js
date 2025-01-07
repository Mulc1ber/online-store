module.exports = function (product) {
    return {
        id: product.id,
        name: product.name,
        price: product.price,
        category: {
            label: product.category.label,
            name: product.category.name,
        },
        imageUrl: product.image,
        description: product.description,
        specifications: product.specifications,
        shipping: product.shipping,
        stock: product.stock,
    };
};
