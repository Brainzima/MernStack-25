const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    image: { type: String },  
    price: { type: Number, required: true, min: 0 }, 
    description: { type: String, required: true },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    numReviews: { type: Number, default: 0, min: 0 },
    category: { type: String },
    brand: String,
    countInStock: { type: Number, default: 0, min: 0 }, 
    sku: { type: String, unique: true },  
    isActive: { type: Boolean, default: true }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
