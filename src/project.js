import { Task } from './task';

const LOCAL_STORAGE_PROJECT_KEY = 'project.lists';

class Project {
  constructor(name, tasks) {
    this.name = name;
    this.tasks = [];
  }

  setProjects() {
    let projects = JSON.stringify();
  }

  getProjects() {
    let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY) || []);
  }
}

export { Project };
