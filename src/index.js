// Psuedocode
// On page load, create a default project and a default task within that project
import { createProject, findProject, getProjects } from './projects';
import {
  addProjBtnDOM,
  addProjMainDOM,
  addTodoDOM,
  createTodoListener,
  editProjListener,
  switchProjListener,
  todoModalCancel,
  todoModalSubmit,
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

  // creating 2nd project example
  createProject(
    'Another Project',
    'Here is another project with a different description',
  );
  addProjBtnDOM(findProject(2));

  // Event listeners, eventually add into their own function
  editProjListener();
  switchProjListener();
  // Create new todo
  createTodoListener();
  todoModalCancel();
  todoModalSubmit();

  // Debugging. Retrive current projects and todos
  console.log('Initial Projects: ', getProjects());
  console.log('Initial Todos: ', getTodos());
})();

// Add 'Edit Project' function - DONE
// Write function for clearing DOM -- DONE
// Add project switching -- DONE
// Add new todos -- DONE

// Add 'Create Project' function, clear DOM, and update with new Project
// Add 'Expand Todo' function
