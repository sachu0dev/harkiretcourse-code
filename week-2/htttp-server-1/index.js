const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>hello this cool as fuck</h1>')
})
app.get('/news', (req, res)=>{
  let a = 120;
  res.send(`<h1>news is that value of is ${a}</h1>`)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})