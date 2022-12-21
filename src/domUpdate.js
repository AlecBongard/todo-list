/* eslint-disable no-param-reassign */
import { Library } from "./items";

const projects = document.querySelector(".projects-content");

const DOMUpdate = (function DOMUpdate() {
  const toggleForm = function toggleForm(form) {
    if (form.style.display === "block") {
      form.style.display = "none";
    } else {
      form.style.display = "block";
    }
  };

  const projRefresh = function projRefresh() {
    projects.textContent = "";

    Library.projects.forEach((project) => {
      const proj = document.createElement("div");
      proj.classList.add("proj");

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

  return { projRefresh, toggleForm };
})();

export { DOMUpdate };
