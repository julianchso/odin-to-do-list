import eventListeners from './handlers';
import {
  toggleSidebar,
  switchSidebar,
  clearContent,
  setTitle,
  addTaskBox,
  addTaskBtn,
} from './render.js';

import { Project, getId } from './project';

class Task {
  constructor(title, description, dueDate, priority, complete) {
    this._id = getId();
    this._title = title;
    this._description = description;
    this._priority = priority;
    this._dueDate = dueDate;
    this._complete = complete;
  }

  // save project and todos to localStorage everytime a project is created.
  // function that looks for data in localStorage when app is first loaded.

  get id() {
    return this._id;
  }

  set title(name) {
    this._title = name;
  }

  get title() {
    return this._title;
  }

  set description(str) {
    this._description = str;
  }

  get description() {
    return this._description;
  }

  set priority(val) {
    this._priority = val;
  }

  get priority() {
    return this._priority;
  }

  set dueDate(date) {
    this._dueDate = date;
  }

  get dueDate() {
    return this._dueDate;
  }

  set complete(bool) {
    this._complete = bool;
  }

  get complete() {
    return this._complete;
  }

  editTask() {}

  get allTasks() {
    return this.tasks;
  }

  setPriority() {}

  removeTask() {}
}

export { Task };
