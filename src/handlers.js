import {
  toggleSidebar,
  // switchSidebar,
  clearContent,
  setTitle,
  addTaskBtn,
  showTaskBtn,
  addTask_form_hide,
  changePriority,
  showModal,
  hideModal,
  renderProjects,
} from './render.js';
import { Project } from './project.js';
import { Task } from './task.js';
import { addTask, addProjectToStorage } from './controller.js';

const eventListeners = function () {
  const tasks = document.querySelector('#tasks');
  const hamburgerMenu = document.querySelector('#hamburger-menu');
  const sidebarBtns = document.querySelectorAll('.sidebarBtn');
  const modalProject__ctn = document.querySelector('.modalProject__ctn');

  const sidebar__addProject = document.querySelector('.sidebar__addProject');

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
    const target = e.target.closest('.addTask__btn_cancel');
    if (target) {
      showTaskBtn();
      addTask_form_hide();
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

  sidebar__addProject.addEventListener('click', function () {
    showModal();
  });

  // hide modal when clicked outside of container
  document.addEventListener('click', function (e) {
    if (e.target == modalProject__ctn) {
      hideModal();
    }
  });

  // hide modal when cancel button is clicked
  document.addEventListener('click', function (e) {
    if (e.target == modalProject__cancel) {
      hideModal();
    }
  });

  const modalProject__cancel = document.querySelector('.modalProject__cancel');
  modalProject__cancel.addEventListener('click', function (e) {
    if (e.target == modalProject__ctn) {
      hideModal();
    }
  });

  const modalProject__submit = document.querySelector('.modalProject__submit');
  modalProject__submit.addEventListener('click', function () {
    addProjectToStorage();
    hideModal();
    renderProjects();
  });

  // const addTask__btn_cancel = document.querySelector('.addTask__btn_cancel');
  // addTask__btn_cancel.addEventListener('click', function () {});

  document.addEventListener('click', function (e) {
    const target = e.target.closest('.addTask__btn_cancel');
    if (target) {
      addTask_form_hide();
      showTaskBtn();
    }
  });

  // add task after clicking submit
  document.addEventListener('click', function (e) {
    const target = e.target.closest('.addTask__btn_submit');
    if (target) {
      console.log('submit add task');
      addTask();
      addTask_form_hide();
    }
  });

  return { tasks, hamburgerMenu };
};

export { eventListeners };
