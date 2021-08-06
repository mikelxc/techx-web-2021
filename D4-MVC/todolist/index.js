const todoFormEl = document.querySelector("#todo-form");
const todoInputEl = document.querySelector("#todo-input");
const todoListEl = document.querySelector("#todo-list");

function buildUniqueId(prefix = "prefix") {
  return prefix + "-" + Math.floor(Math.random() * Date.now());
}

function createTask(name) {
  return {
    name,
    id: buildUniqueId("todo"),
  };
}

// const state = JSON.stringify(listItem);

const state = {
  taskName: "",
  tasks: [
    {
      id: "todo-0",
      name: "Learn some frameworks!",
    },
    {
      id: "todo-1",
      name: "Learn some CSS",
    },
  ],
};

function init() {
  todoInputEl.addEventListener("change", handleInputChange);
  todoFormEl.addEventListener("submit", handleFormSubmit);
  renderInput();
  renderTodoList();
}

function renderInput() {
  todoInputEl.value = state.taskName;
}

function renderTodoList() {
  const frag = document.createDocumentFragment();

  state.tasks.forEach((task) => {
    const item = buildTodoItemEl(task.id, task.name);
    frag.appendChild(item);
  });

  while (todoListEl.lastChild) {
    todoListEl.removeChild(todoListEl.lastChild);
  }
  todoListEl.appendChild(frag);
}

function buildTodoItemEl(id, name) {
  const item = document.createElement("li");
  const span = document.createElement("span");
  const textContent = document.createTextNode(name);

  span.appendChild(textContent);

  item.id = id;
  item.appendChild(span);
  item.appendChild(buildDeleteButtonEl(id));

  return item;
}

function buildDeleteButtonEl(id) {
  const button = document.createElement("button");
  const textContent = document.createTextNode("Delete");

  button.setAttribute("type", "button");
  button.addEventListener("click", handleTodoDeleteButtonClick.bind(null, id));
  button.appendChild(textContent);

  return button;
}

function handleInputChange(e) {
  state.taskName = e.target.value;
}

function handleFormSubmit(e) {
  e.preventDefault();
  state.tasks = [...state.tasks, createTask(state.taskName)];
  state.taskName = "";
  renderInput();
  renderTodoList();
}

function handleTodoDeleteButtonClick(id) {
  state.tasks = state.tasks.filter((t) => t.id !== id);
  renderTodoList();
}

document.addEventListener("DOMContentLoaded", init);
