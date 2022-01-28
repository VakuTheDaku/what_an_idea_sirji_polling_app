const express=require('express')
const app=express()
const session =require('express-session')
var MySQLStore = require('express-mysql-session')(session);
const path = require('path')


const publicdrc = path.join(__dirname,'./public')
app.use(express.static(publicdrc))
var options = {
	host: 'localhost',
	port: 8111,
	user: 'root',
	password: '',
	database: 'teams',
    
};

var sessionStore = new MySQLStore(options);
app.use(session({
    secret: 'Hey i am vaku the daku', resave: false, saveUninitialized: false,store: sessionStore
}))

const bodyParser=require('body-parser')
const routes=require('./routes/main')
const sequelize= require('./util/database')
app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', 'ejs')
app.use(routes)

sequelize.sync().then(result=>{
    
    app.listen(3000)
}).catch(err=>{
    console.log(err)
})