const { where } = require('sequelize')
const db = require('../sequelize/connector')

const Depense = db.depense
const Motif = db.motif

const addMotif = async (req, res)=>{
    let info = {
        designation: req.body.designation,
    }

    const motif = await Motif.create(info)
    res.status(200).send(motif)
}

const getMotif = async (req, res)=>{
    const data = await Motif.findAll({})
    res.status(200).send(data)
}

const addDepense = async (req, res)=>{
    let info = {
        montant: req.body.montant,
        session_id: req.body.session_id,
        motif_id: req.body.motif_id,
    }

    const depense = await Depense.create(info)
    res.status(200).send(depense)
}

const getDepense = async(req, res)=>{
    const data = await Depense.findAll({})
    res.status(200).send(data)
}

const getDepenseMotif = async(req, res)=>{
    let id = req.params.id 
    const data = await Depense.findAll({
        where: { session_id : id },
        include: [{
            model: Motif,
            as: 'motif'
        }]
    })
    res.status(200).send(data)
}

module.exports = {
    addDepense,
    addMotif,
    getDepense,
    getMotif,
    getDepenseMotif
}