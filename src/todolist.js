import { Task } from './task';
import { Project } from './project';

class TodoList {
  constructor() {
    this.projects = [];
    this.projects.push('Inbox');
    this.projects.push('Today');
    this.projects.push('Upcoming');
  }

  set project(name) {
    this.projects.push(name);
  }
}

let myTodoList = new TodoList();

export { TodoList, myTodoList };
