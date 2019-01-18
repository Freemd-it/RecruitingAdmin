const express = require('express')
const router = express.Router()

const recruitCtrl = require('./recruit.ctrl')

router.post('/login', recruitCtrl)

module.exports = router;
