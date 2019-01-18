const express = require('express')
const router = express.Router()

const questionCtrl = require('./question.ctrl')

router.post('/login', questionCtrl)

module.exports = router;
