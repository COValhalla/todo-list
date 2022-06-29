// Psuedocode
// On page load, create a default project and a default task within that project
import { createProject, findProject, getProjects } from './projects';
import {
  addProjBtnDOM,
  addProjMainDOM,
  addTodoDOM,
  editProjListener,
  switchProjListener,
} from './domManip';
import { createTodo, findTodo, getTodos } from './todos';

// Initialiation of the default webpage
// eslint-disable-next-line wrap-iife
(function init() {
  // Creating default project
  createProject('Default Project', 'You can enter a project description here!');
  addProjBtnDOM(findProject(1));
  addProjMainDOM(findProject(1));
  createTodo(
    'A default todo',
    'You can enter a longer description/details for your todo here.',
    '08/15/2022',
  );
  const defaultTodo = findTodo(1);
  addTodoDOM(defaultTodo);
  editProjListener();

  // creating 2nd project example
  createProject(
    'Another Project',
    'Here is another project with a different description',
  );
  addProjBtnDOM(findProject(2));

  switchProjListener();

  // Debugging. Retrive current projects and todos
  console.log(getProjects());
  console.log(getTodos());
})();

// Add 'Edit Project' function - DONE
// Write function for clearing DOM -- DONE
// Add project switching

// Add 'Expand Todo' function

// How to handle below two creations? Modal? contenteditable?
// https://www.w3schools.com/howto/howto_js_popup_form.asp
// Add 'Create Todo' function and add to currently displayed Project
// Add 'Create Project' function, clear DOM, and update with new Project
// On Project click, clear DOM, and update with clicked Project
