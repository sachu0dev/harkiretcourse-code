const express = require('express')
const app = express()
app.use(express.json())

app.post("/", (req, res)=>{
  const kidneys = req.body.kidneys;
  if(!kidneys){
    return res.status(400).json({msg:'wrong input recived'});
  }
  const kidneyLength = kidneys.length;
  if(kidneyLength > 2){
    return res.status(400).json({msg:'too many kidneys'});
  }
  res.json({
    msg: "you have " + kidneyLength + " kidneys",
  })
})
// ugly way of doing input validation
app.use((err,req,res,next)=>{
  res.status(500).send("something went wrong at server side");
})
app.listen(3000)