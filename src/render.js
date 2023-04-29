import { eventListeners } from './handlers';
import { formatDistance, subDa } from 'date-fns';
import { Task } from './task';
import { Project, myProject, getId } from './project';

const toggleSidebar = function () {
  const sidebar = document.querySelector('#sidebar');
  sidebar.classList.toggle('hidden');
};

const clearContent = function () {
  const content = document.querySelector('#content');
  content.textContent = '';
};

const setTitle = function () {
  const sidebarBtns = document.querySelectorAll('.sidebarBtn');
  const content = document.querySelector('#content');

  sidebarBtns.forEach((sidebarBtn) => {
    sidebarBtn.addEventListener('click', function () {
      clearContent();
      let title = document.createElement('h2');
      title.textContent = sidebarBtn.textContent;
      content.appendChild(title);
    });
  });
};

const addTaskBtn = function () {
  const content = document.querySelector('#content');
  if (content.querySelector('.addTask')) {
    return;
  }

  // create addTask div that has child nodes of the add task button and a child that includes all inputs.
  const addTask = document.createElement('span');
  addTask.classList.add('addTask');

  const addTask__btn = document.createElement('button');
  addTask.appendChild(addTask__btn);

  addTask__btn.innerHTML = '<i class="fa-thin fa-plus icon"></i><span> Add task</span>';
  addTask__btn.classList.add('addTask__btn');

  content.appendChild(addTask);

  const addTask__form = document.createElement('form');
  addTask__form.classList.add('addTask__form');
  addTask__form.classList.add('hidden');

  document.addEventListener('click', function (e) {
    const target = e.target.closest('.addTask__btn');
    if (target) {
      addTask__form.classList.remove('hidden');
      addTask__btn.classList.add('hidden');
    }
  });

  //TODO: break up add task button and task inputs into two functions?
  const addTask__title = document.createElement('textarea');
  addTask__form.appendChild(addTask__title);
  addTask__title.classList.add('addTask__title');
  addTask__title.classList.add('font-main');
  addTask__title.setAttribute('placeholder', 'Task Name');

  const addTask__desc = document.createElement('textarea');
  addTask__form.appendChild(addTask__desc);
  addTask__desc.classList.add('addTask__desc');
  addTask__desc.classList.add('font-main');
  addTask__desc.setAttribute('placeholder', 'Description');

  // priority
  const addTask__priority_dropdown = document.createElement('select');
  addTask__priority_dropdown.classList.add('addTask__priority-dropdown');

  const addTask__priority_noSelection = document.createElement('option');
  addTask__priority_noSelection.textContent = 'Priority';
  addTask__priority_noSelection.setAttribute('value', 'no priority');
  addTask__priority_dropdown.appendChild(addTask__priority_noSelection);

  const addTask__priority_high = document.createElement('option');
  addTask__priority_high.setAttribute('value', 'high');
  addTask__priority_high.textContent = 'high';
  addTask__priority_dropdown.appendChild(addTask__priority_high);

  const addTask__priority_med = document.createElement('option');
  addTask__priority_med.setAttribute('value', 'med');
  addTask__priority_med.textContent = 'med';
  addTask__priority_dropdown.appendChild(addTask__priority_med);

  const addTask__priority_low = document.createElement('option');
  addTask__priority_low.setAttribute('value', 'low');
  addTask__priority_low.textContent = 'low';
  addTask__priority_dropdown.appendChild(addTask__priority_low);

  addTask__form.appendChild(addTask__priority_dropdown);

  addTask.appendChild(addTask__form);

  // button for date input
  const addTask__dueDate = document.createElement('input');
  addTask__dueDate.setAttribute('type', 'date');
  addTask__dueDate.classList.add('addTask__dueDate');

  addTask__form.appendChild(addTask__dueDate);

  // START: TODO get list of projects

  // dropdown for project list
  const addTask__projects = document.createElement('select');
  addTask__projects.classList.add('addTask__projects-dropdown');
  const addTask__projects_inbox = document.createElement('option');
  addTask__projects_inbox.textContent = 'Inbox';
  addTask__projects.appendChild(addTask__projects_inbox);

  let data = localStorage.getItem('data');
  let projects = data ? JSON.parse(data) : [];

  projects.forEach((project) => {
    let projectSelection = document.createElement('option');
    projectSelection.textContent = project._name;
    addTask__projects.appendChild(projectSelection);
    // document.createElement('option');
    // addTask__priority_noSelection.textContent = project._name;
    // addTask__priority_noSelection.setAttribute('value', 'no priority');
  });

  addTask__form.appendChild(addTask__projects);

  // END: TODO get list of projects

  // cancel and submit task button
  const addTask__btn_cancel = document.createElement('button');
  addTask__btn_cancel.classList.add('addTask__btn_cancel');
  addTask__btn_cancel.classList.add('btn-secondary');
  addTask__btn_cancel.setAttribute('type', 'button');
  addTask__btn_cancel.textContent = 'Cancel';
  addTask__form.appendChild(addTask__btn_cancel);

  const addTask__btn_submit = document.createElement('button');
  addTask__btn_submit.classList.add('addTask__btn_submit');
  addTask__btn_submit.classList.add('btn-secondary');
  addTask__btn_submit.setAttribute('type', 'button');
  addTask__btn_submit.textContent = 'Add Task';
  addTask__form.appendChild(addTask__btn_submit);

  content.appendChild(addTask);
};

const showTaskBtn = function () {
  const addTask__btn = document.querySelector('.addTask__btn');
  addTask__btn.classList.remove('hidden');
};

const addTask_form_hide = function () {
  const addTask__form = document.querySelector('.addTask__form');
  addTask__form.classList.add('hidden');
};

const showModal = function () {
  const modalProject__ctn = document.querySelector('.modalProject__ctn');
  modalProject__ctn.classList.remove('hidden');
};

const hideModal = function () {
  const modalProject__ctn = document.querySelector('.modalProject__ctn');

  modalProject__ctn.classList.add('hidden');
};

// TODO
const switchSidebar = function () {
  const windowSize700 = window.matchMedia('(min-width: 600px)');
  if (windowSize700) {
    sidebar.classList.remove('hidden');
  } else if (!windowSize700) {
    sidebar.classList.add('hidden');
  }
};
// end TODO

const renderProjects = function () {
  let data = JSON.parse(localStorage.getItem('data'));

  const projectCtn = document.querySelector('.projectCtn');

  const project__listCtn = document.querySelector('.project__listCtn');
  project__listCtn.textContent = '';

  const project__list = document.createElement('ul');
  project__list.setAttribute('class', 'project__list');

  data.forEach((project) => {
    const project__name = document.createElement('li');
    const project__btn = document.createElement('button');
    project__btn.value = project._name;
    project__btn.textContent = project._name;

    project__btn.classList.add('sidebarBtn');

    project__name.appendChild(project__btn);
    project__list.appendChild(project__name);
  });

  project__listCtn.appendChild(project__list);
  projectCtn.appendChild(project__listCtn);
};

export {
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
};
