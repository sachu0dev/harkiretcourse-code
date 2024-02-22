const express = require('express')
const app = express()
let startTime = 0;
let endTime = 0;
function setTime(req,res,next){
  startTime = Date.now();
  next();
}
function endTimeSet(req,res){
  endTime = Date.now();
  console.log(endTime - startTime + "ms");
}
let a= 0;
app.use(express.json())
function calculateSomething(req, res, next){
  for(let i = 0; i < 1000000; i++){
    a = a + i;
  }
  next();
}
app.get("/",setTime,calculateSomething,(req,res,next)=>{
  res.json({
    msg: "hello world"
  })
  next();
},endTimeSet)
app.get("/ping",setTime,(req,res,next)=>{
  res.json({
    msg: "hello world"
  })
  next();
},endTimeSet)
app.listen(3000)