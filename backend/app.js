const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const chalk = require('chalk');
const { register, login, getUsers, getRoles } = require('./controllers/user');
const {
    addProduct,
    editProduct,
    deleteProduct,
    getProducts,
    getProduct,
} = require('./controllers/product');
const {
    addCategory,
    editCategory,
    deleteCategory,
    getCategories,
} = require('./controllers/category');
const mapUser = require('./helpers/mapUser');
const authenticated = require('./middlewares/authenticated');
const hasRole = require('./middlewares/hasRole');
const ROLES = require('./constants/roles');
const mapProduct = require('./helpers/mapProduct');
const mapCategory = require('./helpers/mapCategory');

const port = 3001;
const app = express();

app.use(cookieParser());
app.use(express.json());

app.post('/register', async (req, res) => {
    try {
        const { user, token } = await register(req.body.login, req.body.password);

        res.cookie('token', token, { httpOnly: true }).send({ error: null, user: mapUser(user) });
    } catch (error) {
        res.send({ error: error.message || 'Unknown error' });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { user, token } = await login(req.body.login, req.body.password);

        res.cookie('token', token, { httpOnly: true }).send({
            error: null,
            user: mapUser(user),
        });
    } catch (error) {
        res.send({ error: error.message || 'Unknown error' });
    }
});

app.post('/logout', (req, res) => {
    res.cookie('token', '', { httpOnly: true }).send({});
});

// Product
app.get('/products', async (req, res) => {
    const products = await getProducts(req.query.search, req.query.sort, req.query.order);

    res.send({ data: products.map(mapProduct) });
});
// Product
app.get('/products/:id', async (req, res) => {
    const product = await getProduct(req.params.id);

    res.send({ data: mapProduct(product) });
});

// Category
app.get('/categories', async (req, res) => {
    const categories = await getCategories();

    res.send({ data: categories.map(mapCategory) });
});

app.use(authenticated);

// Category
app.post('/categories', hasRole([ROLES.ADMIN]), async (req, res) => {
    const category = await addCategory({
        label: req.body.label,
        name: req.body.name,
    });

    res.send({ data: mapCategory(category) });
});
// Category
app.patch('/categories/:id', hasRole([ROLES.ADMIN]), async (req, res) => {
    const updateCategory = await editCategory(req.params.id, {
        label: req.body.label,
        name: req.body.name,
    });

    res.send({ data: mapCategory(updateCategory) });
});
// Category
app.delete('/categories/:id', hasRole([ROLES.ADMIN]), async (req, res) => {
    await deleteCategory(req.params.id);

    res.send({ error: null });
});

// Product
app.post('/products', hasRole([ROLES.ADMIN]), async (req, res) => {
    const product = await addProduct({
        name: req.body.name,
        price: req.body.price,
        category: {
            label: req.body.category.label,
            name: req.body.category.name,
        },
        image: req.body.imageUrl,
        description: req.body.description,
        specifications: req.body.specifications,
        shipping: req.body.shipping,
        stock: req.body.stock,
    });

    res.send({ data: mapProduct(product) });
});
// Product
app.patch('/products/:id', hasRole([ROLES.ADMIN]), async (req, res) => {
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
// Product
app.delete('/products/:id', hasRole([ROLES.ADMIN]), async (req, res) => {
    await deleteProduct(req.params.id);

    res.send({ error: null });
});

// User
app.get('/users', hasRole([ROLES.ADMIN]), async (req, res) => {
    const users = await getUsers();

    res.send({ data: users.map(mapUser) });
});
// User
app.get('/users/roles', hasRole([ROLES.ADMIN]), async (req, res) => {
    const roles = getRoles();

    res.send({ data: roles });
});

mongoose
    .connect(
        'mongodb+srv://leftmailout:QYHmE4xJeLNkjKB5@cluster0.lhlfu.mongodb.net/online_store?retryWrites=true&w=majority&appName=Cluster0',
    )
    .then(() => {
        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
            console.log(chalk.green(`Server is running on port ${port}`));
        });
    });
