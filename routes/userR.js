const userController = require('../controller/userController')

const router = require('express').Router()

router.post('/add', userController.addUsers)
router.post('/login', userController.verifyUser)

module.exports = router