const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type: String,
        strim: true,
        required: true
    },
    quantity: {
        type: Number,
        strim: true,
    },
    price: {
        type: String,
        strim: true,
        required: true
    },
    description: {
        type: String,
        strim: true,
    },
    imgURL: {
        type: String,
        strim: true,
    },
    color: {
        type: String,
        strim: true,
    },
}, {timestamps: true})

module.exports = mongoose.model('Product', productSchema);