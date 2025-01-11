const express = require('express');
const { getUsers, getRoles } = require('../controllers/user');
const mapUser = require('../helpers/mapUser');
const authenticated = require('../middlewares/authenticated');
const hasRole = require('../middlewares/hasRole');
const ROLES = require('../constants/roles');

const router = express.Router({ mergeParams: true });

router.get('/', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
    const users = await getUsers();

    res.send({ data: users.map(mapUser) });
});

router.get('/roles', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
    try {
        const roles = getRoles();

        res.send({ data: roles });
    } catch (error) {
        res.send({ error: 'Ошибка при получении ролей' || 'Unknown error' });
    }
});

module.exports = router;
