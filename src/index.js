// eslint-disable-next-line no-unused-vars
import css from "./style.css";
import { projFactory, Library, taskFactory } from "./items";
import { DOMUpdate } from "./domUpdate";

const projForm = document.querySelector(".proj-form");
const projResize = document.querySelector(".new-proj");
const projSubmit = document.querySelector("#proj-submit");
const projTitle = document.querySelector("#proj-title");
const projDate = document.querySelector("#proj-date");
const projDesc = document.querySelector("#proj-desc");

const todoForm = document.querySelector(".todo-form");
const todoResize = document.querySelector(".new-todo");

const firstProj = projFactory("a", "1", "qwertyuiop");
firstProj.tasks.push(
    taskFactory("a", "1", "qwerty", "low")
);


Library.projects.push(firstProj);
DOMUpdate.projRefresh();
DOMUpdate.todoRefresh(firstProj);

projSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  const title = projTitle.value;
  const dueDate = projDate.value;
  const desc = projDesc.value;

  const newProj = projFactory(title, dueDate, desc);

  /* create key/value pair to indicate project's place in the project library.
     Will be used when removing project from the DOM */
  newProj.index = Library.projects.length;

  Library.projects.push(newProj);
  DOMUpdate.projRefresh();
});

projResize.addEventListener("click", () => {
  const inputContainer = projResize.parentNode;

  if (inputContainer.classList.contains("proj-big")) {
    inputContainer.classList.remove("proj-big");
    projResize.textContent = "+";
    DOMUpdate.toggleForm(projForm);
  } else {
    projResize.textContent = "-";
    inputContainer.classList.add("proj-big");
    setTimeout(() => DOMUpdate.toggleForm(projForm), 425);
  }
});

todoResize.addEventListener("click", ()=>{
    const inputContainer = todoResize.parentNode;

    if (inputContainer.classList.contains("todo-big")) {
        inputContainer.classList.remove("todo-big");
        todoResize.textContent = "+";
        DOMUpdate.toggleForm(todoForm);
      } else {
        inputContainer.classList.add("todo-big");
        todoResize.textContent = "-";
        setTimeout(() => DOMUpdate.toggleForm(todoForm), 425);
      }
});
