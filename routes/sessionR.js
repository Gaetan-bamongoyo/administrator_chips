const sessionController = require('../controller/sessionController')

const router = require('express').Router()

router.post('/add', sessionController.addSession)
router.get('/show', sessionController.getData)
router.get('/get', sessionController.getSessionAll)

module.exports = router