const express = require('express')
const router = express.Router()
const sendBodyMail = require('./controller')

router.route('/bodyTextMail').post(sendBodyMail)

module.exports = router



