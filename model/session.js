module.exports = (sequelize, DataTypes)=>{
    const Session = sequelize.define("session",{
        designation: {
            type: DataTypes.STRING
        }
    })

    return Session
}