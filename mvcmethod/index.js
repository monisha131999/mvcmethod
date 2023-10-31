const express=require('express');
const app =express();
const path=require('path');
const bcrypt=require('bcrypt');
const mongoose =require('mongoose');
const cors=require('cors');
var jwt = require('jsonwebtoken');
require('dotenv').config();
const router=require('./router');

//mongoose connection
mongoose.connect(process.env.DBURL)//mongodb://127.0.0.1:27017/mvc
.then(()=>{
    console.log("DB connected successfully");
}).catch(()=>{
    console.log("DB not successfully");
})

//middle ware
app.use(express.json())
app.use('/api',router)
app.use(express.urlencoded({extended:false}))
app.use(cors())

//server connected

app.listen(process.env.PORT,()=>{
    console.log("server is running",process.env.PORT);
})