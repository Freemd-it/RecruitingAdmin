const mongoose = require('mongoose');
const { Schema } = mongoose;

const DepartmentTeamSchema = new Schema({
  teamName: String, // 팀명 (ex 인사팀)
  medicalFieldOptions: Array, // ["무료진료", "보건교육", ...]
});

const DepartmentSchema = new Schema({
  departmentName : String, // 본부이름: (ex 경영지원본부)
  departmentDescription : String, // 본부설명 
  departmentImageUrl : String, // s3 URL이 들어가지 않을까요
  teams: [DepartmentTeamSchema]
});

const InterviewTimeSchema = new Schema({
  date: Date, // 인터뷰 날짜: 2019-09-15
  time: String // 인터뷰 시간: 12:00 ~ 13:00
});

const RecruitMetaSchema = new Schema({
  batch: Number,
  period: {
    startDate: Date, // 리쿠르팅 시작
    endDate: Date,
  },
  announceDate : Date, // 발표일
  recruitStatus : {
    type: Number,
    enum: [1000, 1001, 1002], // 리쿠르팅 상태 코드(진행예정, 진행중, 마감 등등...)
    default: 1000,
  }, 
  medicalFeilds : Array, // 무진, 보건교육, 해외의료 등등..
  departments: [DepartmentSchema],
  interviewTimes: [InterviewTimeSchema], 
});

module.exports = mongoose.model('RecruitMeta', RecruitMetaSchema);