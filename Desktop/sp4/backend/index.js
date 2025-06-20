const express = require('express');
const app=express()
const mongoose=require("mongoose")
const router=require('./router/router')
const mongo="mongodb://127.0.0.1:27017/contact "
mongoose.connect(mongo).then(()=>{
    console.log("data is connected ")
}).catch(()=>{
    console.log("data is not connected ")
})
app.use('/api',router);
app.listen(3000,()=>{
    console.log("server driss khadam ")
})