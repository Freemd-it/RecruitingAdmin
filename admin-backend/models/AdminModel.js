const mongoose = require('mongoose');
const {Schema} = mongoose

const AdminSchema = new Schema({
    permission: Number,
    department: String,
    team: String,
    name: String,
    email: String,
    hash: String,
})

module.exports = mongoose.model('Admin', AdminSchema);