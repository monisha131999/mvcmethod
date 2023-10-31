const mongoose=require('mongoose')
const dataschema =new mongoose.Schema({
        Firstname:{
            type:String,
            required:true,
            uppercase:true
        },
        Lastname:{
            type:String,
            required:true,
            uppercase:true,
        },
        Email:{
            type:String,
            required:true,
        },
        phonenumber:{
            type:Number,
            required:true,
        },
        Password:{
            type:String,
        }
})
module.exports =mongoose.model('collection of MVC',dataschema)