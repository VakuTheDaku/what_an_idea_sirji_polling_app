const mysql=require('mysql2')

const Sequelize = require('sequelize')
const Team= require('../models/model.js')
const sequelize = new Sequelize('teams', 'root', '', {
    host: "127.0.0.1",
    dialect : 'mysql',
    port: '8111',
    
  });
  Team.sync();  
  
module.exports = sequelize