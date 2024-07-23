module.exports = (sequelize, DataTypes)=>{
    const Users = sequelize.define("users",{
        nom: {
            type: DataTypes.STRING
        },
        issuperuser: {
            type: DataTypes.INTEGER
        },
        numero: {
            type: DataTypes.INTEGER
        },
    })

    return Users
}