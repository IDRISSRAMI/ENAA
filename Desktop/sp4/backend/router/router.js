const express =require("express")
const model = require('../model/model');
const router =express.Router()
router.get("/",(req,res)=>{
res.send("Server is runing ");
})
router.post('/',async (req,res)=>{
    
    const{nom,description,status}=req.body;
let new_Tasks = new model({
    nom:req.body.nom,
    email:req.body.email,
    phone:req.body.phone,
    message:req.body.message
}).then(()=>{
    console.log("data insertion ")
}).catch(()=>{
    console.log("is not connect")
})
await new_Tasks.save()
})
module.exports = router