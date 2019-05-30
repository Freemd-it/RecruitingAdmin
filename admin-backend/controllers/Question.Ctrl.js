const Question = require('../models/QuestionModel');
const Code = require('../modules/Status.Code');

const matchSearchIndexandSchemaKey = (searchIndex, searchKeyword) => {
    return {
        "stringDepartment": new RegExp(searchKeyword),
    };
}

const getQuestionList = async(req, res) => {
    let findOption = {};
    
    const searchIndex = req.query.type;
    const searchKeyword = req.query.q;
    
    if (searchIndex && searchKeyword)  findOption = matchSearchIndexandSchemaKey(searchIndex, searchKeyword);

    try {
      const questionList = await Question.find(findOption).exec();
      res.status(200).json({
          message: "Successful get question list",
          result: questionList,
      });
    } catch(e) {
      res.status(500).json({
          message: JSON.stringify(e),
          result: null,
      });
    }
}

const getQuestion = async(req, res) => {
  try {
      const question = await Question.findById(req.params.questionId).exec();
      res.status(200).json({
        message: "Successful get question detail",
        result: question,
      });
  } catch(e) {
    res.status(500).json({
      message: JSON.stringify(e),
      result: null,
    });
  }
}

const registQuestion = async(req, res) => {
  const {department, team, question, used, type} = req.body;
  const register = req.userdata;
  const batch = 20;
  let classify = 101;

  if(Number(department) < 900) classify++; // 본부가 있으면 일단 공통질문 아니니 102로 만듦
  if(Number(team)) classify++; // 팀이 있으면 본부질문도 아니니 103까지 만듦. 본부는 없고 팀은 있다는 상황은 배제

  if(Number(department) === 900) {
      //본부, 팀 미지정 -> 공통질문
    if(register.permission > Code.Permission.get('DepartmentAccess')){
      res.status(401).json({
        message: "Have not permission0",
        result: null,
      });
    }
    //본부 지정 안되어있으면 대표계정인지 체크
  }
  if(!Number(team)) {
    //팀 미지정 -> 본부질문
    if(register.permission > Code.Permission.get('DepartmentAccess')){
      res.status(401).json({
          message: "Have not permission",
          result: null,
      });
    }
    //팀 지정 안되어있으면 본부장계정 or 대표계정인지 체크
    if((register.permission === Code.Permission.get('DepartmentAccess')) && (department !== register.department)){
        res.status(401).json({
            message: "Have not permission. Not your department",
            result: null,
        });
    }
    //본부장 계정일시 자신의 본부인지 체크
  }
  if((register.permission === Code.Permission.get('DepartmentAccess')) &&(department !== register.department)){
      res.status(401).json({
          message: "Have not permission. Not your department",
          result: null,
      });
  }
  if(register.permission === Code.Permission.get('TeamAccess')){
      res.status(401).json({
          message: "Have not permission. Please Request for Department Manager",
          result: null,
      });
  }

  const insertQuestion = new Question({
    classify,
    department,
    team,
    stringDepartment : Code.getDepartmentName(Number(String(department) + '00')) + ' ' + Code.getTeamName(Number(String(department) + String(team))),
    batch,
    register : register.name,
    used,
    question,
    type,
  });
  
  try {
    const savedQuestion = await insertQuestion.save();
    res.status(201).json({message : "Success", result: savedQuestion,});
  } catch (e) {
    res.status(500).json({message: JSON.stringify(e), result: null});
  }
}

const updateQuestion = async(req, res) => {
  const questionId = req.params.questionId;
  const {department, team, question, used} = req.body;

  const register = req.userdata;
  if(Number(department) === 900) {
      //본부, 팀 미지정 -> 공통질문
      if(register.permission > Code.Permission.get('DepartmentAccess')){
        res.status(401).json({
          message: "Have not permission0",
          result: null,
        });
      }
      //본부 지정 안되어있으면 대표계정인지 체크
  }
  if(!Number(team)) {
      //팀 미지정 -> 본부질문
      if(register.permission > Code.Permission.get('DepartmentAccess')){
        res.status(401).json({
          message: "Have not permission",
          result: null,
        });
      }
      //팀 지정 안되어있으면 본부장계정 or 대표계정인지 체크
      if((register.permission === Code.Permission.get('DepartmentAccess')) &&(department !== register.department)){
        res.status(401).json({
          message: "Have not permission. Not your department",
          result: null,
        });
      }
      //본부장 계정일시 자신의 본부인지 체크
  }
  if((register.permission === Code.Permission.get('DepartmentAccess')) &&(department !== register.department)){
    res.status(401).json({
      message: "Have not permission. Not your department",
      result: null,
    });
  }
  if(register.permission === Code.Permission.get('TeamAccess')){
    res.status(401).json({
      message: "Have not permission. Please Request for Department Manager",
      result: null,
    });
  }

  try {
    const questionObj = await Question.findById(req.params.questionId).exec();

    const updateData = {
      team, 
      question, 
      stringDepartment: Code.getDepartmentName(Number(questionObj.department + '00')) + ' ' + Code.getTeamName(Number(questionObj.department + String(team))),
      used,
    }
    const updatedQuestion = await new Promise( ( resolve, reject ) => {
      Question.findByIdAndUpdate( questionId, { $set: updateData}, {new: true}, ( error, obj ) => {
        if( error ) {
          console.error( JSON.stringify( error ) );
          return reject( error );
        }
        resolve( obj );
      });
    });
    
    if(!updatedQuestion){
      res.status(400).json({message: "Can't find question", result: null,});
      return;
    }

    res.status(201).json({message: "Successs", result: updatedQuestion});

  } catch (e) {
    console.log(e);
    res.status(500).json({message: JSON.stringify(e), result: null});
  }
}

module.exports = {
    getQuestionList,
    getQuestion,
    registQuestion,
    updateQuestion,
}
