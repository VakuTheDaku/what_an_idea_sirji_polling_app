const bcrypt=require('bcryptjs')
const { redirect } = require('express/lib/response')
var Team=require('../models/model')
exports.mainpage=(req,res,next)=>{
    const isLoggedIn= req.session.isLoggedIn===true
 
    if(isLoggedIn){
        const name= req.session.name
        Team.findAll({where: {name: 'Idea1'}}).then((team)=>{
            vote1=team[0].votes
            
        }).catch((err)=>console.log(err))
        Team.findAll({where: {name: 'Idea2'}}).then((team)=>{
            
            vote2=team[0].votes
            
            }).catch((err)=>console.log(err))
            Team.findAll({where: {name: 'Idea3'}}).then((team)=>{
                    
                vote3=team[0].votes
                
        }).catch((err)=>console.log(err))
        Team.findAll({where: {name: 'Idea4'}}).then((team)=>{
                    
            vote4=team[0].votes
            
        }).catch((err)=>console.log(err))
        Team.findAll({where: {name: 'Idea5'}}).then((team)=>{
                    
            vote5=team[0].votes
            
        }).catch((err)=>console.log(err))
        const list=[vote1,vote2,vote3,vote4,vote5]
        console.log(list)
        res.render('homepage',{pagetitle: 'Homepage',Teamname:  req.session.name,isAuthenticated: isLoggedIn,votesbalance:0, list: list})
    }
    else{
        res.render('homenew',{pagetitle: 'Homepage',isAuthenticated: isLoggedIn})
    }
    }




exports.store=async (req,res,next)=>{
    
    const {username, password, votebalance, votes}= req.body
    let hashpass=await bcrypt.hash(password, 8)
    
    Team.create({
        name: username,
        
        password: hashpass,
        votebalance: votebalance,
        votes: votes
    }).then().catch(err=>{
        console.log(err)
    })
    res.redirect('/')
}
exports.logincontro=(req,res,next)=>{
    const isLoggedIn= req.session.isLoggedIn===true
    passnomatch=false
    username=req.body.name
    password=req.body.password
    if(isLoggedIn===true){
        res.redirect('/')
    }
    else{
    Team.findAll({where: {name: username}}).then(async (team)=>{
        
        if(team[0]!=null){
        bcrypt.compare(password, team[0].password).then((result)=>{
            
            if(result) {
                req.session.isLoggedIn=true
                req.session.name=team[0].name
                req.session.votebalance= team[0].votebalance
                
                return res.redirect('/')
            }
            else{
                const isLoggedIn= req.session.isLoggedIn===true
                passnomatch=true
                res.render('login',{pagetitle: 'Login', name: 'loginpage', isAuthenticated: isLoggedIn, passnomatch: passnomatch})
            }
        })
        }
        else{
            passnomatch=true
            const isLoggedIn= req.session.isLoggedIn===true
            res.render('login',{pagetitle: 'Login', name: 'loginpage', isAuthenticated: isLoggedIn, passnomatch: passnomatch})
        }
    
   
    
    
    
    }).catch((err)=>console.log(err))}
}
    
    
       
    

