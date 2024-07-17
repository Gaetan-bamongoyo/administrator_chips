const depenseController = require('../controller/depenseController')

const router = require('express').Router()

router.post('/add', depenseController.addDepense)
router.get('/show', depenseController.getDepense)
router.get('/:id', depenseController.getDepenseMotif)

module.exports = router