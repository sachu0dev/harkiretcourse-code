const mongoose = require(mongoose);
require('dotenv').config();
const mongodbUri = process.env.MONGODB_URI;


mongoose.connect(mongodbUri, {
}).then(() => {
    console.log("MongoDB Connected");
}).catch(err => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
});


const TodoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
})
 const todo = mongoose.model("todos", TodoSchema);
 
module.exports  = {
  todo
} 