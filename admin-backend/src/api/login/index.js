const express = require('express')
const router = express.Router()

const loginCtrl = require('./login.ctrl')

router.post('/login', loginCtrl)

module.exports = router;
