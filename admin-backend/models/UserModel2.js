const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  batch: Number,
  supportStatus: {
    type: Number,
    enum: [200, 201], // 200임시저장(미제출), 201(제출)
  },
  clientStoreData: { },
  evaluation: {
    type: String,
    default: '미평가',
  },
  basicInfo: {
    email: {
      type: String,
      unique: true,
    },
    password: String,
    userName: String, // 지원자 이름
    englishName: String,// 지원자 영어이름
    isMale: Boolean, // 남여
    brithDate: Date, // 생일
    phoneNumber: String, // 폰
    sns: String, // sns url
    address: String, // 주소
    departments: [{ // 1지망 && 2지망 등등..
      departmentName: String, // 본부
      teamName: String, // 팀이름
      order: Number, // 1,2, ...
      medicalField: {
        type: String,
        enum: ["무료진료소", "보건교육", "해외의료"]
      },
    }], 
    otherAssignNgo: Boolean, // NGO 동의
    otherAssignMedical: Boolean, // 다른의료 동의?
  },
  academicCareer: {
    academicName: String, // 학교이름
    location: String, // 지역
    major: String, // 전공
    entranceDate: Date, // 입학년도 
    graduationDate: Date, // 졸업년도
    degree: {
      type: String,
      enum: ["졸업", "휴학", "재학", "대학원"],
    },
  },
  specialInfo: [{ // 특기사항
    specialType: {
      type: String,
      enum: ["자격증", "어학능력", "기타능력"],
    },
    acquisitionDate: Date,
    selfEvaluationAbility: { // 본인 수준평가
      type: String,
      enum: ["상", "중", "하"]
    },
    content: String ,
  }],
  externalActivities: [{ // 경력사항
    externalType:{
      type: String,
      enum : ['인턴', '봉사활동'],
    },
    organizer: String, // 회사이름
    startDate: Date, // 시작날짜
    endDate: Date, // 종료날짜
    turnaroundTime: Number, // 시작 ~ 종료까지의 총 시간
    content: String // 내용
  }], 
  questionInfo: [{
    departmentName: String,
    teamName: String,
    type: {
      type: Number,
      enum: [101, 102, 103] // 텍스트, 파일첨부, 선택
    },
    question: String, // 질문내용
    text: String, // 답변
    questionType: {
      type: String,
      enum: ["common", "department"], // 공통질문, 본부질문
    },
    file: {
      oriName: String, // 파일이름
      key: String, // 변환된 파일이름
      url: String, // s3링크
    },
  }],
  interviewInfo: [{
    interviewDate: Date,
    interview_week: String,
    interview_time: [String]
  }],
  registedDate: {
    type: Date,
    default: Date.now // 현재 날짜를 기본값으로 지정
  },
});

module.exports = mongoose.model('User', UserSchema);