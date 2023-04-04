const asyncHandler = require("express-async-handler")

const Goal = require('../model/goal')
const User = require("../model/user")


const getGoals = asyncHandler(async(req,res)=>{
    const goals = await Goal.find({user:req.user.id})
    res.json({goals})
})


const setGoals = asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }

    const goal = await Goal.create({
        text:req.body.text,
        user:req.user.id
    })
    res.json({goal})
})


const putGoals = asyncHandler(async(req,res)=>{
    const goal = await Goal.findById(req.params.id)
    const user = await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error("user not found")
    }

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    if(goal.user.toString()!= user.id.toString()){
        res.status(401)
        throw new Error("User not authorized")
    }
    const updatedgoal = await Goal.findByIdAndUpdate(req.params.id,
         { text: req.body.text },
          { new: true });
    res.json(updatedgoal)
})


const deleteGoals = asyncHandler(async(req,res)=>{
    

    const goal = await Goal.findById(req.params.id)
    const user = await User.findById(req.user.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    
    if(!user){
        res.status(401)
        throw new Error("user not found")
    }

    console.log(goal.user.id.toString())
    console.log(user.id.toString())
    if(goal.user.toString()!= user.id.toString()){
        res.status(401)
        throw new Error("User not authorized")
    }
    const deletedgoal = await Goal.findByIdAndDelete(req.params.id)
         
    res.json(deletedgoal)
})






module.exports = {
    getGoals,setGoals,putGoals,deleteGoals
}