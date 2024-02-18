const mongoose = require('mongoose')

const {Schema} = mongoose


const productSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    brand: {
        type: String,
    }
})

module.exports = mongoose.model("Product", productSchema)