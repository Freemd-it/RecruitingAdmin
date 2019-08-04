const DepartmemtMeta = require('../models/DepartmentMetaModel');

const registDepartmemtMeta = async (req, res) => {
  const { 
    batch,
    departmentName,
    teams,
  } = req.body;
};

const registQuestion = async (req, res) => {
  const result = {};
  const { 
    batch,
    teamName,
    questions, // content, register, type, registerDate 전부 포함해서
    departmentName,
  } = req.body;
  const {
    contents, 
    register,
    type,
    registerDate = new Date(),
  } = questions;
  const data = await DepartmemtMeta.findIdAndTeamId({batch, departmentName});

  if (data && data._id) {
    const { _id, teams } = data;
    let teamId = '';

    teams.some((item, index) => {
      const result = item.teamName === teamName;
      if (result) teamId = item._id;
      return result
    });

    const pushTeamQuestionData = DepartmemtMeta.pushTeamQuestion({
      _id,
      teamId, 
      contents, 
      register,
      type,
      registerDate,
    });

    if (pushTeamQuestionData.error) result.error = pushTeamQuestionData.error;
    else result.data = await pushTeamQuestionData.data;

  } else {
    const savedata = DepartmemtMeta.saveDepartmemtMeta({
      batch,
      departmentName,
      teamName, 
      contents, 
      register,
      type,
      registerDate,
    });

    if (savedata.error) result.error = saveData.error;
    else result.data = await savedata.data;
  }
  if (result.error) {
    return res.status(500).json({ message: JSON.stringify(error) , result: null});
  } else {
    return res.status(201).json({ message : "Success", result: result.data });
  }
};

const getDepartmemtMeta = async (req, res) => {
};

const modifyDepartmemtMeta = async (req, res) => {
};

const departmemtMetaList = async (req, res) => {
};

module.exports = {
  registDepartmemtMeta,
  getDepartmemtMeta,
  modifyDepartmemtMeta,
  departmemtMetaList,

  registQuestion,
}