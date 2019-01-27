const mongoose = require('mongoose');
const {Schema} = mongoose;

const info = new Schema({
    name : String,
    email : String,
    phone : String,
});

module.exports = mongoose.model('Info', info);