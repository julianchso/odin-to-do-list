import './styles/main.scss';
import { eventListeners } from './handlers';
import {
  toggleSidebar,
  // switchSidebar,
  clearContent,
  setTitle,
  addTaskBtn,
  showTaskBtn,
  addTask_form_hide,
  // changePriority,
  showModal,
  hideModal,
  renderProjects,
} from './render.js';
import { Task } from './task';
// import { render } from 'sass';

// Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module.
// If you need multiples of something (players!), create them with factories.

// Task: factories or classes

// Project List: Module

// handlers.js
window.addEventListener('load', initialize());

function initialize() {
  eventListeners();
  renderProjects();
}

// render.js

// index.js: bring it all together

document.addEventListener('click', (e) => {
  const target = e.target.innerText;

  if (target == 'Inbox') inbox();
  if (target == 'Today') today();
  if (target == 'Upcoming') upcoming();
  if (target == 'Complete') complete();
});

function inbox() {
  setTitle();
  addTaskBtn();
}

function today() {
  setTitle();
  addTaskBtn();
}

function upcoming() {
  setTitle();
  addTaskBtn();
}

function complete() {
  setTitle();
  addTaskBtn();
}
