const express = require('express')
const app = express()
const z = require('zod')
// const schema = z.array(z.number());

const schema = z.object({
  email: z.string(),
  password: z.string(),
  country: z.literal("IN").or(z.literal("US")),
  kidneys: z.array(z.number())
})
app.use(express.json())

app.post("/", (req, res)=>{
  const inputs = {
    email: req.body.email,
    password: req.body.password,
    country: req.body.country,
    kidneys: req.body.kidneys
  }
  const response = schema.safeParse(inputs);
  if(!response.success){
    return res.status(411).json({
      msg: "wrong input recived"
    })
  }
  res.json(inputs)
  // const kidneyLength = kidneys.length;
  // if(kidneyLength > 2){
  //   return res.status(400).json({msg:'too many kidneys'});
  // }
  // res.json({
  //   msg: "you have " + kidneyLength + " kidneys",
  // })
})


app.use((err,req,res,next)=>{
  console.log(err)
  res.status(500).send("something went wrong at server side");
})
app.listen(3000)