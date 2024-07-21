module.exports = (sequelize, DataTypes)=>{
    const Production = sequelize.define("production",{
        nombre: {
            type: DataTypes.INTEGER
        }
    })
    return Production
}