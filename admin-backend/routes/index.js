const express = require('express');
const router = express.Router();
const Authorizer = require('../middlewares/Authorizer');
const contextCtrl = require('../controllers/Context.Ctrl');
const userCtrl = require('../controllers/User.Ctrl');
const questionCtrl = require('../controllers/Question.Ctrl');
const stat = require('../cronjob/calStatistics');
const statCtrl = require('../controllers/Statistics.Ctrl');

router.use(Authorizer);

router.get('/health', contextCtrl.getHealthCheck);

router.get('/applicant', userCtrl.getUserList);
router.get('/applicant/:id', userCtrl.getUser);

router.get('/question', questionCtrl.getQuestionList);
router.get('/question/:questionId', questionCtrl.getQuestion);
router.post('/question', questionCtrl.registQuestion);
router.put('/question', questionCtrl.updateQuestion);

router.get('/statistics', statCtrl.getStat);

module.exports = router;
