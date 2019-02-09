const mongoose = require('mongoose');
const {Schema} = mongoose;

const QuestionsSchema = new Schema({
  classify: Number, //공통, 본부, 팀질문 및 어떤본부 팀인지 분류
  department: String, //본부
  team: String, //팀
  stringDepartment: String,
  question : String, //질문내용,
  batch: Number, //기수
  register: String, //등록자
  used: Boolean, // 사용여부
  type: String,
  registedDate: {
    type: Date,
    default: new Date() // 현재 날짜를 기본값으로 지정
  }
})


const scheduleSchema = new Schema({
  
  time: {
    type: String,
    enum: ['10:00 ~ 12:00', ]
  }, 
})

const departmentSchema = new Schema({
  name: String, // 본부명
  teams: {
    type: String,
    enum: ['기회지원팀', '홍보기획팀', '의무기록팀'] // 팀명들
  }
})
module.exports =  mongoose.model('Question', QuestionsSchema)