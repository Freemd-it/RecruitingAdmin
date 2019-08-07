const AdminModel = require('../models/AdminModel');
// const DepartmentModel = require('../models/DepartmentModel');
// const InterviewTimeModel = require('../models/InterviewTimeModel');
// const QuestionModel = require('../models/QuestionModel');
const StatisticsModel = require('../models/StatisticsModel');
const RecruitMetaModel = require('../models/RecruitMetaModel');
const DepartmentMetaModel = require('../models/DepartmentMetaModel');
const UserModel = require('../models/UserModel2');

const dummy = require('../config/schmeInit')

async function schemeInit () {
  try {
    await AdminModel.insertMany(dummy.admin);
    // await DepartmentModel.insertMany(dummy.department);
    // await InterviewTimeModel.insertMany(dummy.interview);
    // await QuestionModel.insertMany(dummy.question);
    await StatisticsModel.insertMany(dummy.statictics);
    await RecruitMetaModel.insertMany(dummy.recruitMeta);
    await DepartmentMetaModel.insertMany(dummy.departmentMetas);
    await UserModel.insertMany(dummy.users);
    return true;
  } catch(e) {
    console.log(e);
    return false;
  }
}

module.exports = {
  schemeInit,
}