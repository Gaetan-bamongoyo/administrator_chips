module.exports = (sequelize, DataTypes)=>{
    const Motif = sequelize.define("motif",{
        designation: {
            type: DataTypes.STRING
        }
    })

    return Motif
}