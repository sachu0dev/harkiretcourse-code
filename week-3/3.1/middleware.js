const express = require('express');
const app = express();

app.get('/health-checkup',(req, res)=>{
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;
  if(username !== "admin" || password !== "admin123"){
    return res.status(400).json({msg:'auth fail'});
    
  } 

if(kidneyId != 1 && kidneyId != 2){
    return res.status(401).json({msg:'something up with your kidneys'});
  }
  res.json({
    msg: "your kidenys are healthy"
  })
})
app.listen(3000);
// dumb way of writng user validation
// violates dry rule 
// have to write logic in every route