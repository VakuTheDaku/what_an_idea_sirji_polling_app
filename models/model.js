const Sequelize =  require('sequelize')
const sequelize = new Sequelize('teams', 'root', '', {
    host: "127.0.0.1",
    dialect : 'mysql',
    port: '8111',
    
  });
const Team = sequelize.define('Team', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    votebalance:{
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    votes:{
        type: Sequelize.INTEGER,
        allowNull: true,
    }
})
module.exports= Team