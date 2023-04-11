import {
  toggleSidebar,
  switchSidebar,
  clearContent,
  setTitle,
  addTaskBox,
  addTaskBtn,
} from './render.js';

const eventListeners = function () {
  const tasks = document.querySelector('#tasks');
  const hamburgerMenu = document.querySelector('#hamburger-menu');
  hamburgerMenu.addEventListener('click', toggleSidebar);

  return { tasks, hamburgerMenu };
};

export { eventListeners };
