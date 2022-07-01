/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domManip.js":
/*!*************************!*\
  !*** ./src/domManip.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAllListeners": () => (/* binding */ addAllListeners),
/* harmony export */   "addProjBtnDOM": () => (/* binding */ addProjBtnDOM),
/* harmony export */   "addProjMainDOM": () => (/* binding */ addProjMainDOM),
/* harmony export */   "addTodoDOM": () => (/* binding */ addTodoDOM),
/* harmony export */   "clearDOM": () => (/* binding */ clearDOM),
/* harmony export */   "closeForm": () => (/* binding */ closeForm),
/* harmony export */   "createProjListener": () => (/* binding */ createProjListener),
/* harmony export */   "createTodoListener": () => (/* binding */ createTodoListener),
/* harmony export */   "editProjListener": () => (/* binding */ editProjListener),
/* harmony export */   "generateDOM": () => (/* binding */ generateDOM),
/* harmony export */   "openForm": () => (/* binding */ openForm),
/* harmony export */   "projModalCancel": () => (/* binding */ projModalCancel),
/* harmony export */   "projModalSubmit": () => (/* binding */ projModalSubmit),
/* harmony export */   "storageAvailable": () => (/* binding */ storageAvailable),
/* harmony export */   "switchProjListener": () => (/* binding */ switchProjListener),
/* harmony export */   "todoModalCancel": () => (/* binding */ todoModalCancel),
/* harmony export */   "todoModalSubmit": () => (/* binding */ todoModalSubmit)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ "./src/todos.js");



function addProjBtnDOM(obj) {
  const sidebarProjects = document.querySelector('.sidebar__projects');
  const defaultProject = document.createElement('div');
  defaultProject.classList.add('sidebar__project');
  const projectBtn = document.createElement('button');
  projectBtn.classList.add('btn', 'btnSidebar');
  projectBtn.setAttribute('id', `${obj.projectID}`);
  projectBtn.textContent = `${obj.title}`;
  defaultProject.append(projectBtn);
  sidebarProjects.append(defaultProject);
}

function addProjMainDOM(obj) {
  const mainProjects = document.querySelector('.main__projects');
  const title = document.createElement('div');
  title.classList.add('main__projects__title');
  title.textContent = obj.title;
  const edit = document.createElement('div');
  edit.classList.add('main__projects__edit');
  edit.textContent = 'Edit Project';
  const desc = document.createElement('div');
  desc.classList.add('main__projects__description');
  desc.textContent = obj.desc;
  mainProjects.append(title, edit, desc);
}

function addTodoDOM(obj) {
  const todoSection = document.querySelector('.main__todos');
  const todoDIV = document.createElement('div');
  todoDIV.classList.add('main__todos__card', 'small', `${obj.projectID}`);

  const title = document.createElement('div');
  title.classList.add('card__title');
  title.textContent = obj.title;

  const dueDate = document.createElement('div');
  dueDate.classList.add('card__dueDate');
  dueDate.textContent = obj.dueDate;

  const edit = document.createElement('div');
  edit.classList.add('card__edit');
  edit.textContent = 'Expand Todo';

  todoDIV.append(title, dueDate, edit);
  todoSection.append(todoDIV);
}

function addAllTodosDOM(array) {
  array.forEach((element) => addTodoDOM(element));
}

function clearDOM() {
  // Project section
  const projTitle = document.querySelector('.main__projects__title');
  const projDesc = document.querySelector('.main__projects__description');
  const projEdit = document.querySelector('.main__projects__edit');
  if (projTitle !== null) {
    projTitle.remove();
    projDesc.remove();
    projEdit.remove();
    // Todo section
    const allTodos = document.querySelector('.main__todos');
    while (allTodos.firstChild) {
      allTodos.removeChild(allTodos.firstChild);
    }
  }
}

function generateDOM(projID) {
  const proj = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.findProject)(projID);
  addProjMainDOM(proj);
  const projTodos = (0,_todos__WEBPACK_IMPORTED_MODULE_1__.findProjTodos)(projID);
  addAllTodosDOM(projTodos);
  (0,_projects__WEBPACK_IMPORTED_MODULE_0__.updateDisplayedProj)(projID);
}

function editProjListener() {
  const editProj = document.querySelector('.main__projects__edit');
  const projSidebar = document.getElementById(`${(0,_projects__WEBPACK_IMPORTED_MODULE_0__.getDisplayedProj)()}`);
  editProj.addEventListener('click', () => {
    const title = document.querySelector('.main__projects__title');
    const desc = document.querySelector('.main__projects__description');
    if (editProj.textContent === 'Edit Project') {
      title.setAttribute('contenteditable', true);
      desc.setAttribute('contenteditable', true);
      editProj.textContent = 'Save Project';
    } else if (editProj.textContent === 'Save Project') {
      title.setAttribute('contenteditable', false);
      desc.setAttribute('contenteditable', false);
      editProj.textContent = 'Edit Project';
      projSidebar.textContent = title.textContent;
      (0,_projects__WEBPACK_IMPORTED_MODULE_0__.updateProjObj)(title.textContent, desc.textContent);
    }
  });
}
function switchProjListener() {
  const projs = document.querySelectorAll('.btnSidebar');
  Array.from(projs).forEach((element) => {
    const projID = Math.floor(element.id);
    if (projID !== (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getDisplayedProj)()) {
      element.addEventListener('click', () => {
        clearDOM();
        generateDOM(projID);
        // Need to add listeners again after clearing DOM and updating displaying project
        switchProjListener();
        editProjListener();
      });
    }
  });
}

function openForm() {
  document.getElementById('myForm').style.display = 'block';
  document.getElementById('myFormProj').style.display = 'none';
}

function closeForm() {
  document.getElementById('myForm').style.display = 'none';
  document.getElementById('myFormProj').style.display = 'none';
}

function createTodoListener() {
  const button = document.querySelector('.btnTodo');
  button.addEventListener('click', () => {
    if (document.getElementById('myForm').style.display !== 'block') {
      document.getElementById('myForm').style.display = 'block';
    } else {
      document.getElementById('myForm').style.display = 'none';
    }
  });
}

function todoModalCancel() {
  const button = document.querySelector('.cancel');
  button.addEventListener('click', () => closeForm());
}

function todoModalSubmit() {
  const button = document.querySelector('.submit');
  button.addEventListener('click', () => {
    const form = document.getElementById('myForm1');
    const title = form.elements[0].value;
    const desc = form.elements[1].value;
    const dueDate = form.elements[2].value;

    if (title !== '' && desc !== '' && dueDate !== '') {
      const newTodo = (0,_todos__WEBPACK_IMPORTED_MODULE_1__.createTodo)(title, desc, dueDate);
      addTodoDOM(newTodo);
      closeForm();
    }
  });
}

function createProjListener() {
  const button = document.querySelector('.btnProject');
  button.addEventListener('click', () => {
    if (document.getElementById('myFormProj').style.display !== 'block') {
      document.getElementById('myFormProj').style.display = 'block';
    } else {
      document.getElementById('myFormProj').style.display = 'none';
    }
  });
}

function projModalCancel() {
  const button = document.querySelector('.projCancel');
  button.addEventListener('click', () => closeForm());
}

function projModalSubmit() {
  const button = document.querySelector('.projSubmit');
  button.addEventListener('click', () => {
    const form = document.getElementById('myForm2');
    const title = form.elements[0].value;
    const desc = form.elements[1].value;

    if (title !== '' && desc !== '') {
      const newProj = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.createProject)(title, desc);
      clearDOM();
      generateDOM(newProj.projectID);
      addProjBtnDOM(newProj);
      closeForm();
    }
  });
}

function addAllListeners() {
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
}

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

// eslint-disable-next-line object-curly-newline



/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjLocalStorage": () => (/* binding */ addProjLocalStorage),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "findProject": () => (/* binding */ findProject),
/* harmony export */   "getDisplayedProj": () => (/* binding */ getDisplayedProj),
/* harmony export */   "getProjects": () => (/* binding */ getProjects),
/* harmony export */   "projectCounter": () => (/* binding */ projectCounter),
/* harmony export */   "retrieveProjLocalStorag": () => (/* binding */ retrieveProjLocalStorag),
/* harmony export */   "updateDisplayedProj": () => (/* binding */ updateDisplayedProj),
/* harmony export */   "updateProjObj": () => (/* binding */ updateProjObj),
/* harmony export */   "updateProjects": () => (/* binding */ updateProjects)
/* harmony export */ });
let projectStorage = [];
let projectCount = 0;
let displayedProj = 1;

// If project.counter undefined  && no local storage, start counting
// else, find highest stored ID, then count

function projectCounter() {
  projectCount += 1;
  localStorage.setItem('projectCounter', JSON.stringify(projectCount));

  function setProjectCounter(num) {
    projectCount = num;
  }
  return { projectCount, setProjectCounter };
}

const projectFactory = (title, desc) => {
  const projectID = projectCounter().projectCount;
  return {
    title,
    desc,
    projectID,
  };
};

function addProjLocalStorage() {
  localStorage.setItem('projectStorage', JSON.stringify(projectStorage));
}
function retrieveProjLocalStorag() {
  const retrievedObj = JSON.parse(localStorage.getItem('projectStorage'));
  return retrievedObj;
}

function createProject(title, desc) {
  const newProject = projectFactory(title, desc);
  projectStorage.push(newProject);
  addProjLocalStorage();
  return newProject;
}

function findProject(id) {
  const foundObj = projectStorage.find((element) => element.projectID === id);
  return foundObj;
}

function updateProjObj(title, desc) {
  const foundIndex = projectStorage.findIndex(
    (element) => element.projectID === displayedProj,
  );
  projectStorage[foundIndex].title = title;
  projectStorage[foundIndex].desc = desc;
  console.log('Updated Projects: ', projectStorage);
}

function getDisplayedProj() {
  return displayedProj;
}
function updateDisplayedProj(projID) {
  displayedProj = projID;
}
function getProjects() {
  return projectStorage;
}
function updateProjects(projs) {
  projectStorage = projs;
  // Set project counter
}




/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodo": () => (/* binding */ createTodo),
/* harmony export */   "findProjTodos": () => (/* binding */ findProjTodos),
/* harmony export */   "findTodo": () => (/* binding */ findTodo),
/* harmony export */   "getTodos": () => (/* binding */ getTodos),
/* harmony export */   "retriveTodoLocalStorage": () => (/* binding */ retriveTodoLocalStorage),
/* harmony export */   "todoCounter": () => (/* binding */ todoCounter),
/* harmony export */   "updateTodos": () => (/* binding */ updateTodos)
/* harmony export */ });
/* harmony import */ var _domManip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManip */ "./src/domManip.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");



let todoStorage = [];
let todoCount = 0;

function todoCounter() {
  todoCount += 1;
  localStorage.setItem('projectCounter', JSON.stringify(todoCount));

  function setTodoCounter(num) {
    todoCount = num;
  }
  return { todoCount, setTodoCounter };
}

const todoFactory = (title, description, dueDate, todoID, projectID) => ({
  title,
  description,
  dueDate,
  todoID,
  projectID,
});

function addTodoLocalStorage() {
  localStorage.setItem('todoStorage', JSON.stringify(todoStorage));
}
function retriveTodoLocalStorage() {
  const retrievedObj = JSON.parse(localStorage.getItem('todoStorage'));
  return retrievedObj;
}

function createTodo(title, desc, dueDate) {
  const todoID = todoCounter().todoCount;
  const newTodo = todoFactory(title, desc, dueDate, todoID, (0,_projects__WEBPACK_IMPORTED_MODULE_1__.getDisplayedProj)());
  todoStorage.push(newTodo);
  addTodoLocalStorage();
  return newTodo;
}

function findTodo(id) {
  const foundTodo = todoStorage.find((element) => element.todoID === id);
  return foundTodo;
}

function findProjTodos(projID) {
  // Find all todos based on projID
  const foundTodos = todoStorage.filter((obj) => obj.projectID === projID);
  return foundTodos;
}

function getTodos() {
  return todoStorage;
}
function updateTodos(todos) {
  todoStorage = todos;
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _domManip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManip */ "./src/domManip.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos */ "./src/todos.js");




// Initialiation of the default webpage
// eslint-disable-next-line wrap-iife
(function init() {
  if (
    // Load saved projects and todos
    localStorage.getItem('projectStorage') !== null &&
    (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.storageAvailable)('localStorage')
  ) {
    const projects = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.retrieveProjLocalStorag)();
    (0,_projects__WEBPACK_IMPORTED_MODULE_0__.updateProjects)(projects);

    const todos = (0,_todos__WEBPACK_IMPORTED_MODULE_2__.retriveTodoLocalStorage)();
    (0,_todos__WEBPACK_IMPORTED_MODULE_2__.updateTodos)(todos);

    projects.forEach((element) => {
      (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.addProjBtnDOM)(element);
    });

    // Set project counter
    let tempProj = 0;
    projects.forEach((element) => {
      if (tempProj <= element.projectID) {
        tempProj = element.projectID;
      }
    });
    (0,_projects__WEBPACK_IMPORTED_MODULE_0__.projectCounter)().setProjectCounter(tempProj);

    // Set todo counter
    let tempTodo = 0;
    todos.forEach((element) => {
      if (tempTodo <= element.todoID) {
        tempTodo = element.todoID;
      }
    });
    (0,_todos__WEBPACK_IMPORTED_MODULE_2__.todoCounter)().setTodoCounter(tempTodo);

    (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.generateDOM)(projects[0].projectID);
    (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.addAllListeners)();
  } else {
    // Generate default projects and todos
    console.log('No Local Storage');
    // Creating default project

    (0,_projects__WEBPACK_IMPORTED_MODULE_0__.createProject)(
      'Default Project',
      'You can enter a project description here!',
    );

    (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.addProjBtnDOM)((0,_projects__WEBPACK_IMPORTED_MODULE_0__.findProject)(1));
    (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.addProjMainDOM)((0,_projects__WEBPACK_IMPORTED_MODULE_0__.findProject)(1));
    (0,_todos__WEBPACK_IMPORTED_MODULE_2__.createTodo)(
      'A default todo',
      'You can enter a longer description/details for your todo here.',
      '08/15/2022',
    );

    const defaultTodo = (0,_todos__WEBPACK_IMPORTED_MODULE_2__.findTodo)(1);
    (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.addTodoDOM)(defaultTodo);

    // creating 2nd project example
    (0,_projects__WEBPACK_IMPORTED_MODULE_0__.createProject)(
      'Another Project',
      'Here is another project with a different description',
    );
    (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.addProjBtnDOM)((0,_projects__WEBPACK_IMPORTED_MODULE_0__.findProject)(2));

    (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.addAllListeners)();
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1vQjtBQUNnQzs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGNBQWM7QUFDakQsOEJBQThCLFVBQVU7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxjQUFjOztBQUV2RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxzREFBVztBQUMxQjtBQUNBLG9CQUFvQixxREFBYTtBQUNqQztBQUNBLEVBQUUsOERBQW1CO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQsMkRBQWdCLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHdEQUFhO0FBQ25CO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkRBQWdCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0Isa0RBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0Isd0RBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBbUJFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5UEY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGc0M7QUFDTTs7QUFFOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDREQUE0RCwyREFBZ0I7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVUU7Ozs7Ozs7VUNsRUY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDQW9CO0FBZ0JBO0FBUUg7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQWdCO0FBQ3BCO0FBQ0EscUJBQXFCLGtFQUF1QjtBQUM1QyxJQUFJLHlEQUFjOztBQUVsQixrQkFBa0IsK0RBQXVCO0FBQ3pDLElBQUksbURBQVc7O0FBRWY7QUFDQSxNQUFNLHdEQUFhO0FBQ25CLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUkseURBQWM7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLG1EQUFXOztBQUVmLElBQUksc0RBQVc7QUFDZixJQUFJLDBEQUFlO0FBQ25CLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsSUFBSSx3REFBYTtBQUNqQjtBQUNBO0FBQ0E7O0FBRUEsSUFBSSx3REFBYSxDQUFDLHNEQUFXO0FBQzdCLElBQUkseURBQWMsQ0FBQyxzREFBVztBQUM5QixJQUFJLGtEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLGdEQUFRO0FBQ2hDLElBQUkscURBQVU7O0FBRWQ7QUFDQSxJQUFJLHdEQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQWEsQ0FBQyxzREFBVzs7QUFFN0IsSUFBSSwwREFBZTtBQUNuQjs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21NYW5pcC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICB1cGRhdGVQcm9qT2JqLFxuICBnZXREaXNwbGF5ZWRQcm9qLFxuICBmaW5kUHJvamVjdCxcbiAgdXBkYXRlRGlzcGxheWVkUHJvaixcbiAgY3JlYXRlUHJvamVjdCxcbn0gZnJvbSAnLi9wcm9qZWN0cyc7XG5pbXBvcnQgeyBmaW5kUHJvalRvZG9zLCBjcmVhdGVUb2RvIH0gZnJvbSAnLi90b2Rvcyc7XG5cbmZ1bmN0aW9uIGFkZFByb2pCdG5ET00ob2JqKSB7XG4gIGNvbnN0IHNpZGViYXJQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX19wcm9qZWN0cycpO1xuICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZWZhdWx0UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyX19wcm9qZWN0Jyk7XG4gIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuU2lkZWJhcicpO1xuICBwcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtvYmoucHJvamVjdElEfWApO1xuICBwcm9qZWN0QnRuLnRleHRDb250ZW50ID0gYCR7b2JqLnRpdGxlfWA7XG4gIGRlZmF1bHRQcm9qZWN0LmFwcGVuZChwcm9qZWN0QnRuKTtcbiAgc2lkZWJhclByb2plY3RzLmFwcGVuZChkZWZhdWx0UHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2pNYWluRE9NKG9iaikge1xuICBjb25zdCBtYWluUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHMnKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnbWFpbl9fcHJvamVjdHNfX3RpdGxlJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVkaXQuY2xhc3NMaXN0LmFkZCgnbWFpbl9fcHJvamVjdHNfX2VkaXQnKTtcbiAgZWRpdC50ZXh0Q29udGVudCA9ICdFZGl0IFByb2plY3QnO1xuICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2MuY2xhc3NMaXN0LmFkZCgnbWFpbl9fcHJvamVjdHNfX2Rlc2NyaXB0aW9uJyk7XG4gIGRlc2MudGV4dENvbnRlbnQgPSBvYmouZGVzYztcbiAgbWFpblByb2plY3RzLmFwcGVuZCh0aXRsZSwgZWRpdCwgZGVzYyk7XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9ET00ob2JqKSB7XG4gIGNvbnN0IHRvZG9TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3RvZG9zJyk7XG4gIGNvbnN0IHRvZG9ESVYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb0RJVi5jbGFzc0xpc3QuYWRkKCdtYWluX190b2Rvc19fY2FyZCcsICdzbWFsbCcsIGAke29iai5wcm9qZWN0SUR9YCk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnY2FyZF9fdGl0bGUnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG5cbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2R1ZURhdGUnKTtcbiAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IG9iai5kdWVEYXRlO1xuXG4gIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWRpdC5jbGFzc0xpc3QuYWRkKCdjYXJkX19lZGl0Jyk7XG4gIGVkaXQudGV4dENvbnRlbnQgPSAnRXhwYW5kIFRvZG8nO1xuXG4gIHRvZG9ESVYuYXBwZW5kKHRpdGxlLCBkdWVEYXRlLCBlZGl0KTtcbiAgdG9kb1NlY3Rpb24uYXBwZW5kKHRvZG9ESVYpO1xufVxuXG5mdW5jdGlvbiBhZGRBbGxUb2Rvc0RPTShhcnJheSkge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiBhZGRUb2RvRE9NKGVsZW1lbnQpKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJET00oKSB7XG4gIC8vIFByb2plY3Qgc2VjdGlvblxuICBjb25zdCBwcm9qVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHNfX3RpdGxlJyk7XG4gIGNvbnN0IHByb2pEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Byb2plY3RzX19kZXNjcmlwdGlvbicpO1xuICBjb25zdCBwcm9qRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19wcm9qZWN0c19fZWRpdCcpO1xuICBpZiAocHJvalRpdGxlICE9PSBudWxsKSB7XG4gICAgcHJvalRpdGxlLnJlbW92ZSgpO1xuICAgIHByb2pEZXNjLnJlbW92ZSgpO1xuICAgIHByb2pFZGl0LnJlbW92ZSgpO1xuICAgIC8vIFRvZG8gc2VjdGlvblxuICAgIGNvbnN0IGFsbFRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3RvZG9zJyk7XG4gICAgd2hpbGUgKGFsbFRvZG9zLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGFsbFRvZG9zLnJlbW92ZUNoaWxkKGFsbFRvZG9zLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZURPTShwcm9qSUQpIHtcbiAgY29uc3QgcHJvaiA9IGZpbmRQcm9qZWN0KHByb2pJRCk7XG4gIGFkZFByb2pNYWluRE9NKHByb2opO1xuICBjb25zdCBwcm9qVG9kb3MgPSBmaW5kUHJvalRvZG9zKHByb2pJRCk7XG4gIGFkZEFsbFRvZG9zRE9NKHByb2pUb2Rvcyk7XG4gIHVwZGF0ZURpc3BsYXllZFByb2oocHJvaklEKTtcbn1cblxuZnVuY3Rpb24gZWRpdFByb2pMaXN0ZW5lcigpIHtcbiAgY29uc3QgZWRpdFByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHNfX2VkaXQnKTtcbiAgY29uc3QgcHJvalNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtnZXREaXNwbGF5ZWRQcm9qKCl9YCk7XG4gIGVkaXRQcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Byb2plY3RzX190aXRsZScpO1xuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHNfX2Rlc2NyaXB0aW9uJyk7XG4gICAgaWYgKGVkaXRQcm9qLnRleHRDb250ZW50ID09PSAnRWRpdCBQcm9qZWN0Jykge1xuICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcbiAgICAgIGRlc2Muc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcbiAgICAgIGVkaXRQcm9qLnRleHRDb250ZW50ID0gJ1NhdmUgUHJvamVjdCc7XG4gICAgfSBlbHNlIGlmIChlZGl0UHJvai50ZXh0Q29udGVudCA9PT0gJ1NhdmUgUHJvamVjdCcpIHtcbiAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgZmFsc2UpO1xuICAgICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIGZhbHNlKTtcbiAgICAgIGVkaXRQcm9qLnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCc7XG4gICAgICBwcm9qU2lkZWJhci50ZXh0Q29udGVudCA9IHRpdGxlLnRleHRDb250ZW50O1xuICAgICAgdXBkYXRlUHJvak9iaih0aXRsZS50ZXh0Q29udGVudCwgZGVzYy50ZXh0Q29udGVudCk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHN3aXRjaFByb2pMaXN0ZW5lcigpIHtcbiAgY29uc3QgcHJvanMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuU2lkZWJhcicpO1xuICBBcnJheS5mcm9tKHByb2pzKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcHJvaklEID0gTWF0aC5mbG9vcihlbGVtZW50LmlkKTtcbiAgICBpZiAocHJvaklEICE9PSBnZXREaXNwbGF5ZWRQcm9qKCkpIHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyRE9NKCk7XG4gICAgICAgIGdlbmVyYXRlRE9NKHByb2pJRCk7XG4gICAgICAgIC8vIE5lZWQgdG8gYWRkIGxpc3RlbmVycyBhZ2FpbiBhZnRlciBjbGVhcmluZyBET00gYW5kIHVwZGF0aW5nIGRpc3BsYXlpbmcgcHJvamVjdFxuICAgICAgICBzd2l0Y2hQcm9qTGlzdGVuZXIoKTtcbiAgICAgICAgZWRpdFByb2pMaXN0ZW5lcigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gb3BlbkZvcm0oKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Rm9ybVByb2onKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBjbG9zZUZvcm0oKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtUHJvaicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9MaXN0ZW5lcigpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0blRvZG8nKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtJykuc3R5bGUuZGlzcGxheSAhPT0gJ2Jsb2NrJykge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Rm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b2RvTW9kYWxDYW5jZWwoKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2VGb3JtKCkpO1xufVxuXG5mdW5jdGlvbiB0b2RvTW9kYWxTdWJtaXQoKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtMScpO1xuICAgIGNvbnN0IHRpdGxlID0gZm9ybS5lbGVtZW50c1swXS52YWx1ZTtcbiAgICBjb25zdCBkZXNjID0gZm9ybS5lbGVtZW50c1sxXS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZm9ybS5lbGVtZW50c1syXS52YWx1ZTtcblxuICAgIGlmICh0aXRsZSAhPT0gJycgJiYgZGVzYyAhPT0gJycgJiYgZHVlRGF0ZSAhPT0gJycpIHtcbiAgICAgIGNvbnN0IG5ld1RvZG8gPSBjcmVhdGVUb2RvKHRpdGxlLCBkZXNjLCBkdWVEYXRlKTtcbiAgICAgIGFkZFRvZG9ET00obmV3VG9kbyk7XG4gICAgICBjbG9zZUZvcm0oKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qTGlzdGVuZXIoKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5Qcm9qZWN0Jyk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Rm9ybVByb2onKS5zdHlsZS5kaXNwbGF5ICE9PSAnYmxvY2snKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtUHJvaicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtUHJvaicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJvak1vZGFsQ2FuY2VsKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvakNhbmNlbCcpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZUZvcm0oKSk7XG59XG5cbmZ1bmN0aW9uIHByb2pNb2RhbFN1Ym1pdCgpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2pTdWJtaXQnKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtMicpO1xuICAgIGNvbnN0IHRpdGxlID0gZm9ybS5lbGVtZW50c1swXS52YWx1ZTtcbiAgICBjb25zdCBkZXNjID0gZm9ybS5lbGVtZW50c1sxXS52YWx1ZTtcblxuICAgIGlmICh0aXRsZSAhPT0gJycgJiYgZGVzYyAhPT0gJycpIHtcbiAgICAgIGNvbnN0IG5ld1Byb2ogPSBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjKTtcbiAgICAgIGNsZWFyRE9NKCk7XG4gICAgICBnZW5lcmF0ZURPTShuZXdQcm9qLnByb2plY3RJRCk7XG4gICAgICBhZGRQcm9qQnRuRE9NKG5ld1Byb2opO1xuICAgICAgY2xvc2VGb3JtKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkQWxsTGlzdGVuZXJzKCkge1xuICBlZGl0UHJvakxpc3RlbmVyKCk7XG4gIHN3aXRjaFByb2pMaXN0ZW5lcigpO1xuICAvLyBDcmVhdGUgbmV3IHRvZG9cbiAgY3JlYXRlVG9kb0xpc3RlbmVyKCk7XG4gIHRvZG9Nb2RhbENhbmNlbCgpO1xuICB0b2RvTW9kYWxTdWJtaXQoKTtcbiAgLy8gY3JlYXRlIG5ldyBwcm9qZWN0XG4gIGNyZWF0ZVByb2pMaXN0ZW5lcigpO1xuICBwcm9qTW9kYWxDYW5jZWwoKTtcbiAgcHJvak1vZGFsU3VibWl0KCk7XG59XG5cbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICBsZXQgc3RvcmFnZTtcbiAgdHJ5IHtcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiAoXG4gICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAoZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxuICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgIHN0b3JhZ2UgJiZcbiAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgKTtcbiAgfVxufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgb2JqZWN0LWN1cmx5LW5ld2xpbmVcbmV4cG9ydCB7XG4gIGFkZFByb2pCdG5ET00sXG4gIGFkZFByb2pNYWluRE9NLFxuICBhZGRUb2RvRE9NLFxuICBjbGVhckRPTSxcbiAgZWRpdFByb2pMaXN0ZW5lcixcbiAgc3dpdGNoUHJvakxpc3RlbmVyLFxuICBjcmVhdGVUb2RvTGlzdGVuZXIsXG4gIHRvZG9Nb2RhbENhbmNlbCxcbiAgdG9kb01vZGFsU3VibWl0LFxuICBjbG9zZUZvcm0sXG4gIG9wZW5Gb3JtLFxuICBjcmVhdGVQcm9qTGlzdGVuZXIsXG4gIHByb2pNb2RhbENhbmNlbCxcbiAgcHJvak1vZGFsU3VibWl0LFxuICBzdG9yYWdlQXZhaWxhYmxlLFxuICBnZW5lcmF0ZURPTSxcbiAgYWRkQWxsTGlzdGVuZXJzLFxufTtcbiIsImxldCBwcm9qZWN0U3RvcmFnZSA9IFtdO1xubGV0IHByb2plY3RDb3VudCA9IDA7XG5sZXQgZGlzcGxheWVkUHJvaiA9IDE7XG5cbi8vIElmIHByb2plY3QuY291bnRlciB1bmRlZmluZWQgICYmIG5vIGxvY2FsIHN0b3JhZ2UsIHN0YXJ0IGNvdW50aW5nXG4vLyBlbHNlLCBmaW5kIGhpZ2hlc3Qgc3RvcmVkIElELCB0aGVuIGNvdW50XG5cbmZ1bmN0aW9uIHByb2plY3RDb3VudGVyKCkge1xuICBwcm9qZWN0Q291bnQgKz0gMTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RDb3VudGVyJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdENvdW50KSk7XG5cbiAgZnVuY3Rpb24gc2V0UHJvamVjdENvdW50ZXIobnVtKSB7XG4gICAgcHJvamVjdENvdW50ID0gbnVtO1xuICB9XG4gIHJldHVybiB7IHByb2plY3RDb3VudCwgc2V0UHJvamVjdENvdW50ZXIgfTtcbn1cblxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAodGl0bGUsIGRlc2MpID0+IHtcbiAgY29uc3QgcHJvamVjdElEID0gcHJvamVjdENvdW50ZXIoKS5wcm9qZWN0Q291bnQ7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzYyxcbiAgICBwcm9qZWN0SUQsXG4gIH07XG59O1xuXG5mdW5jdGlvbiBhZGRQcm9qTG9jYWxTdG9yYWdlKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdFN0b3JhZ2UnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0U3RvcmFnZSkpO1xufVxuZnVuY3Rpb24gcmV0cmlldmVQcm9qTG9jYWxTdG9yYWcoKSB7XG4gIGNvbnN0IHJldHJpZXZlZE9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RTdG9yYWdlJykpO1xuICByZXR1cm4gcmV0cmlldmVkT2JqO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjKSB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0RmFjdG9yeSh0aXRsZSwgZGVzYyk7XG4gIHByb2plY3RTdG9yYWdlLnB1c2gobmV3UHJvamVjdCk7XG4gIGFkZFByb2pMb2NhbFN0b3JhZ2UoKTtcbiAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGZpbmRQcm9qZWN0KGlkKSB7XG4gIGNvbnN0IGZvdW5kT2JqID0gcHJvamVjdFN0b3JhZ2UuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC5wcm9qZWN0SUQgPT09IGlkKTtcbiAgcmV0dXJuIGZvdW5kT2JqO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qT2JqKHRpdGxlLCBkZXNjKSB7XG4gIGNvbnN0IGZvdW5kSW5kZXggPSBwcm9qZWN0U3RvcmFnZS5maW5kSW5kZXgoXG4gICAgKGVsZW1lbnQpID0+IGVsZW1lbnQucHJvamVjdElEID09PSBkaXNwbGF5ZWRQcm9qLFxuICApO1xuICBwcm9qZWN0U3RvcmFnZVtmb3VuZEluZGV4XS50aXRsZSA9IHRpdGxlO1xuICBwcm9qZWN0U3RvcmFnZVtmb3VuZEluZGV4XS5kZXNjID0gZGVzYztcbiAgY29uc29sZS5sb2coJ1VwZGF0ZWQgUHJvamVjdHM6ICcsIHByb2plY3RTdG9yYWdlKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGlzcGxheWVkUHJvaigpIHtcbiAgcmV0dXJuIGRpc3BsYXllZFByb2o7XG59XG5mdW5jdGlvbiB1cGRhdGVEaXNwbGF5ZWRQcm9qKHByb2pJRCkge1xuICBkaXNwbGF5ZWRQcm9qID0gcHJvaklEO1xufVxuZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gIHJldHVybiBwcm9qZWN0U3RvcmFnZTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RzKHByb2pzKSB7XG4gIHByb2plY3RTdG9yYWdlID0gcHJvanM7XG4gIC8vIFNldCBwcm9qZWN0IGNvdW50ZXJcbn1cblxuZXhwb3J0IHtcbiAgY3JlYXRlUHJvamVjdCxcbiAgZmluZFByb2plY3QsXG4gIHVwZGF0ZVByb2pPYmosXG4gIGdldERpc3BsYXllZFByb2osXG4gIGdldFByb2plY3RzLFxuICB1cGRhdGVEaXNwbGF5ZWRQcm9qLFxuICBhZGRQcm9qTG9jYWxTdG9yYWdlLFxuICByZXRyaWV2ZVByb2pMb2NhbFN0b3JhZyxcbiAgdXBkYXRlUHJvamVjdHMsXG4gIHByb2plY3RDb3VudGVyLFxufTtcbiIsImltcG9ydCB7IGFkZFRvZG9ET00gfSBmcm9tICcuL2RvbU1hbmlwJztcbmltcG9ydCB7IGdldERpc3BsYXllZFByb2ogfSBmcm9tICcuL3Byb2plY3RzJztcblxubGV0IHRvZG9TdG9yYWdlID0gW107XG5sZXQgdG9kb0NvdW50ID0gMDtcblxuZnVuY3Rpb24gdG9kb0NvdW50ZXIoKSB7XG4gIHRvZG9Db3VudCArPSAxO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdENvdW50ZXInLCBKU09OLnN0cmluZ2lmeSh0b2RvQ291bnQpKTtcblxuICBmdW5jdGlvbiBzZXRUb2RvQ291bnRlcihudW0pIHtcbiAgICB0b2RvQ291bnQgPSBudW07XG4gIH1cbiAgcmV0dXJuIHsgdG9kb0NvdW50LCBzZXRUb2RvQ291bnRlciB9O1xufVxuXG5jb25zdCB0b2RvRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHRvZG9JRCwgcHJvamVjdElEKSA9PiAoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGR1ZURhdGUsXG4gIHRvZG9JRCxcbiAgcHJvamVjdElELFxufSk7XG5cbmZ1bmN0aW9uIGFkZFRvZG9Mb2NhbFN0b3JhZ2UoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvU3RvcmFnZScsIEpTT04uc3RyaW5naWZ5KHRvZG9TdG9yYWdlKSk7XG59XG5mdW5jdGlvbiByZXRyaXZlVG9kb0xvY2FsU3RvcmFnZSgpIHtcbiAgY29uc3QgcmV0cmlldmVkT2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb1N0b3JhZ2UnKSk7XG4gIHJldHVybiByZXRyaWV2ZWRPYmo7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG8odGl0bGUsIGRlc2MsIGR1ZURhdGUpIHtcbiAgY29uc3QgdG9kb0lEID0gdG9kb0NvdW50ZXIoKS50b2RvQ291bnQ7XG4gIGNvbnN0IG5ld1RvZG8gPSB0b2RvRmFjdG9yeSh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgdG9kb0lELCBnZXREaXNwbGF5ZWRQcm9qKCkpO1xuICB0b2RvU3RvcmFnZS5wdXNoKG5ld1RvZG8pO1xuICBhZGRUb2RvTG9jYWxTdG9yYWdlKCk7XG4gIHJldHVybiBuZXdUb2RvO1xufVxuXG5mdW5jdGlvbiBmaW5kVG9kbyhpZCkge1xuICBjb25zdCBmb3VuZFRvZG8gPSB0b2RvU3RvcmFnZS5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LnRvZG9JRCA9PT0gaWQpO1xuICByZXR1cm4gZm91bmRUb2RvO1xufVxuXG5mdW5jdGlvbiBmaW5kUHJvalRvZG9zKHByb2pJRCkge1xuICAvLyBGaW5kIGFsbCB0b2RvcyBiYXNlZCBvbiBwcm9qSURcbiAgY29uc3QgZm91bmRUb2RvcyA9IHRvZG9TdG9yYWdlLmZpbHRlcigob2JqKSA9PiBvYmoucHJvamVjdElEID09PSBwcm9qSUQpO1xuICByZXR1cm4gZm91bmRUb2Rvcztcbn1cblxuZnVuY3Rpb24gZ2V0VG9kb3MoKSB7XG4gIHJldHVybiB0b2RvU3RvcmFnZTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZVRvZG9zKHRvZG9zKSB7XG4gIHRvZG9TdG9yYWdlID0gdG9kb3M7XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVRvZG8sXG4gIGZpbmRUb2RvLFxuICBnZXRUb2RvcyxcbiAgZmluZFByb2pUb2RvcyxcbiAgcmV0cml2ZVRvZG9Mb2NhbFN0b3JhZ2UsXG4gIHVwZGF0ZVRvZG9zLFxuICB0b2RvQ291bnRlcixcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XG4gIGNyZWF0ZVByb2plY3QsXG4gIGZpbmRQcm9qZWN0LFxuICBwcm9qZWN0Q291bnRlcixcbiAgcmV0cmlldmVQcm9qTG9jYWxTdG9yYWcsXG4gIHVwZGF0ZVByb2plY3RzLFxufSBmcm9tICcuL3Byb2plY3RzJztcbmltcG9ydCB7XG4gIGFkZFByb2pCdG5ET00sXG4gIGFkZFByb2pNYWluRE9NLFxuICBhZGRUb2RvRE9NLFxuICBjcmVhdGVQcm9qTGlzdGVuZXIsXG4gIGNyZWF0ZVRvZG9MaXN0ZW5lcixcbiAgZWRpdFByb2pMaXN0ZW5lcixcbiAgcHJvak1vZGFsQ2FuY2VsLFxuICBwcm9qTW9kYWxTdWJtaXQsXG4gIHN3aXRjaFByb2pMaXN0ZW5lcixcbiAgdG9kb01vZGFsQ2FuY2VsLFxuICB0b2RvTW9kYWxTdWJtaXQsXG4gIHN0b3JhZ2VBdmFpbGFibGUsXG4gIGdlbmVyYXRlRE9NLFxuICBhZGRBbGxMaXN0ZW5lcnMsXG59IGZyb20gJy4vZG9tTWFuaXAnO1xuaW1wb3J0IHtcbiAgY3JlYXRlVG9kbyxcbiAgZmluZFRvZG8sXG4gIGdldFRvZG9zLFxuICByZXRyaXZlVG9kb0xvY2FsU3RvcmFnZSxcbiAgdXBkYXRlVG9kb3MsXG4gIHRvZG9Db3VudGVyLFxufSBmcm9tICcuL3RvZG9zJztcblxuLy8gSW5pdGlhbGlhdGlvbiBvZiB0aGUgZGVmYXVsdCB3ZWJwYWdlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgd3JhcC1paWZlXG4oZnVuY3Rpb24gaW5pdCgpIHtcbiAgaWYgKFxuICAgIC8vIExvYWQgc2F2ZWQgcHJvamVjdHMgYW5kIHRvZG9zXG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RTdG9yYWdlJykgIT09IG51bGwgJiZcbiAgICBzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKVxuICApIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IHJldHJpZXZlUHJvakxvY2FsU3RvcmFnKCk7XG4gICAgdXBkYXRlUHJvamVjdHMocHJvamVjdHMpO1xuXG4gICAgY29uc3QgdG9kb3MgPSByZXRyaXZlVG9kb0xvY2FsU3RvcmFnZSgpO1xuICAgIHVwZGF0ZVRvZG9zKHRvZG9zKTtcblxuICAgIHByb2plY3RzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGFkZFByb2pCdG5ET00oZWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICAvLyBTZXQgcHJvamVjdCBjb3VudGVyXG4gICAgbGV0IHRlbXBQcm9qID0gMDtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAodGVtcFByb2ogPD0gZWxlbWVudC5wcm9qZWN0SUQpIHtcbiAgICAgICAgdGVtcFByb2ogPSBlbGVtZW50LnByb2plY3RJRDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBwcm9qZWN0Q291bnRlcigpLnNldFByb2plY3RDb3VudGVyKHRlbXBQcm9qKTtcblxuICAgIC8vIFNldCB0b2RvIGNvdW50ZXJcbiAgICBsZXQgdGVtcFRvZG8gPSAwO1xuICAgIHRvZG9zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmICh0ZW1wVG9kbyA8PSBlbGVtZW50LnRvZG9JRCkge1xuICAgICAgICB0ZW1wVG9kbyA9IGVsZW1lbnQudG9kb0lEO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRvZG9Db3VudGVyKCkuc2V0VG9kb0NvdW50ZXIodGVtcFRvZG8pO1xuXG4gICAgZ2VuZXJhdGVET00ocHJvamVjdHNbMF0ucHJvamVjdElEKTtcbiAgICBhZGRBbGxMaXN0ZW5lcnMoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBHZW5lcmF0ZSBkZWZhdWx0IHByb2plY3RzIGFuZCB0b2Rvc1xuICAgIGNvbnNvbGUubG9nKCdObyBMb2NhbCBTdG9yYWdlJyk7XG4gICAgLy8gQ3JlYXRpbmcgZGVmYXVsdCBwcm9qZWN0XG5cbiAgICBjcmVhdGVQcm9qZWN0KFxuICAgICAgJ0RlZmF1bHQgUHJvamVjdCcsXG4gICAgICAnWW91IGNhbiBlbnRlciBhIHByb2plY3QgZGVzY3JpcHRpb24gaGVyZSEnLFxuICAgICk7XG5cbiAgICBhZGRQcm9qQnRuRE9NKGZpbmRQcm9qZWN0KDEpKTtcbiAgICBhZGRQcm9qTWFpbkRPTShmaW5kUHJvamVjdCgxKSk7XG4gICAgY3JlYXRlVG9kbyhcbiAgICAgICdBIGRlZmF1bHQgdG9kbycsXG4gICAgICAnWW91IGNhbiBlbnRlciBhIGxvbmdlciBkZXNjcmlwdGlvbi9kZXRhaWxzIGZvciB5b3VyIHRvZG8gaGVyZS4nLFxuICAgICAgJzA4LzE1LzIwMjInLFxuICAgICk7XG5cbiAgICBjb25zdCBkZWZhdWx0VG9kbyA9IGZpbmRUb2RvKDEpO1xuICAgIGFkZFRvZG9ET00oZGVmYXVsdFRvZG8pO1xuXG4gICAgLy8gY3JlYXRpbmcgMm5kIHByb2plY3QgZXhhbXBsZVxuICAgIGNyZWF0ZVByb2plY3QoXG4gICAgICAnQW5vdGhlciBQcm9qZWN0JyxcbiAgICAgICdIZXJlIGlzIGFub3RoZXIgcHJvamVjdCB3aXRoIGEgZGlmZmVyZW50IGRlc2NyaXB0aW9uJyxcbiAgICApO1xuICAgIGFkZFByb2pCdG5ET00oZmluZFByb2plY3QoMikpO1xuXG4gICAgYWRkQWxsTGlzdGVuZXJzKCk7XG4gIH1cblxuICAvLyBhZGRQcm9qTG9jYWxTdG9yYWdlKCk7XG4gIC8vIHJldHJpZXZlUHJvakxvY2FsU3RvcmFnKCk7XG59KSgpO1xuXG4vLyBBZGQgJ0VkaXQgUHJvamVjdCcgZnVuY3Rpb24gLSBET05FXG4vLyBXcml0ZSBmdW5jdGlvbiBmb3IgY2xlYXJpbmcgRE9NIC0tIERPTkVcbi8vIEFkZCBwcm9qZWN0IHN3aXRjaGluZyAtLSBET05FXG4vLyBBZGQgbmV3IHRvZG9zIC0tIERPTkVcbi8vIEFkZCAnQ3JlYXRlIFByb2plY3QnIGZ1bmN0aW9uLCBjbGVhciBET00sIGFuZCB1cGRhdGUgd2l0aCBuZXcgUHJvamVjdCAtLSBET05FXG5cbi8vIEFkZCAnRXhwYW5kIFRvZG8nIGZ1bmN0aW9uXG4vLyBBZGQgbG9jYWwgc3RvcmFnZSAtLSBJTiBQUk9HUkVTU1xuLy8gRml4IHByb2plY3QgY291bnRlcnMgYW5kIHRvZG8gY291bnRlciBnZW5lcmF0aW9uXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=