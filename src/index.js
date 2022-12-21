// eslint-disable-next-line no-unused-vars
import css from "./style.css";
import { projFactory, Library } from "./items";
import { DOMUpdate } from "./domUpdate";

const projSubmit = document.querySelector('#proj-submit');
const projTitle = document.querySelector('#proj-title');
const projDate = document.querySelector('#proj-date');
const projDesc = document.querySelector('#proj-desc')

projSubmit.addEventListener('click', (event)=>{
    event.preventDefault();

    const title = projTitle.value;
    const dueDate = projDate.value;
    const desc = projDesc.value;

    const newProj = projFactory(title, dueDate, desc);

    /* create key/value pair to indicate project's place in the project library.
     Will be used when adding project to the DOM */
    newProj.index = Library.projects.length;

    Library.projects.push(newProj);
    DOMUpdate.projRefresh();


});


