import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "go to gym",
      description: "this is description",
    },
    {
      title: "go to gym",
      description: "this is description",
    },
    {
      title: "go to gym",
      description: "this is description",
    },
  ]);
  return (
    <>
      <Input />
      <button>Add Todo</button>
      {todos.map((todo) => {
        return (
          <div>
            <h3>{todo.title}</h3>
            <h3>{todo.description}</h3>
          </div>
        );
      })}
    </>
  );
}

const Todo = ({ title, description }) => {
  return (
    <div>
      <h3>{title}</h3>
      <h3>{description}</h3>
    </div>
  );
};
const Input = () => {
  return (
    <div>
      <input type="text" placeholder="title" />
      <input type="text" placeholder="title" />
    </div>
  );
};

export default App;
