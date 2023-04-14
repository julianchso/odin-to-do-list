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
  console.log('render: addTaskBtn');
  const content = document.querySelector('#content');
  const addTask = document.createElement('span');

  const addTask__btn = document.createElement('button');
  addTask__btn.innerHTML = '<i class="fa-thin fa-plus icon"></i><span> Add task</span>';
  addTask__btn.classList.add('addTask__btn');

  if (content.querySelector('.addTask')) {
    return;
  }

  addTask.classList.add('addTask');

  addTask.appendChild(addTask__btn);

  const addTask__title = document.createElement('textarea');
  addTask.appendChild(addTask__title);
  addTask__title.classList.add('addTask__title');

  const addTask__desc = document.createElement('textarea');
  addTask.appendChild(addTask__desc);
  addTask__desc.classList.add('addTask__desc');

  const addTask__inputs = document.createElement('div');
  addTask.appendChild(addTask__inputs);
  addTask__inputs.classList.add('addTask__inputs');

  const addTask__priority = document.createElement('div');
  addTask__priority.classList.add('addTask__priority');

  const addTask__priority_btn = document.createElement('button');
  addTask__priority_btn.classList.add('addTask__priority_btn');
  addTask__priority_btn.textContent = 'priority';
  addTask__priority.appendChild(addTask__priority_btn);

  const addTask__priority_list = document.createElement('div');
  addTask__priority_list.classList.add('addTask__priority_list');

  const addTask__priority_low = document.createElement('a');
  addTask__priority_low.textContent = 'low';
  addTask__priority_low.setAttribute('href', '#');

  const addTask__priority_med = document.createElement('a');
  addTask__priority_med.textContent = 'med';
  addTask__priority_med.setAttribute('href', '#');

  const addTask__priority_high = document.createElement('a');
  addTask__priority_high.textContent = 'high';
  addTask__priority_high.setAttribute('href', '#');

  addTask__priority_list.appendChild(addTask__priority_low);
  addTask__priority_list.appendChild(addTask__priority_med);
  addTask__priority_list.appendChild(addTask__priority_high);

  // TODO: add radio btn properties
  addTask__priority.appendChild(addTask__priority_list);

  addTask.appendChild(addTask__priority);

  const addTask__dueDate = document.createElement('input');
  const addTask__btn_submit = document.createElement('button');
  addTask__inputs.appendChild(addTask__btn_submit);

  content.appendChild(addTask);

  // span.classList.add('addTaskCtn');
  // span.appendChild(addTask);
  // content.appendChild(span);

  // // span has more than just the "add task" div

  // addTaskBtn.textContent = 'Add Task';
  // addTaskBtn.classList.add('confirmAddTaskBtn');
  // taskTitleBox.classList.add('taskTitleBox');
  // taskDescBox.classList.add('taskDescBox');
  // cancel.textContent = 'Cancel';

  // taskBoxCtn.appendChild(taskTitleBox);
  // taskBoxCtn.appendChild(taskDescBox);
  // span.appendChild(taskBoxCtn);
  // span.appendChild(cancel);
  // span.appendChild(addTaskBtn);

  // content.appendChild(span);
};

export { toggleSidebar, switchSidebar, clearContent, setTitle, addTaskBtn };
