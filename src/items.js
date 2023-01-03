/* eslint-disable no-param-reassign */
const Library = (function Library() {
  const selected = 0;

  const projects = [];

  const projDelete = function projDelete(index) {
    if (index < projects.length) {
      window.localStorage.removeItem(projects[index].title);
      projects.splice(index, 1);
    }
  };

  return { projects, selected, projDelete };
})();

const taskFactory = function taskFactory(title, dueDate, desc, prio) {
  return { title, desc, dueDate, prio };
};

const projFactory = function projFactory(title, desc) {
  const tasks = [];

  const newTask = function newTask(task) {
    tasks.push(task);
  };

  const taskDelete = function taskDelete(index) {
    const projParsed = JSON.parse(localStorage[title]);
    delete projParsed.tasks[tasks[index].title];
    localStorage[title] = JSON.stringify(projParsed);
    tasks.splice(index, 1);
  };

  return { title, desc, tasks, newTask, taskDelete };
};

export { taskFactory, projFactory, Library };
