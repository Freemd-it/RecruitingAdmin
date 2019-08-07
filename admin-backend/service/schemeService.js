const AdminModel = require('../models/AdminModel');
const DepartmentModel = require('../models/DepartmentModel');
const InterviewTimeModel = require('../models/InterviewTimeModel');
const QuestionModel = require('../models/QuestionModel');
const StatisticsModel = require('../models/StatisticsModel');
const RecruitMetaModel = require('../models/RecruitMetaModel');
const UserModel = require('../models/UserModel');

const dummy = require('../config/schmeInit')

async function schemeInit () {
  try {
    await AdminModel.insertMany(dummy.admin);
    await DepartmentModel.insertMany(dummy.department);
    await InterviewTimeModel.insertMany(dummy.interview);
    await QuestionModel.insertMany(dummy.question);
    await StatisticsModel.insertMany(dummy.statictics);
    await RecruitMetaModel.insertMany(dummy.recruitMeta);
    return true;
  } catch(e) {
    return false;
  }
}

module.exports = {
  schemeInit,
}