import { eventListeners } from './handlers';

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
  const span = document.createElement('span');
  const addTaskBtn = document.createElement('button');

  addTaskBtn.innerHTML = '<i class="fa-thin fa-plus icon"></i><span> Add task</span>';

  addTaskBtn.id = 'addTaskBtn';

  span.appendChild(addTaskBtn);
  content.appendChild(span);
};

const addTaskBox = function () {
  const content = document.querySelector('#content');
  const inputBox = document.createElement('input');

  content.appendChild(inputBox);
};

export { toggleSidebar, switchSidebar, clearContent, setTitle, addTaskBox, addTaskBtn };
