import { Task } from './task';

const LOCAL_STORAGE_PROJECT_KEY = 'project.lists';

// {"projectName":[{
//   "id":"id",
//   "taskName":"task",
//   "priority":"low",
//   "date":"2021-12-12",
//   "details":" with colgate",
//   "project":"home",
//   "checked":true}
// }

class Project {
  constructor(name, tasks) {
    this.name = name;
    this.tasks = [];
  }

  setProject() {
    let projects = JSON.stringify();
  }

  getProject() {
    let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY) || []);
  }
}

export { Project };
