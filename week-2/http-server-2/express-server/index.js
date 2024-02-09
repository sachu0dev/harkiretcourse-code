const express = require('express');
const app = express();

function sum(n){
  let ans = 0;
  for (let i = 1; i<=n; i++){
    ans = ans + i;
  }
  return ans;
}
app.get('/', (req, res)=>{
  const n = req.query.n;
  const ans = sum(n);
  res.send(`The sum of 1 to ${n} is ${ans}`);
})


app.listen(3001);