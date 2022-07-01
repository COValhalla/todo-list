import {
  createProject,
  findProject,
  getProjects,
  retrieveProjLocalStorag,
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
  generateDOM,
  addAllListeners,
} from './domManip';
import {
  createTodo,
  findTodo,
  getTodos,
  retriveTodoLocalStorage,
  updateTodos,
} from './todos';

// Initialiation of the default webpage
// eslint-disable-next-line wrap-iife
(function init() {
  if (
    // Load saved projects and todos
    localStorage.getItem('projectStorage') !== null &&
    storageAvailable('localStorage')
  ) {
    console.log('Local Storage');
    const projects = retrieveProjLocalStorag();
    updateProjects(projects);

    const todos = retriveTodoLocalStorage();
    updateTodos(todos);

    projects.forEach((element) => {
      addProjBtnDOM(element);
    });
    console.log('Test', projects[0].projectID);

    generateDOM(projects[0].projectID);
    addAllListeners();
  } else {
    // Generate default projects and todos
    console.log('No Local Storage');
    // Creating default project

    createProject(
      'Default Project',
      'You can enter a project description here!',
    );

    addProjBtnDOM(findProject(1));
    console.log('here');
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

    addAllListeners();
  }

  // addProjLocalStorage();
  // retrieveProjLocalStorag();
})();

// Add 'Edit Project' function - DONE
// Write function for clearing DOM -- DONE
// Add project switching -- DONE
// Add new todos -- DONE
// Add 'Create Project' function, clear DOM, and update with new Project -- DONE

// Add 'Expand Todo' function
// Add local storage -- IN PROGRESS
// Fix project counters and todo counter generation
