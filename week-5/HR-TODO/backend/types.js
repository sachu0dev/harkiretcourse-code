const zod = require("zod");
// {
//   "title": "go gym",
//   "description": "go to running also"
// }
const createTodo = zod.object({
  title: zod.string(),
  description: zod.string()
})
const updateTodo = zod.string();


module.exports = {
  createTodo: createTodo,
  updateTodo: updateTodo
}