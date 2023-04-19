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
  constructor(id, title, description, dueDate, priority, complete) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.complete = complete;
  }

  // save project and todos to localStorage everytime a project is created.
  // function that looks for data in localStorage when app is first loaded.

  addTask() {
    const addTask__title = document.querySelector('.addTask__title');
    const addTask__desc = document.querySelector('.addTask__desc');
    const addTask__priority_dropdown = document.querySelector('.addTask__priority-dropdown');
    const addTask__dueDate = document.querySelector('.addTask__dueDate');
    const addTask__btn_submit = document.querySelector('.addTask__btn-submit');

    addTask__btn_submit.addEventListener('click', function () {
      this.id = Date.now();
      this.title = addTask__title.value;
      this.description = addTask__desc.value;
      this.priority = addTask__priority_dropdown;
      this.dueDate = addTask__dueDate.value;

      console.log(this.id);
      console.log(this.title);
      console.log(this.description);
      console.log(this.priority);
      console.log(this.dueDate);
    });
  }

  editTask() {}

  get allTasks() {
    return this.tasks;
  }

  setPriority() {}

  removeTask() {}
}

export { Task };
