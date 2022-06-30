// Psuedocode
// On page load, create a default project and a default task within that project
import {
  createProject,
  findProject,
  getProjects,
  retriveProjLocalStorage,
  updateProjects,
} from './projects';
import {
  addProjBtnDOM,
  addProjMainDOM,
  addTodoDOM,
  createProjListener,
  createTodoListener,
  editProjListener,
  projModalCancel,
  projModalSubmit,
  switchProjListener,
  todoModalCancel,
  todoModalSubmit,
  storageAvailable,
} from './domManip';
import { createTodo, findTodo, getTodos } from './todos';

// Initialiation of the default webpage
// eslint-disable-next-line wrap-iife
(function init() {
  if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness
    const projects = retriveProjLocalStorage();
    updateProjects(projects);
  } else {
    // Creating default project
    createProject(
      'Default Project',
      'You can enter a project description here!',
    );
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
    // create new project
    createProjListener();
    projModalCancel();
    projModalSubmit();
    // Debugging. Retrive current projects and todos
    console.log('Initial Projects: ', getProjects());
    console.log('Initial Todos: ', getTodos());
  }

  // addProjLocalStorage();
  // retriveProjLocalStorage();
})();

// Add 'Edit Project' function - DONE
// Write function for clearing DOM -- DONE
// Add project switching -- DONE
// Add new todos -- DONE
// Add 'Create Project' function, clear DOM, and update with new Project -- DONE

// Add 'Expand Todo' function
// Add local storage
