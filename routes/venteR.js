const venteController = require('../controller/venteController')

const router = require('express').Router()

router.post('/add', venteController.addPersonnel)
router.get('/show', venteController.getDataPersonnel)
router.get('/:id', venteController.getDataVente)
router.post('/addvente', venteController.addVente)
router.put('/update/:id', venteController.updateVente)
router.get('/get/:id', venteController.getDataVente)

module.exports = router