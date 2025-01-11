const express = require('express');
const {
    addCategory,
    editCategory,
    deleteCategory,
    getCategories,
} = require('../controllers/category');
const mapCategory = require('../helpers/mapCategory');
const authenticated = require('../middlewares/authenticated');
const hasRole = require('../middlewares/hasRole');
const ROLES = require('../constants/roles');

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
    try {
        const categories = await getCategories();

        res.send({ data: categories.map(mapCategory) });
    } catch (error) {
        res.send({ error: 'Ошибка при получении категорий' || 'Unknown error' });
    }
});

// authenticated

router.post('/', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
    const category = await addCategory({
        label: req.body.label,
        name: req.body.name,
    });

    res.send({ data: mapCategory(category) });
});

router.patch('/:id', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
    const updateCategory = await editCategory(req.params.id, {
        label: req.body.label,
        name: req.body.name,
    });

    res.send({ data: mapCategory(updateCategory) });
});

router.delete('/:id', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
    await deleteCategory(req.params.id);

    res.send({ error: null });
});

module.exports = router;
