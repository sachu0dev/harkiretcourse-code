const mongoose = require("mongoose");
require('dotenv').config();



const TodoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
})
 const todo = mongoose.model("todos", TodoSchema);

module.exports  = {
  todo
} 