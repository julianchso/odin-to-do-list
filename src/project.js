import { Task } from './task';
const LOCAL_STORAGE_PROJECT_KEY = 'project.list';

// {"projectName":[{
//   "id":"id",
//   "taskName":"task",
//   "priority":"low",
//   "date":"2021-12-12",
//   "details":" with colgate",
//   "project":"home",
//   "checked":true}
// }

// return localStorage.setItem(this.name, JSON.stringify(this.tasks));

// getProject() {
//   JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY || []));
// }

class Project {
  constructor(name) {
    this._id = getId();
    this._name = name;
    this._tasks = [];
  }

  get id() {
    return this._id;
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set tasks(task) {
    this._tasks.push(task);
  }

  get tasks() {
    return this._tasks;
  }

  deleteTask() {}

  get tasksToday() {}

  get tasksUpcoming() {}
}

function getId() {
  return { id: Date.now() };
}

export { Project, getId };
