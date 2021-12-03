const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema(
    {
        userId:{type: String},
        products:[
            {
                productID:{type: String},
                quantity:{type: Number, default: 1}
            }
        ],
        amount: {type:Number, required: true},
        address:{type:String, required: true},
        fullName: {type:String, required: true},
        companyName: {type:String, required: true}
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);