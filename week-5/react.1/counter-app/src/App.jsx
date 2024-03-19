import { useState } from "react";
function App() {
  const [todos, setTodos]= useState([
    {title: "Go to Gym",
    description: "Go to Gym at 3am",
    completes: true
    },
    {title: "Go to Gym",
    description: "Go to Gym at 3am",
    completes: true
    },
  ])
  function addtodo(){
    setTodos([...todos,{
      title:"new todo",
      description: "new description"
  }])
}
  return (
    <div>
      <button onClick={addtodo}>add a todo</button>
      {todos.map((todo)=>{
        return <Todo title={todo.title} description={todo.description} />
      })}
    </div>
  )
}


function Todo(todo){
  return <div>
    <h1>{todo.title}</h1>
    <h2>{todo.description}</h2>
  </div>
}


export default App