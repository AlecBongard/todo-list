// eslint-disable-next-line no-unused-vars
import css from "./style.css";
import { projFactory, Library } from "./items";
import { DOMUpdate } from "./domUpdate";

const projForm = document.querySelector(".proj-form");
const projResize = document.querySelector(".new-proj");
const projSubmit = document.querySelector("#proj-submit");
const projTitle = document.querySelector("#proj-title");
const projDate = document.querySelector("#proj-date");
const projDesc = document.querySelector("#proj-desc");

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
    DOMUpdate.toggleForm(projForm);
  } else {
    inputContainer.classList.add("proj-big");
    setTimeout(() => DOMUpdate.toggleForm(projForm), 425);
  }
});
