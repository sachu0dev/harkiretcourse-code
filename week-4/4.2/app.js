function addTodo(){
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const list = document.querySelector(".list");
  const todo = {
    title: title.value,
    description: description.value
  }
  const todos = document.createElement("div");
  todos.innerHTML = `
  <div>
    <div>${todo.title}</div>
    <div>${todo.description}</div>
    <button>done</button>
  </div>
  `;
  list.appendChild(todos);
}