import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "go to gym",
      description: "go to gym at 4pm",
      completed: false,
    },
    {
      title: "go to gym",
      description: "go to gym at 4pm",
      completed: false,
    },
  ]);
  function addTodo() {
    setTodos([
      ...todos,
      {
        title: "new todo",
        description: "desc to new todo",
      },
    ]);
  }
  return (
    <>
      <button onClick={addTodo}>add random Todo</button>

      {todos.map((todo, index) => {
        return (
          <div>
            <Todo
              key={index}
              title={todo.title}
              description={todo.description}
            />
          </div>
        );
      })}
    </>
  );
}

const Todo = (prop) => {
  return (
    <div>
      <h1>{prop.title}</h1>
      <h2>{prop.description}</h2>
    </div>
  );
};

export default App;
