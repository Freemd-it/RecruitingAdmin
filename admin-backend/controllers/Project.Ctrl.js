const Project = require('../models/ProjectModel');

const getProjectList = async (req, res) => {
  try {
    const projectData = await Project
    .find({})
    .select("projectName projectDesc projectStatus")
    .exec();
    const projectNames = []
    projectData.forEach
    res.status(200).json({ message : "Success", result: projectData});
  } catch(e) {
    console.log(e)
    res.status(500).json({ message: JSON.stringify(e) , result: null,});
  }
}

const getProjectNames = async (req, res) => {
  try {
    const projectData = await Project
    .find({})
    .select("projectName")
    .exec();
    
    projectNames = []
    for (i=0;i<projectData.length; i++) {
      projectNames[i] = projectData[i].projectName
    }
    res.status(200).json({ message : "Success", result: projectNames});
  } catch(e) {
    console.log(e)
    res.status(500).json({ message: JSON.stringify(e) , result: null,});
  }
}

const postProject = async (req, res) => {
  const { 
    projectName, 
    projectDesc
  } = req.body;

  if (!projectName || !projectDesc)
    return res.status(500).json({
      message: 'invalied value',
      result: null,
    });

  try {
    const project = new Project({ 
      projectName, 
      projectDesc
    });

    const savedProject = await project.save();
    res.status(201).json({ message : "Success", result: savedProject});
  } catch(e) {
    res.status(500).json({ message: JSON.stringify(e) , result: null,});
  }
}

const deleteProject = async (req, res) => {
  const { projectid } = req.body;
  if (!projectid )
    return res.status(500).json({
      message: 'invalied value',
      result: null,
    });

  try {
    Project.findByIdAndDelete(projectid).exec();
    res.status(201).json({ message : "Success"});
  } catch(e) {
    res.status(500).json({ message: JSON.stringify(e) , result: null,});
  }
}

const putProject = async (req, res) => {
  const { project } = req.body;
  if (!project )
    return res.status(500).json({
      message: 'invalied value',
      result: null,
    });

  try {
    Project.findByIdAndUpdate(project._id, project).exec();
    res.status(201).json({ message : "Success"});
  } catch(e) {
    res.status(500).json({ message: JSON.stringify(e) , result: null,});
  }
}

module.exports = {
  getProjectList,
  getProjectNames,
  postProject,
  deleteProject,
  putProject
}
