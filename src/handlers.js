import {
  toggleSidebar,
  switchSidebar,
  clearContent,
  setTitle,
  addTaskBox,
  addTaskBtn,
} from './render.js';

import { Task } from './task.js';

const eventListeners = function () {
  const tasks = document.querySelector('#tasks');
  const hamburgerMenu = document.querySelector('#hamburger-menu');
  hamburgerMenu.addEventListener('click', toggleSidebar);

  document.addEventListener('click', function (e) {
    const target = e.target.closest('#addTaskBtn');
    console.log(target);

    if (target) {
      Task.addTask();
    }
  });
  return { tasks, hamburgerMenu };
};

export { eventListeners };
