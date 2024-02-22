const express = require('express');
const app = express();
let numberOfRequests = 0;
app.use(express.json()); 

function calculateRequests(req, res, next){
  numberOfRequests++;
  console.log(numberOfRequests);
  if(numberOfRequests <= 10){
    next();
    return;
  }
  res.send("request limit exceeded");
  console.log("request limit exceeded");
}
app.use(calculateRequests);
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
app.post('/health-checkup',userMiddleware,kidenyMiddleWare,(req, res)=>{
  res.json({
    // intentional error
    msg: "hello world"
  })
})
app.use((err, req, res , next)=>{
  res.status(500).send("something went wrong at server side");
})

app.listen(3000);