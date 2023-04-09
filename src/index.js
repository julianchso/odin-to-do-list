import './styles/main.scss';
import { eventListeners } from './handlers';
import { toggleSidebar, switchSidebar, clearContent, setTitle } from './render.js';

// Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module.
// If you need multiples of something (players!), create them with factories.

// Task: factories or classes

// Project List: Module

// handlers.js
eventListeners();

// render.js

// index.js: bring it all together

clearContent();
setTitle();

const loadPage = (() => {
  // const all = document.querySelector('#all');
  // const today = document.querySelector('#today');
  // const upcoming = document.querySelector('#upcoming');
  // const complete = document.querySelector('#complete');

  document.addEventListener('click', (e) => {
    const target = e.target.innerText;

    if (target == 'All') all();
    if (target == 'Today') today();
    if (target == 'Upcoming') upcoming();
    if (target == 'Complete') complete();
  });

  function all() {
    console.log('load all');
    setTitle();
    // loadAll();
  }

  function today() {
    console.log('load today');
    setTitle();
    // loadToday();
  }

  function upcoming() {
    console.log('load upcoming');
    setTitle();
    // loadUpcoming()
  }

  function complete() {
    console.log('load complete');
    setTitle();
    // loadComplete();
  }
})();
