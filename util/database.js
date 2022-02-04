const mysql=require('mysql2')
const dotenv= require('dotenv')
dotenv.config(
  
)
const Sequelize = require('sequelize')
const Team= require('../models/model.js')

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect : 'mysql',
    // port: process.env.PORT,
    
  });
  Team.sync();  
  
module.exports = sequelize