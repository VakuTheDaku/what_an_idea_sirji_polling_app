const dotenv= require('dotenv')
dotenv.config()


const Sequelize =  require('sequelize')
const sequelize = new Sequelize( process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect : 'mysql',
    // port: '8111',
    
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