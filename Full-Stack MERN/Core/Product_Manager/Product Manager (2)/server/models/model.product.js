const mongoose = require("mongoose")

const Product = new mongoose.Schema({
    title: {
        type: String,
        required: [true,"the Title is required"]
    },
    price: {
        type: Number,
        required: [true,"the Price is required"]
    },
    description: {
        type: String,
        required: [true,"the Description is required"]
    }
}, { timestamps: true })

const ProductSchema = mongoose.model("ProductSchema", Product)
module.exports = ProductSchema