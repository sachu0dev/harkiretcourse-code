const { createTodo, updateTodo } = require("./types.js");
const express = require("express");
const app = express();
const port = 1234;
require('dotenv').config();
const mongodbUri = process.env.MONGODB_URI;
const mongoose = require("mongoose");
const {todo} = require("./db.js")


mongoose.connect(mongodbUri, {
}).then(() => {
    console.log("MongoDB Connected");
}).catch(err => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
});



app.use(express.json());
const todoList = [];

app.post("/todo", (req, res)=>{
  const data = req.body;
  const checkTodo = createTodo.safeParse(data);
  if(!checkTodo.success){
    res.send("wrong input todo not created")
    return
  }
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
  
  if (checkId.success) {
    let todoUpdated = false;
    
    todoList.forEach((todo) => {
      if (todo.id == data) {
        todo.isCompleted = !todo.isCompleted;
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