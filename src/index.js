// import newTodo from './prototype';

// Below creates 4 prototype todos

// newTodo('a title', 'a description', '08/15/22', 'low', 'project title');
// newTodo('a title2', 'a description2', '08/15/22', 'low', 'project title2');
// newTodo('a title3', 'a description3', '08/15/22', 'low', 'project title3');
// newTodo('a title5', 'a description3', '08/15/22', 'low', 'project title3');

// Psuedocode
// On page load, create a default project and a default task within that project
import { createDefaultProject, findProject } from './projects';
import { addProjBtnDOM, addProjMainDOM, addTodoDOM } from './domManip';
import { createDefaultTodo, findTodo } from './todos';

// eslint-disable-next-line wrap-iife
(function init() {
  createDefaultProject();
  const defaultProject = findProject(1);
  addProjBtnDOM(defaultProject);
  addProjMainDOM(defaultProject);
  createDefaultTodo();
  const defaultTodo = findTodo(1);
  addTodoDOM(defaultTodo);
})();
// Create todo adds forms to the DOM, after filling them out
// clicking finish updates them and remove the submit button
// Create project clears DOM, adds new project to sidebar, adds form for filling out details

// Uncertaintities
// Edit project interaction, change to form?
// contenteditable
