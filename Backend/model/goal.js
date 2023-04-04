const mongoose = require('mongoose')
const User = require('./user')
const goalSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true,'please enter text'],
    },    
    
    text:{
    type:String,
    required:true,
    ref:User
    }},
    {
        timestamps:true,
    }
    )

    module.exports = mongoose.model('Goal',goalSchema)