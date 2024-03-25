const Todos = ({ todos }) => {
  return (
    <div className="overflow-scroll">
      {todos.map((todo) => {
        return (
          <div key={todo._id} className="flex flex-col">
            <h1 className="text-4xl font-bold">{todo.title}</h1>
            <h2 className="text-2xl ">{todo.description}</h2>
            <button
              className="px-4 py-2 bg-black rounded-lg text-2xl text-white "
              onClick={() => {
                fetch("http://localhost:1234/completed", {
                  method: "POST",
                  body: JSON.stringify({
                    id: todo._id,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }).then(async (res) => {
                  const json = await res.json();
                });
              }}
            >
              {todo.completed == true ? "Done!" : "Mark as complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
