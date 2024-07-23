const db = require('../sequelize/connector')

const Users = db.user

const addUsers = async (req, res)=>{
    const { numero } = req.body;
    const check = await Users.findOne({where: {numero}});
    let info = {
        numero: req.body.numero,
        nom: req.body.nom,
        issuperuser: req.body.issuperuser
    }
    if(check){
        res.status(401).send("le numero existe deja")
    }else{
        const user = await Users.create(info)
        res.status(200).send(user)
    }
}

const verifyUser = async (req, res)=>{
    const { numero } = req.body;
    if (!numero){
        return res.status(400)
    }else{
        try{
            const user = await Users.findOne({where: {numero}});
            if(user){
                res.status(200).send(user)
            }else{
                res.status(401).send([])
            }
        }catch(error){
            res.send(500)
        }
    }
}

module.exports = {
    addUsers,
    verifyUser
}