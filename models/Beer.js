// models/Beer.js

const mongoose = require('mongoose');

const BeerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sku: {
        type: Number,
        required: true
    },
    brewery: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    style_type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    in_stock: {
        type: String,
        required: true
    }
});

module.exports = Beer = mongoose.model('beer', BeerSchema);