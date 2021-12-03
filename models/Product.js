const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        title:{type: String, required: true, unique: true},
        category:{type: String, required: true},
        composer:{type: String, required: true},
        description:{type: String, required: true, unique: true},
        price:{type: Number, required: true},
        published:{type: Number, required: true},
        img:{ type: String, required: true},
        mp3:{ type: String, required: true},
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);