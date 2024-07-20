module.exports = (sequelize, DataTypes)=>{
    const Vente = sequelize.define("vente",{
        nombre: {
            type: DataTypes.INTEGER
        },
        montant: {
            type: DataTypes.INTEGER
        },
        vendu: {
            type: DataTypes.INTEGER
        },
        manquant: {
            type: DataTypes.INTEGER
        }
    })
    return Vente
}