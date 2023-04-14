import eventListeners from './handlers';
import {
  toggleSidebar,
  switchSidebar,
  clearContent,
  setTitle,
  addTaskBox,
  addTaskBtn,
} from './render.js';
import { Project } from './project';

class Task {
  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  // save project and todos to localStorage everytime a project is created.
  // function that looks for data in localStorage when app is first loaded.

  static addTask() {
    const task = document.querySelector('#taskTitle');
    const taskTitle = task.value;

    console.log(taskTitle);
  }

  editTask() {}

  get allTasks() {
    return this.tasks;
  }

  setPriority() {}

  removeTask() {}
}

export { Task };
