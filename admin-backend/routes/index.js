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
const memoCtrl = require('../controllers/MemoCtrl.Ctrl');
const recruitMetaCtrl = require('../controllers/RecruitMeta.Ctrl');
const projectCtrl = require('../controllers/Project.Ctrl');
const DepartmentMetaCtrl = require('../controllers/DepartmentMeta.Ctrl');

router.use(Authorizer);

router.get('/health', contextCtrl.getHealthCheck);


router.get('/applicant2/:batch', userCtrl.getUserList);
router.get('/applicant2/:batch/:id', userCtrl.getUser);

// router.get('/applicant/:batch', userCtrl.getUserList);
// router.get('/applicant/:batch/:id', userCtrl.getUser);
// router.put('/applicant/:batch/:userId', userCtrl.updateUserSupportStatus);
// router.put('/applicant/:batch/:userId/rank', userCtrl.updateApplicantRank);

router.get('/filters/applicant', userCtrl.searchUserList);

router.post('/question2', DepartmentMetaCtrl.registQuestion);
router.get('/question2', DepartmentMetaCtrl.getDepartmemtMeta);
router.get('/question2/:questionId', DepartmentMetaCtrl.getQuestion);
router.put('/question2/:questionId', DepartmentMetaCtrl.updateQuestion);


router.get('/question', questionCtrl.getQuestionList);
router.get('/question/:questionId', questionCtrl.getQuestion);
router.post('/question', questionCtrl.registQuestion);
router.put('/question/:questionId', questionCtrl.updateQuestion);

router.get('/schedule/:batch', scheduleCtrl.getScheduleList);
router.get('/schedule/:batch/mockup', scheduleCtrl.mockup);

router.get('/statistics', statCtrl.getStat);
router.get('/statistics/applier/:batch', statCtrl.getApplierStat);

router.get('/interviewtime', interviewTimeCtrl.getInterviewSchedule);
router.post('/interviewtime', interviewTimeCtrl.registInterviewSchedule);

router.get('/recruitMeta', recruitMetaCtrl.getRecruitMetaList);
router.post('/recruitMeta', recruitMetaCtrl.registRecruitMeta);
router.put('/recruitMeta/:batch', recruitMetaCtrl.modifyRecruitMeta);
router.get('/recruitMeta/:batch', recruitMetaCtrl.getRecruitMeta);

router.get('/recruitMetaOrg/:batch', recruitMetaCtrl.getRecruitMetaOrg);
router.get('/recruitMetaRecent', recruitMetaCtrl.getRecruitMetaRecent);
router.get('/recruitMeta/:batch', recruitMetaCtrl.getRecruitMeta);
router.delete('/recruitMeta', recruitMetaCtrl.deleteRecruitMeta);

router.get('/project', projectCtrl.getProjectList);
router.get('/projectNames', projectCtrl.getProjectNames);
router.post('/project', projectCtrl.postProject);
router.delete('/project', projectCtrl.deleteProject);
router.put('/project', projectCtrl.putProject);

router.post('/memo/:userId', memoCtrl.registMemo);
router.get('/memo/:userId', memoCtrl.getMemo);

module.exports = router;
