import { Task } from './task';
import { Project } from './project';
import { eventListeners } from './handlers';

const addTask = () => {
  const title = document.querySelector('.addTask__title').value;
  const description = document.querySelector('.addTask__desc').value;
  const priority = document.querySelector('.addTask__priority-dropdown').value;
  const dueDate = document.querySelector('.addTask__dueDate').value;
  const project = document.querySelector('.');
  const complete = false;

  // constructor(title, description, dueDate, priority, complete)
  let newTask = new Task(title, description, dueDate, priority, project, complete);
  console.log(newTask);
  return newTask;
};

const addProject = () => {
  const name = document.querySelector('.modalProject__name').value;
  let newProject = new Project(name);
  console.log(newProject);
  return newProject;
};

// TODO: pushing to object in localStorage
const addProjectToStorage = () => {
  let projects = localStorage.getItem('data') ? JSON.parse(data) : [];

  projects.push(addProject());
  localStorage.setItem('data', JSON.stringify(projects));
};

// {"home":[{"name":"brush teeth","priority":"low","date":"2021-12-12","details":" with colgate","project":"home","checked":true},{"name":"get dressed","priority":"high","date":"2021-11-11","details":"singlet cos its hot","project":"home","checked":false},{"name":"feed jimmy","priority":"medium","date":"2021-06-09","details":"only the finest bickies","project":"home","checked":true},{"name":"asdf home","priority":"medium","date":"2023-03-31","details":"asdf home","project":"home","checked":false}],

// "today":[{"name":"get mail","priority":"medium","date":"2021-06-09","details":"im expecting something","project":"today","checked":false},{"name":"cook dinner","priority":"medium","date":"2021-06-09","details":"juicy steak","project":"today","checked":true}],

// "week":[{"name":"sport","priority":"medium","date":"2021-06-09","details":"","project":"week","checked":false}],

// "Gym":[{"name":"swim","priority":"high","date":"2021-06-09","details":"","project":"Gym","checked":false},{"name":"walk","priority":"high","date":"2021-06-09","details":"","project":"Gym","checked":false},{"name":"weights","priority":"low","date":"2021-06-09","details":"","project":"Gym","checked":false},{"name":"asdf","priority":"low","date":"2023-04-13","details":"asdf","project":"Gym","checked":false},{"name":"asdf","priority":"low","date":"2023-04-16","details":"asdfsd","project":"Gym","checked":false}],

// "wertwert":[]}

export { addTask, addProject, addProjectToStorage };
