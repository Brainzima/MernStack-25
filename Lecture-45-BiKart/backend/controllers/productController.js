const Product = require("../models/Product");

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
exports.getProductById = async (req, res) => {
    try {
        const products = await Product.findById(req.params.id);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}





