const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
    name: String,
    description: String
});

const category = mongoose.model("category", categorySchema);

module.exports = category;  