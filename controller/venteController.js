const db = require('../sequelize/connector')

const Vente = db.vente
const Personnel = db.personnel
// const Motif = db.motif

// create
const addPersonnel = async (req, res)=>{
    let info = {
        identite: req.body.identite,
        numero: req.body.numero,
    }
    const personnel = await Personnel.create(info)
    res.status(200).send(personnel)

}

const getDataPersonnel = async (req, res)=>{
    const data = await Personnel.findAll({})
    res.status(200).send(data)
}

const getDataVenteAll = async (req, res)=>{
    const data = await Vente.findAll({})
    res.status(200).send(data)
}

const addVente = async (req, res)=>{
    let info = {
        nombre: req.body.nombre,
        montant: req.body.montant,
        vendu: 0,
        manquant: 0,
        personnel_id: req.body.personnel_id

    }
    const vente = await Vente.create(info)
    res.status(200).send(vente)
}

const getDataVente = async (req, res)=>{
    let id = req.params.id 
    const data = await Vente.findAll({
        where: { personnel_id: id }
    })
    res.status(200).send(data)
}

const updateVente = async (req, res)=>{
    let id = req.params.id
    const vente = await Vente.update(req.body, { where: { id: id } })
    res.status(200).send(vente)
}



// getall

module.exports = {
    addPersonnel,
    getDataPersonnel,
    addVente,
    getDataVente,
    updateVente,
    getDataVenteAll
}