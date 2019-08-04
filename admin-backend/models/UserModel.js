const mongoose = require('mongoose');
const {Schema} = mongoose;
const crypto = require('crypto')


const ExternalActivitiesSchema = new Schema({
  external_type:{
    type: String,
    enum : ['인턴', '봉사활동']
  },
  organizer: String, 
  start_date: Date, 
  end_date: Date, 
  turnaround_time: Number,
  content: String 
})

const SpecialSchema = new Schema({
  special_type: {
    type: String,
    enum: ['자격증', '어학능력', '기타능력']
  },
  acquisition_date: Date,
  self_evaluation_ability: {
    type: String,
    enum: ['상', '중', '하']
  },
  content: String 
});
// 포트폴리오
const PortfoliosSchema = new Schema({
  file_path: String, // 포트폴리오 파일 경로
  registedDate: {
    type: Date,
   default: new Date() // 현재 날짜를 기본값으로 지정
  }
})

// 질문 스키마
const QuestionsSchema = new Schema({
  classify: Number, //공통, 본부, 팀질문 및 어떤본부 팀인지 분류 101 102 103
  department: String, //본부
  team: String, //팀
  question : String, //질문내용,
  content: String,
  batch: Number, //기수
  portfolios: [PortfoliosSchema],
  registedDate: {
    type: Date,
    default: new Date() // 현재 날짜를 기본값으로 지정
  }
})

const interviewSchema = new Schema({
  interview_date : Date,
  interview_week : String,
  interview_time : [String]
})

const UserSchema = new Schema({
  registedDate: {
    type: Date,
    default: new Date() // 현재 날짜를 기본값으로 지정
  },
  basic_info:{
    user_name : String,
    email: String,
    password : String,

    english_name: String,
    is_male: Boolean,
    birth_date: Date, 
    
    phone_number : String,
    sns : String,
    address : String,
    
    department: {
      type: String,
    },
    secondary_department: {
      type: String,
    },
    team: String, 
    secondary_team: String,
    medical_field: String,
    secondary_medical_field: String, 
    other_assign_ngo: Boolean, 
    other_assign_medical: Boolean,
  },
  academic_career: {
    academic_name : String,
    location : String,
    degree : String,
    major: String,
    entrance_date : Date,
    graduation_date: Date
  },
  external_activities: [ExternalActivitiesSchema],
  special_info: [SpecialSchema],
  question_info: [QuestionsSchema],
  interview_info : [interviewSchema],
  support_status: Number,
  batch: Number,
  evaluation: String,
  memo: String,
});

// id 로 찾기
UserSchema.statics.findOneById = function(id){
  return this.findOne({
    _id:id
  }).exec();
};

// email 로 찾기
UserSchema.statics.findOneByEmail = function(email){
  return this.findOne({
    'basic_info.email' : email
  }).exec();
};

// 이름 으로 찾기
UserSchema.statics.findOneByUsername = function(user_name) {
  // console.log(user_name)
  return this.findOne({
      'basic_info.user_name' : user_name
  }).exec();
};


UserSchema.methods.verify = function(password) {
  // console.log(this.password)
  const encrypted = crypto.createHmac('sha1', config.secret)
                          .update(password)
                          .digest('base64');

  return this.basic_info.password === encrypted
}

module.exports = mongoose.model('User', UserSchema);