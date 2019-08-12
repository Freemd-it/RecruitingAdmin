const DepartmemtMeta = require('../models/DepartmentMetaModel');

const transforData = (originData) => {
  const result = [];

  originData.forEach((department, departmentIndex) => {
    const { _id: departmentId, teams, departmentName } = department;
    teams.forEach((team, teamIndex) => {
      const { questions, teamName, _id: teamId } = team;
      questions.forEach((question, questionIndex) => {
        result.push({
          departmentId: departmentId,
          departmentName: departmentName,
          teamId: teamId,
          teamName: teamName,
          questionId: question._id,
          type: question.type,
          content: question.content,
          registerDate: question.registerDate,
          register: question.register,
        });
      });
    });
  });
  return result;
}

const registQuestion = async (req, res) => {
  const result = {};
  const { userdata, body } = req;
  const { 
    batch,
    teamName,
    questions, // content, register, type, registerDate 전부 포함해서
    departmentName,
  } = body;
  const {
    content,
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
      teamName,
      content, 
      type,
      registerDate,
      register: userdata.name,
    });

    if (pushTeamQuestionData.error) result.error = pushTeamQuestionData.error;
    else result.data = transforData([await pushTeamQuestionData.data]);
  } else {
    const savedata = DepartmemtMeta.saveDepartmemtMeta({
      batch,
      departmentName,
      teamName, 
      content, 
      type,
      registerDate,
      register: userdata.name,
    });

    if (savedata.error) result.error = saveData.error;
    else result.data = transforData([await savedata.data]);
  }
  if (result.error) {
    return res.status(500).json({ message: JSON.stringify(error) , result: null});
  } else {
    return res.status(201).json({ message : "Success", result: result.data });
  }
};

const getDepartmemtMeta = async (req, res) => {
  const { query } = req;
  const { batch } = query;
  if (!batch) return res.status(500).json({ message: 'Invalid query' , result: null});
  const data = await DepartmemtMeta
    .find({batch})
    .select("_id departmentName teams")
    .exec()
    const result = transforData(data);
  return res.status(201).json({ message : "Success", result });
};

const getQuestion = async (req, res) => {
  const { questionId } = req.params;
  const { d: departmentId, t: teamId } = req.query;
  if (!questionId || !departmentId || !teamId) return res.status(500).json({ message: 'Invalid query' , result: null});
  try {
    const { ObjectId } = DepartmemtMeta;
    const questionData = await DepartmemtMeta.aggregate([
      { $unwind: "$teams" },
      { $project: {
        _id: 0,
        departmentId: "$_id",
        teamId: "$teams._id",
        teamName: "$teams.teamName",
        questions: "$teams.questions",
        departmentName: 1,
      }},
      { $unwind: "$questions" },
      { $project: {
        departmentId: 1,
        departmentName: 1,
        teamId: 1,
        teamName: 1,
        questionId: "$questions._id",
        content: "$questions.content",
        register: "$questions.register",
        type: "$questions.type",
        registedDate: "$questions.registedDate",
      }},
      { $match: {
          departmentId: new ObjectId(departmentId),
          teamId: new ObjectId(teamId),
          questionId: new ObjectId(questionId),
      }}
    ]);
    return res.status(200).json({ message : "Success", result: questionData[0] });
  } catch(e) {
    return res.status(500).json({ message: JSON.stringify(e) , result: null});
  }
};

const updateQuestion = async (req, res) => {
  return res.status(403).json({
    message: "Have not permission. Not your department",
    result: null,
  });
  // const { userdata, params, body } = req;
  // const { questionId } = params;
  // const {
  //   department,
  //   team,
  //   content,
  //   type,
  //   registedDate = new Date(),
  // } = body;
  // try {
  //   const updateData = await DepartmemtMeta.update(
  //     { departmentName: department, 'teams.teamName': team },
  //     { $set: {
  //       'teams.$[team].questions.$[question].content': content,
  //       'teams.$[team].questions.$[question].type': type,
  //       'teams.$[team].questions.$[question].registedDate': registedDate,
  //       'teams.$[team].questions.$[question].register': userdata.name,
  //     }},
  //     { 
  //       arrayFilters: [
  //         { 'team.teamName': team },
  //         { 'question._id': questionId }
  //       ], 
  //       new: true
  //     }
  //   );
  //   return res.status(201).json({ message : "Success", result: {
  //     content,
  //     type,
  //     registedDate,
  //     id: questionId,
  //     register: userdata.name,
  //     teamName: team,
  //     departmentName: department,
  //   }});
  // } catch(e) {
  //   console.log(e);
  //   return res.status(500).json({ message: JSON.stringify(e) , result: null});
  // }

};

module.exports = {
  getDepartmemtMeta, // 리쿠르트메타데이터
  registQuestion, // 질문등록
  updateQuestion, //  질문등록 수정
  getQuestion, // 질문정보 가지고오기
}
