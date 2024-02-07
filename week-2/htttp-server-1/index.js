const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000


app.use(bodyParser.json());
app.post('/', (req, res) => {
  res.send(`geting from post request: ${req.body.message}`);
})
app.get('/news', (req, res)=>{
  let a = 10;
  res.send('this is news')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})