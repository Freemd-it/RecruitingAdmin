const AdminModel = require('../models/AdminModel');
const DepartmentModel = require('../models/DepartmentModel');
const InterviewTimeModel = require('../models/InterviewTimeModel');
const QuestionModel = require('../models/QuestionModel');
const StatisticsModel = require('../models/StatisticsModel');
const UserModel = require('../models/UserModel');

const dummy = require('../config/schmeInit')

async function schemeInit () {

  // const adminModel = new AdminModel(dummy.admin);
  // const departmentModel = new DepartmentModel(dummy.department);
  // const interviewTimeModel = new InterviewTimeModel(dummy.interview);
  // const questionModel = new QuestionModel(dummy.question);
  // const statisticsModel = new StatisticsModel(dummy.statictics);

  // await adminModel.save();
  // await departmentModel.save();
  // await interviewTimeModel.save();
  // await questionModel.save();
  // await statisticsModel.save();
  await AdminModel.insertMany(dummy.admin);
  await DepartmentModel.insertMany(dummy.department);
  await InterviewTimeModel.insertMany(dummy.interview);
  await QuestionModel.insertMany(dummy.question);
  await StatisticsModel.insertMany(dummy.statictics);
}

module.exports = {
  schemeInit,
}