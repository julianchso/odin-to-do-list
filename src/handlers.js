import { toggleSidebar, switchSidebar, clearContent, setTitle, addTaskBtn } from './render.js';

import { Task } from './task.js';

const eventListeners = function () {
  const tasks = document.querySelector('#tasks');
  const hamburgerMenu = document.querySelector('#hamburger-menu');
  hamburgerMenu.addEventListener('click', toggleSidebar);

  document.addEventListener('click', function (e) {
    const target = e.target.closest('.addTask__btn');
    if (target) {
      addTaskBtn();
    }
  });

  document.addEventListener('click', function (e) {
    const target = e.target.closest('#confirmAddTaskBtn');
    if (target) {
      Task.addTask();
    }
  });
  return { tasks, hamburgerMenu };
};

export { eventListeners };
