module.exports = (sequelize, DataTypes)=>{
    const Personnel = sequelize.define("personnel",{
        identite: {
            type: DataTypes.STRING
        },
        numero: {
            type: DataTypes.INTEGER
        }
    })

    return Personnel
}