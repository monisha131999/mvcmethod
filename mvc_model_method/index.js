const express= require('express');
const app=express();
require('dotenv').config();
const mongoose =require('mongoose');
const router=require('./router');


mongoose.connect(process.env.DBURL)
.then(()=>{
    console.log("db connected");
}).catch(()=>{
    console.log("db not connected ");
})
app.use(express.json())
app.use('/api',router)

app.listen(process.env.PORT,()=>{
console.log("server is running",process.env.PORT);
})








app.listen(()=>{
    console.log('server is running');
})










