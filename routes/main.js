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
router.get('/login',(req,res,next)=>{
    const isLoggedIn= req.session.isLoggedIn===true
    res.render('login',{pagetitle: 'Login', name: 'loginpage', isAuthenticated: isLoggedIn, passnomatch: false})
})
router.post('/loginstore',controller.logincontro)
router.get('/logout',(req,res,next)=>{
    req.session.destroy((err)=>{
        res.redirect('/')
        console.log(err)
    })
    
})
router.post('/vote1',controller.vote1)
router.post('/vote2',controller.vote2)
router.post('/vote3',controller.vote3)
router.post('/vote4',controller.vote4)
module.exports=router
