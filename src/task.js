import eventListeners from './handlers';
import render from './render';

class Task {
  constructor(name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  // save project and todos to localStorage everytime a project is created.
  // function that looks for data in localStorage when app is first loaded.

  addTask() {
    localStorage;
  }

  editTask() {}

  setPriority() {}

  removeTask() {}
}

export default Task;
