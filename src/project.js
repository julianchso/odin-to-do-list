import { Task } from './task';

class Project {
  constructor(name, tasks) {
    this.name = name;
    this.tasks = [];
  }

  assignTasks() {
    console.log(this.name);
  }
}

export { Project };
