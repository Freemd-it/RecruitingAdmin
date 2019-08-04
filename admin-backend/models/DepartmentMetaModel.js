const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuestionSchema = new Schema({
  contents: String, // 질문내용 
  register: String, // 작성자
  type: {
    type: Number,
    enum: [101, 102, 103], // 질문타입(text, file, ...)
    default: 101 // default 는 텍스트
  },
  registerDate: { // 질문 등록시간
    type: Date,
    default: Date.now
  },
});

const TeamSchema = new Schema({
  teamName: String, // 팀이름 
  questions: [QuestionSchema], // 질문
  interviewAvailable : [{
    interviewDate: Date, // 인터뷰 가능 날짜
    interviewTime: String // 인터뷰 가능 시간
  }],
});

const DepartmentMetaSchema = new Schema({
  batch: Number, //기수
  departmentName: String, // "본부명"
  teams: [TeamSchema], 
});

DepartmentMetaSchema.statics.findIdAndTeamId = function(data) {
  const { batch, departmentName } = data;
  let result = false;
  if (!batch || !departmentName) {
    return result;
  }
  try {
    result = this.findOne({batch, departmentName}).select("_id teams._id teams.teamName").exec();
  } catch(e) {
    result = false;
  }
  return result;
};

DepartmentMetaSchema.statics.pushTeamQuestion = function(data) {
  const { 
    _id,
    teamId, 
    contents, 
    register,
    type,
    registerDate,
  } = data;
  const result = {
    error: null,
    data: null,
  };

  try {
   result.data = this.updateOne({
    _id,
    'teams._id': teamId,
  }, {
    $push: {
      'teams.$.questions': {
        contents, 
        register,
        type,
        registerDate
      },
    }
  }).exec();
  } catch(e) {
    result.error = e;
  }
  return result;
};


DepartmentMetaSchema.statics.saveDepartmemtMeta = function(data) {
  const result = {
    error: null,
    data: null,
  }
  const {
    batch,
    departmentName,
    teamName, 
    contents, 
    register,
    type,
    registerDate,
  } = data;
  const departmemtMeta = new this({ 
    batch,
    departmentName,
    teams: [{
      teamName, 
      questions: {
        contents, 
        register,
        type,
        registerDate,
      },
    }],
  });

  try {
    result.data = departmemtMeta.save();
  } catch(e) {
    result.error = e;
  }
  return result;
}

module.exports = mongoose.model('DepartmentMeta', DepartmentMetaSchema);