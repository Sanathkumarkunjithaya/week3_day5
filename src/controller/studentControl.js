const express=require('express')
const mongoose = require('mongoose')
const studentModel=require('../models/studentModel');
const createStudent=async function(req,res){
    let student=req.body;
    let{fname,lname,email,password,address}=student;

    if (!fname || !lname || !email || !password || !address){
        return res.send({message:'Please Provide all the Information !'})
    }
    let createStu=await studentModel.create(student)
    res.send({message:createStu})
}
module.exports.createStudent=createStudent;