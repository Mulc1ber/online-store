const jwt = require('jsonwebtoken');

const sign = 'testtest';

module.exports = {
    generate(data) {
        // jwt.sign(data, process.env.JWT_SECRET, {expiresIn: "30d"});
        return jwt.sign(data, sign, { expiresIn: '30d' });
    },

    verify(token) {
        return jwt.verify(token, sign);
    },
};
