const express = require("express");
const cors = require("cors");
const port = 1234;
const app = express();
const data = require("./data.js");
app.use(express.json())
app.use(cors())

let todos =[];
function genTodos(req, res, next){
  todos= [];
  const b = Math.round(Math.random() * 5) ;
  for(let i = 0; i < b; i++){
  const a = Math.round(Math.random() * 19) ;
  console.log(a);
    todos.push(data[a]);
  }
  next();
}

app.get("/todos",genTodos, (req, res)=>{
  res.json({
    todos,
  })
})


app.listen(port)