const mongoose = require('mongoose');
const {Schema} = mongoose

const DepartmentSchema = new Schema({
    code: Number,
    department: String, 
    Team: String,
});

module.exports = mongoose.model('Department', DepartmentSchema);