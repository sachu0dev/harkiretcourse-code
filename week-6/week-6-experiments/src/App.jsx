import { useState } from "react";
var tempId = 4;
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "go to gym",
      description: "this is description",
    },
    {
      id: 2,
      title: "go to gym",
      description: "this is description",
    },
    {
      id: 3,
      title: "go to gym",
      description: "this is description",
    },
  ]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  function addTodo() {
    const newTodos = [
      ...todos,
      {
        id: tempId,
        title,
        description,
      },
    ];
    setTodos(newTodos);
    tempId = tempId + 1;
  }
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => {
            const value = e.target.value;
            setTitle(value);
          }}
        />
        <input
          type="text"
          placeholder="title"
          onChange={(e) => {
            const value = e.target.value;
            setDescription(value);
          }}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h3>{todo.title}</h3>
            <h3>{todo.description}</h3>
            <p>{todo.id}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
