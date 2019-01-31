const express = require('express');
const router = express.Router();
const Authorizer = require('../middlewares/Authorizer');
const testCtrl = require('../controllers/test.Ctrl');
const userCtrl = require('../controllers/User.Ctrl');
const questionCtrl = require('../controllers/Question.Ctrl');
const stat = require('../cronjob/calStatistics');
const statCtrl = require('../controllers/Statistics.Ctrl');
const scheduleCtrl = require('../controllers/Schedule.Ctrl');

router.use(Authorizer);

router.get('/test', testCtrl.getInfoList);
router.post('/test', testCtrl.makeInfo);
router.post('/test/user', testCtrl.makeUser);

router.get('/applicant', userCtrl.getUserList);
router.get('/applicant/:id', userCtrl.getUser);

router.get('/question', questionCtrl.getQuestionList);
router.get('/question/:questionId', questionCtrl.getQuestion);
router.post('/question', questionCtrl.registQuestion);
router.put('/question', questionCtrl.updateQuestion);

router.get('/schedule', scheduleCtrl.getScheduleList);

router.get('/statistics', statCtrl.getStat);
router.get('/test/stat', (req, res) => {
    stat();
    res.status(200).send("update stat");
});

module.exports = router;
