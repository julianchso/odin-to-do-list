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

const clearContent = function () {
  const content = document.querySelector('#content');
  content.textContent = '';
};

const setTitle = function () {
  const sidebarBtns = document.querySelectorAll('.sidebarBtn');
  const content = document.querySelector('#content');
  sidebarBtns.forEach((sidebarBtn) => {
    sidebarBtn.addEventListener('click', function () {
      console.log(sidebarBtn.textContent);
      const title = document.createElement('div');
      title = sidebarBtn.textContent;
      content.appendChild(title);
    });
  });
};

export { toggleSidebar, switchSidebar, setTitle };
