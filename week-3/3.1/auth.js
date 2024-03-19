const express = require('express')
const app = express()
const z = require('zod')
app.use(express.json())



app.use((err,req,res,next)=>{
  console.log(err)
  res.status(500).send("something went wrong at server side");
})
app.listen(3000)