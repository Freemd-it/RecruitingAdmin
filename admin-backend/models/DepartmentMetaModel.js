const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const QuestionSchema = new Schema({
  content: String, // 질문내용 
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
  interviewAvailable: Date,
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
    teamName,
    content, 
    register,
    type,
    registerDate,
  } = data;
  const result = {
    error: null,
    data: null,
  };

  try {
    if (teamId) {
      result.data = this.findOneAndUpdate(
        { _id, 'teams._id': teamId, }, 
        { $push: {
            'teams.$.questions': {
              content, 
              register,
              type,
              registerDate
            }
          }
        }, 
        { new: true }
      ).exec();
    } else {
      result.data = this.findOneAndUpdate(
        { _id }, 
        { $push: {
            teams: {
              teamName,
              questions: [{
                content, 
                register,
                type,
                registerDate
              }]
            }
        }},
        { new: true }
      ).exec();
    }
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
    content, 
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
        content, 
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

DepartmentMetaSchema.statics.ObjectId = Types.ObjectId
module.exports = mongoose.model('DepartmentMeta', DepartmentMetaSchema);