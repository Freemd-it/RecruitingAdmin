const express = require('express')
const router = express.Router()

const login = require('./login')
const contents = require('./contents')

router.use('/login', login)
router.use('/contents', contents)

module.exports = router;
