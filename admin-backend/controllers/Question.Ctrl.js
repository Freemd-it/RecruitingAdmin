const Question = require('../models/QuestionModel');

const getQuestionList = async(req, res) => {
    try {
        const questionList = await Question
                                        .find()
                                        .exec();
        res.status(200).json({
            data: questionList
        });
    } catch(e) {
        console.log(e);
        res.status(500).json({
            error: e
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
            data: question
        });
    } catch(e) {
        res.status(500).json({
            error: e
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
        if(register.permission > 301){
            res.status(401).json({
                error: "Have not permission"
            });
        }
        //본부 지정 안되어있으면 대표계정인지 체크
    }
    if(team) {
        //팀 미지정 -> 본부질문
        if(register.permission > 302){
            res.status(401).json({
                error: "Have not permission"
            });
        }
        //팀 지정 안되어있으면 본부장계정 or 대표계정인지 체크
        if((register.permission === 302) &&(department !== register.department)){
            res.status(401).json({
                error: "Have not permission"
            });
        }
        //본부장 계정일시 자신의 본부인지 체크
    }
    if((register.permission === 302) &&(department !== register.department)){
        res.status(401).json({
            error: "Have not permission"
        });
    }
    if((register.permission === 303) &&(team !== register.team)){
        res.status(401).json({
            error: "Have not permission"
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
        res.status(201).json({message : "Success"});
    } catch (e) {
        res.status(500).json({error: e});
    }
}

const updateQuestion = async(req, res) => {
    const {questionId, department, team, question, used} = req.body;
    const register = req.userdata;
    console.log(questionId);
    if(department) {
        //본부, 팀 미지정 -> 공통질문
        if(register.permission > 301){
            res.status(401).json({
                error: "Have not permission"
            });
        }
        //본부 지정 안되어있으면 대표계정인지 체크
    }
    if(team) {
        //팀 미지정 -> 본부질문
        if(register.permission > 302){
            res.status(401).json({
                error: "Have not permission"
            });
        }
        //팀 지정 안되어있으면 본부장계정 or 대표계정인지 체크
        if((register.permission === 302) &&(department !== register.department)){
            res.status(401).json({
                error: "Have not permission"
            });
        }
        //본부장 계정일시 자신의 본부인지 체크
    }
    if((register.permission === 302) &&(department !== register.department)){
        res.status(401).json({
            error: "Have not permission"
        });
    }
    if((register.permission === 303) &&(team !== register.team)){
        res.status(401).json({
            error: "Have not permission"
        });
    }

    try {
        const updatedQuestion = Question.findByIdAndUpdate(questionId, { $set: {question: question, used: used}}, {returnNewDocument: true}).find().exec();
        console.log(updateQuestion);
        res.status(201).json({message: "Successs"});
    } catch (e) {
        console.log(e);
        res.status(500).json({error: e});
    }
}

module.exports = {
    getQuestionList: getQuestionList,
    getQuestion: getQuestion,
    registQuestion: registQuestion,
    updateQuestion: updateQuestion,
}