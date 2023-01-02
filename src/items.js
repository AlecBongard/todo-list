/* eslint-disable no-param-reassign */
const Library = (function Library() {
  const selected = 0;

  const projects = [];

  const projDelete = function projDelete(index) {
    if (index < projects.length) {
      projects.splice(index, 1);
    }
  };

  return { projects, selected, projDelete };
})();

const taskFactory = function taskFactory(title, dueDate, desc, prio) {
  const editTask = function editTask(part, input) {
    this.part = input;
  };

  return { title, desc, dueDate, prio, editTask };
};

const projFactory = function projFactory(title, desc) {
  const tasks = [];

  const newTask = function newTask(task) {
    tasks.push(task);
  };

  const taskDelete = function taskDelete(index) {
    tasks.splice(index, 1);
  };

  return { title, desc, tasks, newTask, taskDelete };
};

export { taskFactory, projFactory, Library };
