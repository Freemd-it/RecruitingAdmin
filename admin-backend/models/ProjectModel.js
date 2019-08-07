const mongoose = require('mongoose');
const {Schema} = mongoose

const ProjectSchema = new Schema({
    projectName: String,
    projectDesc: String,
    projectStatus: String
})

module.exports = mongoose.model('Project', ProjectSchema);
