const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        img: { type: String, required: true },
        categories: { type: Array, required: true },
        price: { type: Number, required: true },
        brand: { type: String, required: true },
        color: { type: Array, required: true },
        inStock: { type: Boolean, default: true },

    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);