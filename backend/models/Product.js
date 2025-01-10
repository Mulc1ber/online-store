const mongoose = require('mongoose');
const validator = require('validator');

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: {
                label: {
                    type: String,
                    required: true,
                },
                name: {
                    type: String,
                    required: true,
                },
            },
            required: true,
        },
        image: {
            type: String,
            required: true,
            validator: {
                validator: validator.isURL,
                message: 'Image should be a valid URL',
            },
        },
        description: {
            type: String,
            required: true,
        },
        specifications: {
            type: String,
            required: true,
        },
        shipping: {
            type: String,
            required: true,
        },
        stock: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true },
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
