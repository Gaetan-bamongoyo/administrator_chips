const db = require('../sequelize/connector')

const Production = db.production
const Session = db.session

const addProduction = async (req, res)=>{
    let info = {
        nombre: req.body.nombre,
        session_id: req.body.session_id
    }
    const production = await Production.create(info)
    res.status(200).send(production)
}

const getProductionSession = async(req, res)=>{
    let id = req.params.id 
    const data = await Production.findAll({
        where: { session_id : id },
        include: [{
            model: Session,
            as: 'session'
        }]
    })
    res.status(200).send(data)
}

module.exports = {
    addProduction,
    getProductionSession
}