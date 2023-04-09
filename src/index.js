import './styles/main.scss';
import { eventListeners } from './handlers';
import { toggleSidebar, switchSidebar, setTitle } from './render.js';
import { render } from 'sass';

console.log('hello world');

// Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module.
// If you need multiples of something (players!), create them with factories.

// Task: factories or classes

// Project List: Module

// handlers.js
eventListeners();

// render.js
setTitle();

// index.js: bring it all together
