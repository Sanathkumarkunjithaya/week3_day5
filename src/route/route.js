const express = require('express')
const mongoose=require('mangoose')
const{createStudent}=require('../controller/studentControl')
const router=express.Router()
//router method
router.get('/',(req,res)=>{
   res.send("Router Method !!")
})
//routes for student
router.post('/create',createStudent)
module.exports=router;