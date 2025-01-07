const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema(
    {
        label: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
