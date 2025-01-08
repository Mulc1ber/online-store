const express = require('express');
const {
    addProduct,
    editProduct,
    deleteProduct,
    getProducts,
    getProduct,
} = require('../controllers/product');
const mapProduct = require('../helpers/mapProduct');
const authenticated = require('../middlewares/authenticated');
const hasRole = require('../middlewares/hasRole');
const ROLES = require('../constants/roles');

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
    const products = await getProducts(req.query.search, req.query.sort, req.query.order);

    res.send({ data: products.map(mapProduct) });
});

router.get('/:id', async (req, res) => {
    const product = await getProduct(req.params.id);

    res.send({ data: mapProduct(product) });
});

// authenticated

router.post('/', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
    const product = await addProduct({
        name: req.body.name,
        price: req.body.price,
        category: {
            label: req.body.category.label,
            name: req.body.category.name,
        },
        // category: req.body.category,
        image: req.body.imageUrl,
        description: req.body.description,
        specifications: req.body.specifications,
        shipping: req.body.shipping,
        stock: req.body.stock,
    });

    res.send({ data: mapProduct(product) });
});

router.patch('/:id', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
    console.log(req.body);

    const updateProduct = await editProduct(req.params.id, {
        name: req.body.name,
        price: req.body.price,
        category: {
            label: req.body.category?.label,
            name: req.body.category?.name,
        },
        image: req.body.imageUrl,
        description: req.body.description,
        specifications: req.body.specifications,
        shipping: req.body.shipping,
        stock: req.body.stock,
    });

    res.send({ data: mapProduct(updateProduct) });
});

router.delete('/:id', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
    await deleteProduct(req.params.id);

    res.send({ error: null });
});

module.exports = router;
