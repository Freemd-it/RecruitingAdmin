const express = require('express')
const router = express.Router()

const interviewCtrl = require('./interview.ctrl')

router.post('/login', interviewCtrl)

module.exports = router;
