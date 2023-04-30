import { Task } from './task';
import { Project } from './project';
import { eventListeners } from './handlers';

const addTask = () => {
  const title = document.querySelector('.addTask__title').value;
  const description = document.querySelector('.addTask__desc').value;
  const priority = document.querySelector('.addTask__priority-dropdown').value;
  const dueDate = document.querySelector('.addTask__dueDate').value;
  const project = document.querySelector('.addTask__projects-dropdown').value;
  const complete = false;

  // let newTask = new Task(title, description, dueDate, priority, project, complete);
  // console.log(newTask);
  // return newTask;

  addTask_clearFields();
};

const addTask_clearFields = () => {
  const title = document.querySelector('.addTask__title');
  const description = document.querySelector('.addTask__desc');
  const priority = document.querySelector('.addTask__priority-dropdown');
  const dueDate = document.querySelector('.addTask__dueDate');
  const project = document.querySelector('.addTask__projects-dropdown');
  const complete = false;

  let fields = [title, description, dueDate];

  fields.forEach((field) => {
    field.value = '';
  });

  let dropdowns = [priority, project];

  dropdowns.forEach((option) => {
    option.selectedIndex = 0;
  });
};

// create and add inbox, today, upcoming, complete projects to local storage
const setDefaultProjects = () => {
  let defaultProjects = [
    new Project('Inbox'),
    new Project('Today'),
    new Project('Upcoming'),
    new Project('Complete'),
  ];

  let data = localStorage.getItem('data');

  // TODO: see if this line gets the existing data in local storage and not create new and overwrite.
  let projects = data ? JSON.parse(data) : defaultProjects;

  localStorage.setItem('data', JSON.stringify(projects));
};

// create and add custom project to local storage
const addProjectToStorage = () => {
  let ProjectInput = document.querySelector('.modalProject__name');
  let name = ProjectInput.value;
  let data = localStorage.getItem('data');
  let newProject = new Project(name);
  let projects = data ? JSON.parse(data) : [];

  projects.push(newProject);
  localStorage.setItem('data', JSON.stringify(projects));
  ProjectInput.value = '';
};

// {"home":[{"name":"brush teeth","priority":"low","date":"2021-12-12","details":" with colgate","project":"home","checked":true},{"name":"get dressed","priority":"high","date":"2021-11-11","details":"singlet cos its hot","project":"home","checked":false},{"name":"feed jimmy","priority":"medium","date":"2021-06-09","details":"only the finest bickies","project":"home","checked":true},{"name":"asdf home","priority":"medium","date":"2023-03-31","details":"asdf home","project":"home","checked":false}],

// "today":[{"name":"get mail","priority":"medium","date":"2021-06-09","details":"im expecting something","project":"today","checked":false},{"name":"cook dinner","priority":"medium","date":"2021-06-09","details":"juicy steak","project":"today","checked":true}],

// "week":[{"name":"sport","priority":"medium","date":"2021-06-09","details":"","project":"week","checked":false}],

// "Gym":[{"name":"swim","priority":"high","date":"2021-06-09","details":"","project":"Gym","checked":false},{"name":"walk","priority":"high","date":"2021-06-09","details":"","project":"Gym","checked":false},{"name":"weights","priority":"low","date":"2021-06-09","details":"","project":"Gym","checked":false},{"name":"asdf","priority":"low","date":"2023-04-13","details":"asdf","project":"Gym","checked":false},{"name":"asdf","priority":"low","date":"2023-04-16","details":"asdfsd","project":"Gym","checked":false}],

// "wertwert":[]}

export { addTask, addProjectToStorage, setDefaultProjects };
