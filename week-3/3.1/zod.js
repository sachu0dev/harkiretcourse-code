const express = require('express')
const app = express()
const z = require('zod')

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  country: z.literal("IN").or(z.literal("US")),
})
app.use(express.json())

app.post("/", (req, res)=>{
  const inputs = req.body;
  const response = schema.safeParse(inputs);
  if(!response.success){
    return res.status(411).json({
      msg: "wrong input recived"
    })
  }
  res.json({
    msg: "auth successful"
  })
})


app.use((err,req,res,next)=>{
  console.log(err)
  res.status(500).send("something went wrong at server side");
})
app.listen(3000)