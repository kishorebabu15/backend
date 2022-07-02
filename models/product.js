const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    name: {

        type: String,
        trim: true,
        required : true,
        unique: true
    }
})

const Product=mongoose.model("Product",productSchema ) 
module.exports = Product

