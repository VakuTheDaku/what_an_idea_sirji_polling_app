const express=require('express')
const app=express()
const session =require('express-session')
var MySQLStore = require('express-mysql-session')(session);
const path = require('path')
const dotenv= require('dotenv')
dotenv.config()

const publicdrc = path.join(__dirname,'./public')
app.use(express.static(publicdrc))
var options = {
	host: process.env.HOST,
	// port: process.env.PORT,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
    
};

var sessionStore = new MySQLStore(options);
app.use(session({
    secret: process.env.SECRET, resave: false, saveUninitialized: false,store: sessionStore,cookie:{
		maxAge:3600000
	}
}))

const bodyParser=require('body-parser')
const routes=require('./routes/main')
const sequelize= require('./util/database')
app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', 'ejs')
app.use(routes)

sequelize.sync().then(result=>{
    // console.log('server started on port: '+process.env.PORT)
    app.listen( process.env.PORT ||3000)
}).catch(err=>{
    console.log(err)
})