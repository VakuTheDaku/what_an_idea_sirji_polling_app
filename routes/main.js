const express=require('express')
const router=express.Router()
const controller=require('../controllers/mainpages')
router.get('/',controller.mainpage)
router.get('/register',(req,res,next)=>{
    if(req.session.name==='ISTE'){
    res.render('register')
    }
    else{
        res.send('<h1>404</h1><br><h4>PAGE NOT FOUND</h4>')
    }
})
router.post('/store',controller.store)
router.get('/loginpage',(req,res,next)=>{
    
   
    const isLoggedIn= req.session.isLoggedIn===true
    if(isLoggedIn===true){
        res.redirect('/')
    }
    else{
    res.render('login',{pagetitle: 'Login',isAuthenticated: isLoggedIn, passnomatch: false})
    }
})
router.post('/login',controller.logincontro)
router.get('/logout',(req,res,next)=>{
    req.session.destroy((err)=>{
        res.redirect('/')
        
    })
    
})
router.post('/vote1',(req,res,next)=>{res.redirect('/')})
router.post('/vote2',(req,res,next)=>{res.redirect('/')})
router.post('/vote3',(req,res,next)=>{res.redirect('/')})
router.post('/vote4',(req,res,next)=>{res.redirect('/')})
router.post('/vote5',(req,res,next)=>{res.redirect('/')})
module.exports=router
