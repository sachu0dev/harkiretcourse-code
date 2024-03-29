import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(async () => {
      const res = await fetch("http://localhost:1234/todos");
      const data = await res.json();
      setTodos(data.todos);
    }, 2000);
  }, []);

  return (
    <>
      <div>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              title={todo.title}
              description={todo.description}
            />
          );
        })}
      </div>
    </>
  );
}

const Todo = ({ title, description }) => {
  return (
    <div>
      <h1 className="text-2xl text-red-600 font-bold">{title}</h1>
      <h1 className="text-xl  font-bold">{description}</h1>
    </div>
  );
};

export default App;
