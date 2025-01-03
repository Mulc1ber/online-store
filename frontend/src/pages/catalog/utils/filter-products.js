export const filteredProducts = (params, products) => {
    return params.name === undefined || params.name === 'all'
        ? products
        : products.filter((product) => product.category?.label === params.name);
};
