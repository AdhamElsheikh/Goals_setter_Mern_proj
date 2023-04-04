const asyncHandler = require("express-async-handler")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


const User = require('../model/user')
const{protect}= require('../middleware/authmiddleware')

const loginUser  = asyncHandler(async(req,res)=>{
    const{email,password} = req.body
    const user = await User.findOne({email:email})
    const passwordMatch = await bcrypt.compare(password, user.password);
    if(user && passwordMatch){
        res.json({
            _id:user.id,
            email:user.email,
            password:user.password,
            token: token(user._id),
        })
    }
    else{
        res.status(400)
        throw new Error ("wrong email or password")
    }
  
    

})

const token = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'3d',
    })
}






const registerUser = asyncHandler(async(req,res)=>{
    if(!req.body.name || !req.body.email || !req.body.password){
        res.status(400)
        throw new Error('please add a missing field')
    }

    const userExist = await User.findOne({ email: req.body.email });
    if(userExist){
        res.status(400)
        throw new Error ('user already exist')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedpassword = await bcrypt.hash(req.body.password,salt)

    const user = await User.create({
        name:req.body.name,
        email:req.body.email,
        password:hashedpassword,
        
    })
    if(user){
        res.json({
            _id:user.id,
            email:user.email,
            password:user.password,
            token: token(user._id),
        })
    }
    else{
        res.status(400)
        throw new Error('please enter valid data')
    }
    
})


const display  = asyncHandler(async(req,res)=>{
    const{id,email,name} = await User.findById(req.user.id)
    res.status(201).json({
        id : id,
        email:email,
        name : name
    })
   
    

})






module.exports = {
    registerUser,display,loginUser
}