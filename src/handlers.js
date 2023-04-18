import {
  toggleSidebar,
  // switchSidebar,
  clearContent,
  setTitle,
  addTaskBtn,
  showTaskBtn,
  hideAddTaskInputs,
  changePriority,
} from './render.js';

import { Task } from './task.js';

const eventListeners = function () {
  const tasks = document.querySelector('#tasks');
  const hamburgerMenu = document.querySelector('#hamburger-menu');
  const addTask__btn_cancel = document.querySelector('.addTask__btn-cancel');
  const addTask__priority_dropdown = document.querySelector('.addTask__priority-dropdown');
  const sidebarBtns = document.querySelectorAll('.sidebarBtn ');
  const modalProject__Content = document.querySelector('.modalProject__Content');
  const modalProject__Ctn = document.querySelector('.modalProject__Ctn');

  const addProjectBtn = document.querySelector('.addProjectBtn');

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

  document.addEventListener('click', function (e) {
    const target = e.target.closest('.addTask__btn-submit');
    if (target) {
      console.log('submit add task');
    }
  });

  // highlight active button
  sidebarBtns.forEach((sidebarBtn) => {
    sidebarBtn.addEventListener('click', function () {
      sidebarBtns.forEach((sidebarBtn) => {
        sidebarBtn.classList.remove('sidebarBtn-active');
      });
      this.classList.add('sidebarBtn-active');
    });
  });

  addProjectBtn.addEventListener('click', function () {
    modalProject__Ctn.classList.remove('hidden');
    console.log('add new project');
  });

  document.addEventListener('click', function (e) {
    if (e.target == modalProject__Ctn) {
      console.log('hide modal');
      modalProject__Ctn.classList.add('hidden');
    }
  });

  return { tasks, hamburgerMenu };
};

export { eventListeners };
