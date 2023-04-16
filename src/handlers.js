import {
  toggleSidebar,
  switchSidebar,
  clearContent,
  setTitle,
  addTaskBtn,
  showTaskBtn,
  hideAddTaskInputs,
} from './render.js';

import { Task } from './task.js';

const eventListeners = function () {
  const tasks = document.querySelector('#tasks');
  const hamburgerMenu = document.querySelector('#hamburger-menu');
  const addTask__btn_cancel = document.querySelector('.addTask__btn-cancel');
  hamburgerMenu.addEventListener('click', toggleSidebar);

  // create add task button and add task inputs when clicked
  document.addEventListener('click', function (e) {
    const target = e.target.closest('.addTask__btn');
    if (target) {
      addTaskBtn();
    }
  });

  // if add task cancel button is clicked on, hide add task inputs and show original add task button
  document.addEventListener('click', function (e) {
    const target = e.target.closest('.addTask__btn-cancel');
    if (target) {
      showTaskBtn();
      hideAddTaskInputs();
    }
  });

  return { tasks, hamburgerMenu };
};

export { eventListeners };
