// const express=require('express')
// var http=require('http')
// const app=express()
// // app.get('/',function (req,res){
// //     res.send('Hello World')
// // })
// http.createServer(function(req,res){
//     res.end("Hello World")
// }).listen(3000)
// console.log("Server is running")
const express=require('express')
const app= express()
const mongoose = require('mongoose')
const route=require('./src/route/route')
app.use(express.json());
const PORT = 8080
mongoose.connect('mongodb+srv://kunjithayas01:sanathkk123@cluster0.8bpqhvf.mongodb.net/mydatabase')
.then(()=>{console.log("Database Connected")})
.catch((error)=>{console.log(error)})
app.use('/',route);
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})