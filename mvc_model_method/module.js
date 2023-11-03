const mongoose=require('mongoose')
const dataschema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
module.exports=mongoose.model("user",dataschema)