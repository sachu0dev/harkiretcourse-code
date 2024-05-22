import { useEffect, useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos();
  }, []);
  async function getTodos() {
    const res = await fetch("http://localhost:1234/todos");
    const json = await res.json();
    setTodos(json.todos);
  }
  return (
    <>
      <CreateTodo setTodos={setTodos} todos={todos} />
      <Todos setTodos={setTodos} todos={todos} />
    </>
  );
}

export default App;
