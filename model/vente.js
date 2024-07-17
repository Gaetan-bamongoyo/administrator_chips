module.exports = (sequelize, DataTypes)=>{
    const Vente = sequelize.define("vente",{
        nombre: {
            type: DataTypes.INTEGER
        },
        montant: {
            type: DataTypes.FLOAT
        },
        vendu: {
            type: DataTypes.INTEGER
        },
        manquant: {
            type: DataTypes.FLOAT
        }
    })
    return Vente
}