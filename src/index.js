import css from "./style.css";
import { taskFactory, projectFactory } from "./items";

const addProj = document.querySelector(".new-proj");
const projControls = document.querySelector(".proj-controls");

addProj.addEventListener('click', ()=>{

    if(!(addProj.classList.contains('proj-input'))){
        projControls.classList.add('proj-input');
        addProj.textContent = "-";
    }else{
       projControls.classList.remove('proj-input');
    }
})
