import { Library } from "./items";

const projects = document.querySelector('.projects-content');

const DOMUpdate = (function(){
    const projRefresh = function(){
        projects.textContent = "";

        Library.projects.forEach((project)=>{
            const proj = document.createElement('div');
            proj.classList.add('proj');

            const projTitle = document.createElement('p');
            projTitle.classList.add('proj-title');
            projTitle.textContent = project.title;

            const projDesc = document.createElement('p');
            projDesc.classList.add('proj-desc');
            projDesc.textContent = project.desc;

            projects.appendChild(proj);
            proj.appendChild(projTitle);
            proj.appendChild(projDesc);
        });
    }

    return {projRefresh}
})()

export {
    DOMUpdate,
}
