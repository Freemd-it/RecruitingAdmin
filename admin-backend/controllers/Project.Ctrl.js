const Project = require('../models/ProjectModel');

const getProjectList = async (req, res) => {
  try {
    const projectData = await Project
    .find({})
    .select("projectName projectDesc projectStatus")
    .exec();
    res.status(200).json({ message : "Success", result: projectData});
  } catch(e) {
    console.log(e)
    res.status(500).json({ message: JSON.stringify(e) , result: null,});
  }
}

module.exports = {
  getProjectList,
}
