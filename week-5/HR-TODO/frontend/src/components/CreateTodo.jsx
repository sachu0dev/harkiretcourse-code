import { useState } from "react";

const CreateTodo = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  function handelAdd() {
    fetch("http://localhost:1234/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      const json = await res.json();
    });
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <input
        className=" p-4 text-lg text-black m-4 rounded-md border border-gray border-solid"
        type="text"
        placeholder="Title"
        onChange={(e) => {
          const value = e.target.value;
          setTitle(value);
        }}
      />
      <input
        className=" p-4 text-lg text-black m-4 rounded-md border border-gray border-solid"
        type="text"
        placeholder="description"
        onChange={(e) => {
          const value = e.target.value;
          setDescription(value);
        }}
      />

      <button
        className="bg-black p-4 text-lg text-white m-4 rounded-md "
        onClick={handelAdd}
      >
        Add a todo
      </button>
    </div>
  );
};

export default CreateTodo;
