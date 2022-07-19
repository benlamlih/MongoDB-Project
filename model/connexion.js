const mongoose = require("mongoose");
let db = mongoose.connect('mongodb://localhost:27017/ecom');

module.exports = db;