const mongoose = require('mongoose');
const validator = require('validator');

const OrderSchema = mongoose.Schema(
    {
        status: {
            type: String,
            required: true,
        },
        totalPrice: {
            type: Number,
            required: true,
        },
        userInfo: {
            type: {
                shipping: {
                    type: String,
                    required: true,
                },
                payment: {
                    type: String,
                    required: true,
                },
                username: {
                    type: String,
                    required: true,
                },
                email: {
                    type: String,
                    required: true,
                },
            },
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        products: [
            {
                type: {
                    id: {
                        type: Number,
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
                    name: {
                        type: String,
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
                    price: {
                        type: Number,
                        required: true,
                    },
                    quantity: {
                        type: Number,
                        required: true,
                    },
                },
                required: true,
            },
        ],
    },
    { timestamps: true },
);

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
