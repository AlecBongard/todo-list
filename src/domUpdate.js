/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import { Library } from "./items";
import trash from "./imgs/delete.png";

const projects = document.querySelector(".projects-content");
const todos = document.querySelector(".todos-content");

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

  const _projRemove = function _projRemove(index){
    const dataString = `[data-index="${index}"]`;
    const deletion = document.querySelector(dataString);
    
    
    deletion.remove();
  }

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

      const del = document.createElement("img");
      del.classList.add("proj-delete");
      del.setAttribute("src", trash);


      del.addEventListener("click", ()=>{
        Library.projDelete(project.index);

        // reset indices in project library
        Library.projects.forEach((elem)=>{
          elem.index=Library.projects.indexOf(elem);
        });
        
        projRefresh();
      })

      

      projects.appendChild(proj);
      proj.appendChild(projTitle);
      proj.appendChild(projDesc);
      proj.appendChild(del);
    });
    Listeners.setListeners(projects, todoRefresh, Library.proj);
  };



  return { projRefresh, toggleForm, todoRefresh };
})();



export { DOMUpdate, Listeners };
