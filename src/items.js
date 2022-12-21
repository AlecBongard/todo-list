const Library = (function(){
    let projects = [];

    return {projects}
})()

const taskFactory = function(title, desc, dueDate, prio){

    const editTask = function(part, input){
        this.part = input;
    }

    return {title, desc, dueDate, prio, editTask}
}

const projFactory = function(title, dueDate, desc){

    let tasks = [];

    const newTask = function(task){
        tasks.push(task);
    }

    return {title, dueDate, desc, tasks, newTask}
}

export {taskFactory, projFactory, Library};
