// eslint-disable-next-line no-unused-vars
import css from "./style.css";
import plus from "./imgs/plus.png";
import minus from "./imgs/minus.png";
import { projFactory, Library, taskFactory } from "./items";
import { DOMUpdate } from "./domUpdate";

const projForm = document.querySelector(".proj-form");
const projResize = document.querySelector(".new-proj");
const projSubmit = document.querySelector("#proj-submit");
const projTitle = document.querySelector("#proj-title");
const projDesc = document.querySelector("#proj-desc");
const projAdd = document.querySelector("#proj-add");

const todoForm = document.querySelector(".todo-form");
const todoResize = document.querySelector(".new-todo");
const todoSubmit = document.querySelector("#todo-submit");
const todoTitle = document.querySelector("#todo-title");
const todoDate = document.querySelector("#todo-date");
const todoDesc = document.querySelector("#todo-desc");
const todoAdd = document.querySelector("#todo-add");
const todosContent = document.querySelector(".todos-content");

const controlContent = document.querySelectorAll(".control-content");

controlContent.forEach(node=>{
  node.setAttribute("src", plus);
});

const errorText = document.createElement("p");
errorText.id = "proj-error";
errorText.classList.add("error-text");
errorText.textContent = "";
projForm.appendChild(errorText);

const todoError = document.createElement("p");
todoError.id = "todo-error";
todoError.classList.add("error-text");
todoError.textContent = "";
todoForm.appendChild(todoError);

window.addEventListener("load", () => {
  if (localStorage.length) {
    const localKeys = Object.keys(localStorage);

    localKeys.forEach((key) => {
      const projInfo = JSON.parse(localStorage[key]);
      const proj = projFactory(projInfo.title, projInfo.desc);
      proj.index = Library.projects.length;
      Library.projects.push(proj);

      const taskKeys = Object.keys(projInfo.tasks);
      taskKeys.forEach((taskKey) => {
        const taskInfo = JSON.parse(projInfo.tasks[taskKey]);
        taskInfo.dueDate = new Date(Date.parse(taskInfo.dueDate));
        const task = taskFactory(
          taskInfo.title,
          taskInfo.dueDate,
          taskInfo.desc,
          "low"
        );
        task.index = proj.tasks.length;
        proj.tasks.push(task);
      });
    });

    DOMUpdate.projRefresh();
  }

  if (Library.projects[0]) {
    DOMUpdate.todoRefresh(Library.projects[0]);
  } else {
    const emptyNotice = document.createElement("p");
    emptyNotice.classList.add("empty-notice");
    emptyNotice.textContent = "Please select a project";
    todosContent.appendChild(emptyNotice);
  }
});

projSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  const title = projTitle.value;
  const desc = projDesc.value;

  let duplicate = false;
  let blank = false;

  if (!title) {
    blank = true;
  }

  Library.projects.forEach((project) => {
    if (project.title === title) {
      duplicate = true;
    }
  });

  if (!(duplicate || blank)) {
    const newProj = projFactory(title, desc);

    /* create key/value pair to indicate project's place in the project library.
      Will be used when removing project from the DOM */
    newProj.index = Library.projects.length;

    const infoObj = { title, desc, tasks: {} };
    localStorage[newProj.title] = JSON.stringify(infoObj);

    Library.projects.push(newProj);
    DOMUpdate.projRefresh();
    projTitle.value = "";
    projDesc.value = "";

    errorText.textContent = "";
  } else if (duplicate) {
    errorText.textContent = "A project with that name already exists.";
  } else if (blank) {
    errorText.textContent = "Project name must not be blank.";
  }
});

todoSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  try{
    const currentProj = Library.projects[Library.selected];

    const title = todoTitle.value;
    const dueDate = new Date(todoDate.value);
    const desc = todoDesc.value;
  
    let duplicate = false;
    currentProj.tasks.forEach((task) => {
      if (title === task.title) {
        duplicate = true;
      }
    });
  
    if (!title) {
      todoError.textContent = "Title must not be blank.";
    } else if (
      !(dueDate.getDate() || dueDate.getFullYear() || dueDate.getMonth())
    ) {
      todoError.textContent = "Please enter a valid date.";
    } else if (duplicate) {
      todoError.textContent = "There is already a task with this title.";
    } else if (!currentProj) {
      todoError.textContent = "Please select a project.";
    } else {
      const newTask = taskFactory(title, dueDate, desc, "low");
  
      // index will be used when associating DOM elements with each task
      newTask.index = currentProj.tasks.length;
  
      const infoObj = { title, dueDate, desc, index: newTask.index };
      const proj = JSON.parse(localStorage[currentProj.title]);
      proj.tasks[title] = JSON.stringify(infoObj);
      localStorage[currentProj.title] = JSON.stringify(proj);
  
      currentProj.tasks.push(newTask);
  
      DOMUpdate.todoRefresh(currentProj);
  
      todoTitle.value = "";
      todoDate.value = "";
      todoDesc.value = "";
    }
  }catch{
    todoError.textContent = "Please select a project before creating a task";
  }

});

projResize.addEventListener("click", () => {
  const inputContainer = projResize.parentNode;

  if (inputContainer.classList.contains("proj-big")) {
    inputContainer.classList.remove("proj-big");
    projAdd.setAttribute("src", plus);
    DOMUpdate.toggleForm(projForm);
  } else {
    projAdd.setAttribute("src", minus);
    inputContainer.classList.add("proj-big");
    setTimeout(() => DOMUpdate.toggleForm(projForm), 425);
  }
});

todoResize.addEventListener("click", () => {
  const inputContainer = todoResize.parentNode;

  if (inputContainer.classList.contains("todo-big")) {
    inputContainer.classList.remove("todo-big");
    todoAdd.setAttribute("src", plus);
    DOMUpdate.toggleForm(todoForm);
  } else {
    inputContainer.classList.add("todo-big");
    todoAdd.setAttribute("src", minus);
    setTimeout(() => DOMUpdate.toggleForm(todoForm), 425);
  }
});
