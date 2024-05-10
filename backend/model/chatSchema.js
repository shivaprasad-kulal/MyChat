const mongoose=require('mongoose')
const userSchema = require('./userSchema')
const chatSchema=mongoose.Schema
({
   chatname:{
    type:String,
    trim:true
   },
   isgroupchat:
   {
    type:Boolean,
    default:false
   },
   users:
   {
    type:mongoose.Schema.Types.ObjectId,
    ref:userSchema
   },
   admin:
   {
    type:mongoose.Schema.Types.ObjectId,
    ref:userSchema
   },
   lastmessage:
   {
    type:mongoose.Schema.Types.ObjectId,
    ref:messageSchema
   }
},
   {
    timestamps:true
   }

)