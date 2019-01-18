const express = require('express')
const router = express.Router()

const dashboardCtrl = require('./dashboard.ctrl')

router.post('/login', dashboardCtrl)

module.exports = router;
