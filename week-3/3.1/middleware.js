const express = require('express');
const app = express();
let numberOfRequests = 0;

function calculateRequests(req, res, next){
  numberOfRequests++;
  console.log(numberOfRequests);
  if(numberOfRequests <= 3){
    next();
    return;
  }
  res.send("request limit exceeded");
}
function userMiddleware(req, res, next){
  const username = req.headers.username;
  const password = req.headers.password;
  if(username !== "admin" || password !== "admin123"){
    return res.status(400).json({msg:'auth fail'});
  } else {
    next();
  }
}
function kidenyMiddleWare(req,res,next){
  const kidneyId = req.query.kidneyId;
if(kidneyId != 1 && kidneyId != 2){
    return res.status(401).json({msg:'somethings up with your kidneys'});
  } else {
    next();
  }
}

app.get('/health-checkup',calculateRequests,userMiddleware,kidenyMiddleWare,(req, res)=>{
  res.json({
    msg: "your kidenys are healthy"
  })
})


app.listen(3000);