const mongoose = require('mongoose');


const somedataSchema = new mongoose.Schema({
    name: String,
    isSour: Boolean,
    rating: Number
});

module.exports = mongoose.model('someData', somedataSchema);