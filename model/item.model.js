const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = new Schema({
    id: String,
    quantity: Number
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;  