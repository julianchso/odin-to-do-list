import { Task } from './task';
import { Project } from './project';
import { eventListeners } from './handlers';

const addTask = () => {
  const title = document.querySelector('.addTask__title').value;
  const description = document.querySelector('.addTask__desc').value;
  const priority = document.querySelector('.addTask__priority-dropdown').value;
  const dueDate = document.querySelector('.addTask__dueDate').value;
  const complete = false;

  // constructor(title, description, dueDate, priority, complete)
  let newTask = new Task(title, description, dueDate, priority, complete);
  console.log(newTask);
  return newTask;
};

const addProject = () => {
  const name = document.querySelector('.modalProject__name').value;
  let newProject = new Project(name);
  console.log(newProject);
  return newProject;
};

// TODO
// const storage = () => {
//   const data =
// };

export { addTask, addProject };
