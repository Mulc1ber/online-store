const Product = require('../models/Product');

// add
function addProduct(product) {
    return Product.create(product);
}

// edit
async function editProduct(id, product) {
    const newProduct = await Product.findByIdAndUpdate(id, product, {
        returnDocument: 'after',
    });

    return newProduct;
}

// delete
function deleteProduct(id) {
    return Product.deleteOne({ _id: id });
}

// get list with search and sort
async function getProducts(search = '', sort = '', order = '') {
    let query = { name: { $regex: search, $options: 'i' } };
    let sortQuery = {};
    let sortOrder = 1;

    if (order) {
        sortOrder = order === 'asc' ? 1 : -1;
    }

    if (sort) {
        sortQuery[sort] = sortOrder;
    }

    const products = await Product.find(query).sort(sortQuery);

    return products;
}

// get item
function getProduct(id) {
    return Product.findById(id);
}

module.exports = {
    addProduct,
    editProduct,
    deleteProduct,
    getProducts,
    getProduct,
};
