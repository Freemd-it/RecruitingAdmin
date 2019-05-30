const AdminModel = require('../models/AdminModel');
const DepartmentModel = require('../models/DepartmentModel');
const InterviewTimeModel = require('../models/InterviewTimeModel');
const QuestionModel = require('../models/QuestionModel');
const StatisticsModel = require('../models/StatisticsModel');
const UserModel = require('../models/UserModel');

const dummy = require('../config/schmeInit')

async function schemeInit () {

  const adminModel = new AdminModel(dummy.admin).save();
  const departmentModel = new DepartmentModel(dummy.department).save();
  const interviewTimeModel = new InterviewTimeModel(dummy.interview).save();
  const questionModel = new QuestionModel(dummy.question).save();
  const statisticsModel = new StatisticsModel(dummy.statictics).save();


  await adminModel.save();
  await departmentModel.save();
  await interviewTimeModel.save();
  await questionModel.save();
  await statisticsModel.save();
}

module.exports = {
  schemeInit,
}