const Question = require('../models/QuestionModel');
const Code = require('../modules/Status.Code');

const getQuestionList = async(req, res) => {
    try {
        const questionList = await Question
                                        .find()
                                        .exec();
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
    console.log(req.params);
    try {
        const question = await Question
                                        .findById(req.params.questionId)
                                        .exec();
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
    const {department, team, question, used} = req.body;
    const register = req.userdata;
    const batch = 20;
    let classify = 101;
    if(department) classify++; //본부가 있으면 일단 공통질문 아니니 102로 만듦
    if(team) classify++; //팀이 있으면 본부질문도 아니니 103까지 만듦. 본부는 없고 팀은 있다는 상황은 배제

    if(department) {
        //본부, 팀 미지정 -> 공통질문
        if(register.permission > Code.Permission.get('FullAccess')){
            res.status(401).json({
                message: "Have not permission",
                result: null,
            });
        }
        //본부 지정 안되어있으면 대표계정인지 체크
    }
    if(team) {
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
                message: "Have not permission",
                result: null,
            });
        }
        //본부장 계정일시 자신의 본부인지 체크
    }
    if((register.permission === Code.Permission.get('DepartmentAccess')) &&(department !== register.department)){
        res.status(401).json({
            message: "Have not permission",
            result: null,
        });
    }
    if((register.permission === Code.Permission.get('TeamAccess')) &&(team !== register.team)){
        res.status(401).json({
            message: "Have not permission",
            result: null,
        });
    }

    const insertQuestion = new Question();
    insertQuestion.classify = classify;
    insertQuestion.department = department;
    insertQuestion.team = team;
    insertQuestion.batch = batch;
    insertQuestion.register = register.name;
    insertQuestion.used = used;
    insertQuestion.question = question;
    
    try {
        await insertQuestion.save();
        //TODO
        res.status(201).json({message : "Success", result: null,});
    } catch (e) {
        res.status(500).json({message: JSON.stringify(e), result: null});
    }
}

const updateQuestion = async(req, res) => {
    const {questionId, department, team, question, used} = req.body;
    const register = req.userdata;
    console.log(questionId);
    if(department) {
        //본부, 팀 미지정 -> 공통질문
        if(register.permission > Code.Permission.get('FullAccess')){
            res.status(401).json({
                message: "Have not permission",
                result: null,
            });
        }
        //본부 지정 안되어있으면 대표계정인지 체크
    }
    if(team) {
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
                message: "Have not permission",
                result: null,
            });
        }
        //본부장 계정일시 자신의 본부인지 체크
    }
    if((register.permission === Code.Permission.get('DepartmentAccess')) &&(department !== register.department)){
        res.status(401).json({
            message: "Have not permission",
            result: null,
        });
    }
    if((register.permission === Code.Permission.get('TeamAccess')) &&(team !== register.team)){
        res.status(401).json({
            message: "Have not permission",
            result: null,
        });
    }

    try {
        console.log("question: ",question);
        console.log("used: ",used)
        const updatedQuestion = await new Promise( ( resolve, reject ) => {
            Question.findByIdAndUpdate( questionId, { $set: {question: question, used: used}}, {new: true}, ( error, obj ) => {
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
    getQuestionList: getQuestionList,
    getQuestion: getQuestion,
    registQuestion: registQuestion,
    updateQuestion: updateQuestion,
}
