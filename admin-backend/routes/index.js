const express = require('express');
const router = express.Router();
const Authorizer = require('../middlewares/Authorizer');
const testCtrl = require('../controllers/test.Ctrl');
const userCtrl = require('../controllers/User.Ctrl');
const questionCtrl = require('../controllers/Question.Ctrl');

router.use(Authorizer);

router.get('/test', testCtrl.getInfoList);
router.post('/test', testCtrl.makeInfo);

router.get('/applicant', userCtrl.getUserList);
//router.get('/applicant/:id', userCtrl.getUser);

router.get('/question', questionCtrl.getQuestionList);
router.get('/question/:questionId', questionCtrl.getQuestion);
router.post('/question', questionCtrl.registQuestion);
router.put('/question', questionCtrl.updateQuestion);

module.exports = router;
