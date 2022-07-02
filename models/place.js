const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const prodSch = new mongoose.Schema({
    name: {
        type: ObjectId,
        ref: "Product",
    },
});
const dateSchema = new mongoose.Schema({
    date: {
        type: Date,
    },
    array: [prodSch],
});

const placeSchema = new mongoose.Schema({
    placeName: {
        type: String,
    },
    data: [dateSchema],
});


const Place = mongoose.model("Place", placeSchema)
module.exports = Place

