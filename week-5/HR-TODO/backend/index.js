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

app.post("/todo", async (req, res)=>{
  const data = req.body;
  const checkTodo = createTodo.safeParse(data);
  if(!checkTodo.success){
    res.send("wrong input todo not created")
    return
  }
    await todo.create({
      title: data.title,
      description: data.description,
      completed: false
    })
    res.json({
      msg: "Todo Created"
    })
})



app.get("/todos", async (req, res)=>{
 const todos = await todo.find({});
 res.json(todos)
});



app.post("/completed", async (req, res) => {
  const data = req.body.id;
  const checkId = updateTodo.safeParse(data);
  
  if (checkId.success) {
    try {
      const todoItem = await todo.findById(data);
      if (todoItem) {
        todoItem.completed = !todoItem.completed; // Toggle completion status
        await todoItem.save();
        res.send("Todo updated");
      } else {
        res.status(404).json({ msg: "No todo found" });
      }
    } catch (error) {
      console.error("Error updating todo:", error);
      res.status(500).send("Internal Server Error");
    }
  } else {
    res.status(400).send("Wrong input");
  }
});



app.listen(port);