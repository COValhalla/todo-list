// Psuedocode
// On page load, create a default project and a default task within that project
import { createDefaultProject, findProject } from './projects';
import {
  addProjBtnDOM,
  addProjMainDOM,
  addTodoDOM,
  editProjListener,
} from './domManip';
import { createDefaultTodo, findTodo } from './todos';

// Initialiation of the default webpage
// eslint-disable-next-line wrap-iife
(function init() {
  createDefaultProject();
  const defaultProject = findProject(1);
  addProjBtnDOM(defaultProject);
  addProjMainDOM(defaultProject);
  createDefaultTodo();
  const defaultTodo = findTodo(1);
  addTodoDOM(defaultTodo);
  editProjListener();
})();

// Add 'Edit Project' function

// Add 'Expand Todo' function

// How to handle below two creations? Modal? contenteditable?
// https://www.w3schools.com/howto/howto_js_popup_form.asp
// Add 'Create Todo' function and add to currently displayed Project
// Add 'Create Project' function, clear DOM, and update with new Project
// On Project click, clear DOM, and update with clicked Project

// Uncertaintities
// Edit project interaction, change to form?
// contenteditable
