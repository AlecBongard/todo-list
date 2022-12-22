const Library = (function Library() {
  const projects = [];

  return { projects };
})();

const taskFactory = function taskFactory(title, dueDate, desc, prio) {
  const editTask = function editTask(part, input) {
    this.part = input;
  };

  return { title, desc, dueDate, prio, editTask };
};

const projFactory = function projFactory(title, dueDate, desc) {
  const tasks = [];

  const newTask = function newTask(task) {
    tasks.push(task);
  };

  return { title, dueDate, desc, tasks, newTask };
};

export { taskFactory, projFactory, Library };
