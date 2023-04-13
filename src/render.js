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

  const addTask = document.createElement('span');

  const addTask__btn = document.createElement('button');
  addTask__btn.innerHTML = '<i class="fa-thin fa-plus icon"></i><span> Add task</span>';
  addTask__btn.classList.add('addTask__btn');

  if (addTask.children.length > 1) {
    return;
  }

  addTask.appendChild(addTask__btn);

  const addTask__title = document.createElement('textarea');
  addTask.appendChild(addTask__title);

  const addTask__desc = document.createElement('textarea');
  addTask.appendChild(addTask__desc);

  const addTask__inputs = document.createElement('div');
  addTask.appendChild(addTask__inputs);

  const addTask__priority = document.createElement('div');
  const addTask__priority_label = document.createElement('span');
  const addTask__priority_low = document.createElement('input');
  const addTask__priority_med = document.createElement('input');
  const addTask__priority_high = document.createElement('input');

  // TODO: add radio btn properties

  const addTask__dueDate = document.createElement('input');
  const addTask__btn_submit = document.createElement('button');
  addTask__inputs.appendChild(addTask__btn_submit);

  span.classList.add('addTaskCtn');
  span.appendChild(addTask);
  content.appendChild(span);

  // span has more than just the "add task" div

  addTaskBtn.textContent = 'Add Task';
  addTaskBtn.classList.add('confirmAddTaskBtn');
  taskTitleBox.classList.add('taskTitleBox');
  taskDescBox.classList.add('taskDescBox');
  cancel.textContent = 'Cancel';

  taskBoxCtn.appendChild(taskTitleBox);
  taskBoxCtn.appendChild(taskDescBox);
  span.appendChild(taskBoxCtn);
  span.appendChild(cancel);
  span.appendChild(addTaskBtn);

  content.appendChild(span);
};

export { toggleSidebar, switchSidebar, clearContent, setTitle, addTaskBox, addTaskBtn };
