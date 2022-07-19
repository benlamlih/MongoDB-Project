const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
    basket: [],
    user_id: String
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;  