const express = require('express')
const router = express.Router()
const controller = require('../Controller/route-controller')


router.get('/', controller.getUsernames,)

router.get('/new', controller.createUsernameGet)

router.post('/new', controller.createUsernamePost)

router.get('/delete', controller.deleteUsernameGet)

router.post('/delete', controller.deleteUsernamePost)

module.exports = router