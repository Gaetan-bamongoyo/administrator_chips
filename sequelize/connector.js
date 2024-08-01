const dbConfig = require('../config/db.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB, 
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        dialect: dbConfig.dialect,

        // pool: {
        //     max: dbConfig.pool.max,
        //     min: dbConfig.pool.min,
        //     acquire: dbConfig.pool.acquire,
        //     idle: dbConfig.pool.idle
        // }
    }
)

sequelize.authenticate()
.then(()=>{
    console.log('connected...')
})
.catch(err =>{
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.session = require('../model/session.js')(sequelize, DataTypes)
db.motif = require('../model/motifdepense.js')(sequelize, DataTypes)
db.depense = require('../model/depense.js')(sequelize, DataTypes)
db.personnel = require('../model/personnel.js')(sequelize, DataTypes)
db.vente = require('../model/vente.js')(sequelize, DataTypes)
db.production = require('../model/production.js')(sequelize, DataTypes)
db.user = require('../model/user.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(()=>{
    console.log('yes re-sync done...')
})

// session to depense
db.session.hasMany(db.depense, {
    foreignKey: 'session_id',
    as: 'depenses'
})
db.depense.belongsTo(db.session, {
    foreignKey: 'session_id',
    as: 'session'
})
// depense to motif
db.motif.hasMany(db.depense, {
    foreignKey: 'motif_id',
    as: 'motifs'
})
db.depense.belongsTo(db.motif, {
    foreignKey: 'motif_id',
    as: 'motif'
})
db.personnel.hasMany(db.vente, {
    foreignKey: 'personnel_id',
    as: 'personnel'
})
db.vente.belongsTo(db.personnel, {
    foreignKey: 'personnel_id',
    as: 'vente'
})

db.session.hasMany(db.production, {
    foreignKey: 'session_id',
    as: 'production'
})
db.production.belongsTo(db.session, {
    foreignKey: 'session_id',
    as: 'session'
})

module.exports = db