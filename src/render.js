import { eventListeners } from './handlers';
import { formatDistance, subDa } from 'date-fns';

const toggleSidebar = function () {
  const sidebar = document.querySelector('#sidebar');
  sidebar.classList.toggle('hidden');
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

  const addTask__inputs = document.createElement('div');
  addTask__inputs.classList.add('addTask__inputs');
  addTask__inputs.classList.add('hidden');

  document.addEventListener('click', function (e) {
    const target = e.target.closest('.addTask__btn');
    if (target) {
      console.log('target: add task button');
      addTask__inputs.classList.remove('hidden');
      addTask__btn.classList.add('hidden');
    }
  });

  //TODO: break up add task button and task inputs into two functions?
  const addTask__title = document.createElement('textarea');
  addTask__inputs.appendChild(addTask__title);
  addTask__title.classList.add('addTask__title');
  addTask__title.classList.add('font-main');
  addTask__title.setAttribute('placeholder', 'Task Name');

  const addTask__desc = document.createElement('textarea');
  addTask__inputs.appendChild(addTask__desc);
  addTask__desc.classList.add('addTask__desc');
  addTask__desc.classList.add('font-main');
  addTask__desc.setAttribute('placeholder', 'Description');

  const addTask__priority_dropdown = document.createElement('div');
  addTask__priority_dropdown.classList.add('addTask__priority-dropdown');

  const addTask__priority_btn = document.createElement('button');
  addTask__priority_btn.classList.add('addTask__priority-btn');
  addTask__priority_btn.classList.add('btn-secondary');
  addTask__priority_btn.textContent = 'priority';
  addTask__priority_dropdown.appendChild(addTask__priority_btn);

  const addTask__priority_list = document.createElement('div');
  addTask__priority_list.classList.add('addTask__priority-list');

  const addTask__priority_low = document.createElement('a');
  addTask__priority_low.classList.add('addTask__priority-low');
  addTask__priority_low.textContent = 'low';
  addTask__priority_low.setAttribute('href', '#');

  const addTask__priority_med = document.createElement('a');
  addTask__priority_med.classList.add('addTask__priority-med');
  addTask__priority_med.textContent = 'med';
  addTask__priority_med.setAttribute('href', '#');

  const addTask__priority_high = document.createElement('a');
  addTask__priority_high.classList.add('addTask__priority-high');
  addTask__priority_high.textContent = 'high';
  addTask__priority_high.setAttribute('href', '#');

  addTask__priority_list.appendChild(addTask__priority_low);
  addTask__priority_list.appendChild(addTask__priority_med);
  addTask__priority_list.appendChild(addTask__priority_high);

  addTask__priority_dropdown.appendChild(addTask__priority_list);

  addTask__inputs.appendChild(addTask__priority_dropdown);

  addTask.appendChild(addTask__inputs);

  const addTask__dueDate = document.createElement('input');

  const addTask__btn_cancel = document.createElement('button');
  addTask__btn_cancel.classList.add('addTask__btn-cancel');
  addTask__btn_cancel.classList.add('btn-secondary');
  addTask__btn_cancel.textContent = 'Cancel';
  addTask__inputs.appendChild(addTask__btn_cancel);

  const addTask__btn_submit = document.createElement('button');
  addTask__btn_submit.classList.add('addTask__btn-submit');
  addTask__btn_submit.classList.add('btn-secondary');
  addTask__btn_submit.textContent = 'Add Task';
  addTask__inputs.appendChild(addTask__btn_submit);

  content.appendChild(addTask);
};

const showTaskBtn = function () {
  const addTask__btn = document.querySelector('.addTask__btn');
  console.log(addTask__btn);
  addTask__btn.classList.remove('hidden');
};

const hideAddTaskInputs = function () {
  const addTask__inputs = document.querySelector('.addTask__inputs');
  addTask__inputs.classList.add('hidden');
};

export {
  toggleSidebar,
  switchSidebar,
  clearContent,
  setTitle,
  addTaskBtn,
  showTaskBtn,
  hideAddTaskInputs,
};
