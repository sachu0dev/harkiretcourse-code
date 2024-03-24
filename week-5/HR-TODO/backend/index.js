const { createTodo, updateTodo } = require("./types.js");
require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = 1234;
const mongodbUri = process.env.MONGODB_URI;
const mongoose = require("mongoose");


mongoose.connect(mongodbUri, {
}).then(() => {
    console.log("MongoDB Connected");
}).catch(err => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
});



app.use(express.json());
const todoList = [];
let tempId = 0;

app.post("/todo", (req, res)=>{
  const data = req.body;
  const checkTodo = createTodo.safeParse(data);
  if(!checkTodo.success){
    res.send("wrong input todo not created")
    return
  }
    console.log("todo is vailed");
    todoList.push({
      id: tempId,
      title: data.title,
      description: data.description,
      isCompleted: false
    })
    tempId = tempId + 1;
    res.send("new todo created");
})



app.get("/todos", (req, res)=>{
    res.json(todoList)
});



app.post("/completed", (req, res) => {
  const data = req.body.id;
  const checkId = updateTodo.safeParse(data);
  console.log(checkId);
  
  if (checkId.success) {
    let todoUpdated = false;
    
    todoList.forEach((todo) => {
      if (todo.id == data) {
        todo.isCompleted = !todo.isCompleted;
        console.log("inside for loop");
        todoUpdated = true; 
      }
    });

    if (todoUpdated) {
      res.send("todo updated");
    } else {
      res.send("todo not found");
    }
  } else {
    res.send("wrong input");
  }
});



app.listen(port);