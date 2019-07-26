const express = require('express');
const router = express.Router();
const Authorizer = require('../middlewares/Authorizer');
const contextCtrl = require('../controllers/Context.Ctrl');
const userCtrl = require('../controllers/User.Ctrl');
const questionCtrl = require('../controllers/Question.Ctrl');
const stat = require('../cronjob/calStatistics');
const statCtrl = require('../controllers/Statistics.Ctrl');
const scheduleCtrl = require('../controllers/Schedule.Ctrl');
const interviewTimeCtrl = require('../controllers/InterviewTime.Ctrl');

router.use(Authorizer);

router.get('/health', contextCtrl.getHealthCheck);

router.get('/applicant', userCtrl.getUserList);
router.get('/applicant/:id', userCtrl.getUser);
router.put('/applicant/:userId', userCtrl.updateUserSupportStatus);
router.put('/applicant/:userId/rank', userCtrl.updateApplicantRank);
router.put('/applicant/:userId/memo', userCtrl.updateUserMemo);

router.get('/filters/applicant', userCtrl.searchUserList);

router.get('/question', questionCtrl.getQuestionList);
router.get('/question/:questionId', questionCtrl.getQuestion);
router.post('/question', questionCtrl.registQuestion);
router.put('/question/:questionId', questionCtrl.updateQuestion);

router.get('/schedule', scheduleCtrl.getScheduleList);

router.get('/statistics', statCtrl.getStat);

router.get('/interviewtime', interviewTimeCtrl.getInterviewSchedule);
router.post('/interviewtime', interviewTimeCtrl.registInterviewSchedule);

module.exports = router;
