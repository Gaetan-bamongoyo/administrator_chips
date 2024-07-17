const depenseController = require('../controller/depenseController')

const router = require('express').Router()

router.post('/add', depenseController.addMotif)
router.get('/show', depenseController.getMotif)

module.exports = router