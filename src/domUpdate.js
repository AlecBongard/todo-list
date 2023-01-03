/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import { Library } from "./items";
import trash from "./imgs/delete.png";
import arrow from "./imgs/menu-up.png";

const projects = document.querySelector(".projects-content");
const todos = document.querySelector(".todos-content");
const header = document.querySelector(".header-content");

const Listeners = (function Listeners() {
  // sets event listeners for each child node of a parent
  const setListeners = function setListeners(parent, func) {
    const children = Array.from(parent.childNodes);

    children.forEach((node) => {
      const index = node.getAttribute("data-index");

      node.addEventListener("click", () => {
        func.call(this, Library.projects[index]);
        Library.selected = index;
      });
    });
  };

  return { setListeners };
})();

const DOMUpdate = (function DOMUpdate() {
  const toggleForm = function toggleForm(form) {
    if (form.style.display === "block") {
      form.style.display = "none";
    } else {
      form.style.display = "block";
    }
  };

  const _headerRefresh = function headerRefresh(proj) {
    header.textContent = "";

    const headTitle = document.createElement("p");
    headTitle.classList.add("header-title");
    headTitle.textContent = proj.title;

    header.append(headTitle);

    const headDesc = document.createElement("p");
    headDesc.classList.add("header-desc");
    headDesc.textContent = proj.desc;

    header.append(headDesc);
  };

  const todoRefresh = function todoRefresh(proj) {
    _headerRefresh(proj);
    todos.textContent = "";

    proj.tasks.forEach((task) => {
      const taskContainer = document.createElement("div");
      taskContainer.classList.add("task");

      // data task corresponds to the the task's index in the project's list of tasks
      taskContainer.setAttribute("data-task", task.index);

      const titleWrap = document.createElement("div");
      const dateWrap = document.createElement("div");
      const arrowWrap = document.createElement("div");
      arrowWrap.classList.add("text-wrap");
      dateWrap.classList.add("text-wrap");
      titleWrap.classList.add("text-wrap");

      const taskOverview = document.createElement("div");
      taskOverview.classList.add("task-overview");

      const dropArrow = document.createElement("img");
      dropArrow.classList.add("arrow");
      dropArrow.setAttribute("src", arrow);

      const taskTitle = document.createElement("p");
      taskTitle.classList.add("task-title");
      taskTitle.textContent = task.title;

      const descContainer = document.createElement("div");
      descContainer.classList.add("desc-container");

      const taskDesc = document.createElement("p");
      taskDesc.classList.add("task-desc");
      taskDesc.textContent = task.desc;
      descContainer.appendChild(taskDesc);

      const taskDate = document.createElement("p");
      taskDate.classList.add("task-date");
      const dateDay = task.dueDate.getDate();
      const dateMonth = task.dueDate.getMonth();
      const dateYear = task.dueDate.getFullYear();

      taskDate.textContent = `${dateMonth + 1} / ${dateDay + 1} / ${dateYear}`;

      const del = document.createElement("img");
      del.classList.add("task-delete");
      del.setAttribute("src", trash);

      del.addEventListener("click", (e) => {
        e.stopPropagation();
        proj.taskDelete(task.index);

        proj.tasks.forEach((todo) => {
          todo.index = proj.tasks.indexOf(todo);
        });

        todoRefresh(proj);
      });

      dropArrow.addEventListener("click", () => {
        if (dropArrow.classList.contains("arrow-clicked")) {
          dropArrow.classList.remove("arrow-clicked");
          descContainer.classList.remove("desc-container-clicked");
        } else {
          dropArrow.classList.add("arrow-clicked");
          descContainer.classList.add("desc-container-clicked");
        }
      });

      todos.appendChild(taskContainer);
      taskContainer.appendChild(taskOverview);
      taskContainer.appendChild(descContainer);
      taskOverview.appendChild(arrowWrap);
      arrowWrap.appendChild(dropArrow);
      taskOverview.appendChild(titleWrap);
      titleWrap.appendChild(taskTitle);
      taskOverview.appendChild(dateWrap);
      dateWrap.appendChild(taskDate);
      taskContainer.appendChild(del);
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

      const del = document.createElement("img");
      del.classList.add("proj-delete");
      del.setAttribute("src", trash);

      del.addEventListener("click", (e) => {
        e.stopPropagation();
        Library.projDelete(project.index);

        // reset indices in project library
        Library.projects.forEach((elem) => {
          elem.index = Library.projects.indexOf(elem);
        });

        projRefresh();
      });

      projects.appendChild(proj);
      proj.appendChild(projTitle);
      proj.appendChild(del);
    });

    Listeners.setListeners(projects, todoRefresh);
  };

  return { projRefresh, toggleForm, todoRefresh };
})();

export { DOMUpdate, Listeners };
