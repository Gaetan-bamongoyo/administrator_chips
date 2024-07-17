const db = require('../sequelize/connector')

const Session = db.session
const Depense = db.depense
const Motif = db.motif

// create
const addSession = async (req, res)=>{
    const { designation } = req.body;
    const check = await Session.findOne({where: {designation}});
    let info = {
        designation: req.body.designation,
    }

    if(check){
        res.status(401).send("la session existe deja")
    }else{
        const session = await Session.create(info)
        res.status(200).send(session)
    }
}

const getData = async (req, res)=>{
    const data = await Session.findAll({})
    res.status(200).send(data)
}

const getSessionAll = async (req, res)=>{
    const data = await Session.findAll({
        include: [{
            model: Depense,
            as: 'depenses',
            include: [{
                model: Motif,
                as: 'motif'
            }]
        }]
    })
    res.status(200).send(data)
}



// getall

module.exports = {
    addSession,
    getData,
    getSessionAll
}