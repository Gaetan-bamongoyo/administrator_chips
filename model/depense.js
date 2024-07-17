module.exports = (sequelize, DataTypes)=>{
    const Depense = sequelize.define("depense",{
        montant: {
            type: DataTypes.FLOAT
        }
    })

    return Depense
}