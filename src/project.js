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

  static get id() {
    return this._id;
  }

  static set name(name) {
    if (name == '') return;
    this._name = name;
  }

  static get name() {
    return this._name;
  }

  static set tasks(task) {
    this._tasks.push(task);
  }

  static get tasks() {
    return this._tasks;
  }

  deleteTask() {}

  get tasksToday() {}

  get tasksUpcoming() {}
}

let myProject = new Project();

function getId() {
  return Date.now();
}

export { Project, myProject, getId };
