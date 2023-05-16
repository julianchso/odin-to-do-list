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
  renderTasks,
  renderProjects,
  renderSidebarBtnActive,
} from './render.js';
import { Project } from './project.js';
import { Task } from './task.js';
import { addTaskToStorage, addProjectToStorage, setDefaultProjects } from './controller';

const eventListeners = function () {
  const tasks = document.querySelector('#tasks');
  const hamburgerMenu = document.querySelector('#hamburger-menu');
  const sidebar = document.querySelector('#sidebar');
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

  sidebar.addEventListener('click', function (e) {
    let button = e.target.closest('.sidebarBtn');
    if (button) {
      renderTasks(button);
    }
  });

  // document.querySelectorAll('.sidebarBtn').forEach((sidebarBtn) => {
  //   sidebarBtn.addEventListener('click', function () {
  //     renderTasks(sidebarBtn);
  //   });
  // });

  // highlight active button
  // TODO: look up how to bind this eventlistener to the side bar buttons
  // ask on reddit
  // sidebarBtns.forEach((sidebarBtn) => {
  //   sidebarBtn.addEventListener('click', function () {
  //     renderTasks(sidebarBtn);
  //   });
  // });

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
      addTaskToStorage();
      addTask_form_hide();
    }
  });

  return { tasks, hamburgerMenu };
};

export { eventListeners };
