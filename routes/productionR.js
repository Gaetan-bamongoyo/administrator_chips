const productionController = require('../controller/productionController')

const router = require('express').Router()

router.post('/add', productionController.addProduction)
router.get('/:id', productionController.getProductionSession)

module.exports = router