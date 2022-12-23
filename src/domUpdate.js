/* eslint-disable no-param-reassign */
import { Library } from "./items";

const projects = document.querySelector(".projects-content");
const todos = document.querySelector(".todos-content");

const DOMUpdate = (function DOMUpdate() {
  const toggleForm = function toggleForm(form) {
    if (form.style.display === "block") {
      form.style.display = "none";
    } else {
      form.style.display = "block";
    }
  };

  const todoRefresh = function todoRefresh(proj) {
    todos.textContent = "";

    proj.tasks.forEach((task) => {
      const taskContainer = document.createElement("div");
      taskContainer.classList.add("task");

      const taskTitle = document.createElement("p");
      taskTitle.classList.add("task-title");
      taskTitle.textContent = task.title;

      const taskDesc = document.createElement("p");
      taskDesc.classList.add("task-desc");
      taskDesc.textContent = task.desc;

      todos.appendChild(taskContainer);
      taskContainer.appendChild(taskTitle);
      taskContainer.appendChild(taskDesc);
    });
  };

  const projRefresh = function projRefresh() {
    projects.textContent = "";

    Library.projects.forEach((project) => {
      const proj = document.createElement("div");
      proj.classList.add("proj");
      // the data-index attribute corresponds to the project's index in the library
      proj.setAttribute("data-index", project.index);

      const projTitle = document.createElement("p");
      projTitle.classList.add("proj-title");
      projTitle.textContent = project.title;

      const projDesc = document.createElement("p");
      projDesc.classList.add("proj-desc");
      projDesc.textContent = project.desc;

      projects.appendChild(proj);
      proj.appendChild(projTitle);
      proj.appendChild(projDesc);
    });
  };

  return { projRefresh, toggleForm, todoRefresh };
})();

const Listeners = (function Listeners() {
  // sets event listeners for each child node of a parent
  const setListeners = function setListeners(parent, func) {
    const children = Array.from(parent.childNodes);

    children.forEach((node) => {
      const index = node.getAttribute("data-index");

      node.addEventListener("click", () => {
        func.call(this, Library.projects[index]);
      });
    });
  };

  return { setListeners };
})();

export { DOMUpdate, Listeners };
