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
/* harmony export */   "addProjBtnDOM": () => (/* binding */ addProjBtnDOM),
/* harmony export */   "addProjMainDOM": () => (/* binding */ addProjMainDOM),
/* harmony export */   "addTodoDOM": () => (/* binding */ addTodoDOM),
/* harmony export */   "clearDOM": () => (/* binding */ clearDOM),
/* harmony export */   "closeForm": () => (/* binding */ closeForm),
/* harmony export */   "createProjListener": () => (/* binding */ createProjListener),
/* harmony export */   "createTodoListener": () => (/* binding */ createTodoListener),
/* harmony export */   "editProjListener": () => (/* binding */ editProjListener),
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
/* harmony export */   "retriveProjLocalStorage": () => (/* binding */ retriveProjLocalStorage),
/* harmony export */   "updateDisplayedProj": () => (/* binding */ updateDisplayedProj),
/* harmony export */   "updateProjObj": () => (/* binding */ updateProjObj),
/* harmony export */   "updateProjects": () => (/* binding */ updateProjects)
/* harmony export */ });
let projectStorage = [];
let displayedProj = 1;

function projectCounter() {
  if (typeof projectCounter.counter === 'undefined') {
    projectCounter.counter = 0;
  }
  projectCounter.counter += 1;
  return projectCounter.counter;
}
const projectFactory = (title, desc) => {
  const projectTitle = () => console.log(title);
  const projectID = projectCounter();
  return {
    title,
    desc,
    projectID,
    projectTitle,
  };
};

function addProjLocalStorage() {
  localStorage.setItem('projectStorage', JSON.stringify(projectStorage));
}
function retriveProjLocalStorage() {
  const retrievedObj = JSON.parse(localStorage.getItem('projectStorage'));
  return retrievedObj;
}

function createProject(title, desc) {
  const newProject = projectFactory(title, desc);
  projectStorage.push(newProject);
  addProjLocalStorage();
  retriveProjLocalStorage();
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
  console.log(projs);
  projectStorage = projs;
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
/* harmony export */   "getTodos": () => (/* binding */ getTodos)
/* harmony export */ });
/* harmony import */ var _domManip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManip */ "./src/domManip.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");



const todoStorage = [];

function todoCounter() {
  if (typeof todoCounter.counter === 'undefined') {
    todoCounter.counter = 0;
  }
  todoCounter.counter += 1;
  return todoCounter.counter;
}

const todoFactory = (title, description, dueDate, todoID, projectID) => ({
  title,
  description,
  dueDate,
  todoID,
  projectID,
});

function createTodo(title, desc, dueDate) {
  const todoID = todoCounter();
  const newTodo = todoFactory(title, desc, dueDate, todoID, (0,_projects__WEBPACK_IMPORTED_MODULE_1__.getDisplayedProj)());

  todoStorage.push(newTodo);
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
// Psuedocode
// On page load, create a default project and a default task within that project




// Initialiation of the default webpage
// eslint-disable-next-line wrap-iife
(function init() {
  if ((0,_domManip__WEBPACK_IMPORTED_MODULE_1__.storageAvailable)('localStorage')) {
    // Yippee! We can use localStorage awesomeness
    const projects = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.retriveProjLocalStorage)();
    (0,_projects__WEBPACK_IMPORTED_MODULE_0__.updateProjects)(projects);
  } else {
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

    // Event listeners, eventually add into their own function
    (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.editProjListener)();
    (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.switchProjListener)();
    // Create new todo
    (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.createTodoListener)();
    (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.todoModalCancel)();
    (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.todoModalSubmit)();
    // create new project
    (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.createProjListener)();
    (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.projModalCancel)();
    (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.projModalSubmit)();
    // Debugging. Retrive current projects and todos
    console.log('Initial Projects: ', (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getProjects)());
    console.log('Initial Todos: ', (0,_todos__WEBPACK_IMPORTED_MODULE_2__.getTodos)());
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNb0I7QUFDZ0M7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxjQUFjO0FBQ2pELDhCQUE4QixVQUFVO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsY0FBYzs7QUFFdkU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsc0RBQVc7QUFDMUI7O0FBRUEsb0JBQW9CLHFEQUFhO0FBQ2pDO0FBQ0EsRUFBRSw4REFBbUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBLGlEQUFpRCwyREFBZ0IsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0RBQWE7QUFDbkI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyREFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixrREFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQix3REFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQWlCRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoUEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBWUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VzQztBQUNNOztBQUU5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSw0REFBNEQsMkRBQWdCOztBQUU1RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRXlEOzs7Ozs7O1VDNUN6RDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBT29CO0FBY0E7QUFDcUM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkRBQWdCO0FBQ3RCO0FBQ0EscUJBQXFCLGtFQUF1QjtBQUM1QyxJQUFJLHlEQUFjO0FBQ2xCLElBQUk7QUFDSjtBQUNBLElBQUksd0RBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBYSxDQUFDLHNEQUFXO0FBQzdCLElBQUkseURBQWMsQ0FBQyxzREFBVztBQUM5QixJQUFJLGtEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0RBQVE7QUFDaEMsSUFBSSxxREFBVTs7QUFFZDtBQUNBLElBQUksd0RBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBYSxDQUFDLHNEQUFXOztBQUU3QjtBQUNBLElBQUksMkRBQWdCO0FBQ3BCLElBQUksNkRBQWtCO0FBQ3RCO0FBQ0EsSUFBSSw2REFBa0I7QUFDdEIsSUFBSSwwREFBZTtBQUNuQixJQUFJLDBEQUFlO0FBQ25CO0FBQ0EsSUFBSSw2REFBa0I7QUFDdEIsSUFBSSwwREFBZTtBQUNuQixJQUFJLDBEQUFlO0FBQ25CO0FBQ0Esc0NBQXNDLHNEQUFXO0FBQ2pELG1DQUFtQyxnREFBUTtBQUMzQzs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tTWFuaXAuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgdXBkYXRlUHJvak9iaixcbiAgZ2V0RGlzcGxheWVkUHJvaixcbiAgZmluZFByb2plY3QsXG4gIHVwZGF0ZURpc3BsYXllZFByb2osXG4gIGNyZWF0ZVByb2plY3QsXG59IGZyb20gJy4vcHJvamVjdHMnO1xuaW1wb3J0IHsgZmluZFByb2pUb2RvcywgY3JlYXRlVG9kbyB9IGZyb20gJy4vdG9kb3MnO1xuXG5mdW5jdGlvbiBhZGRQcm9qQnRuRE9NKG9iaikge1xuICBjb25zdCBzaWRlYmFyUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fcHJvamVjdHMnKTtcbiAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVmYXVsdFByb2plY3QuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcl9fcHJvamVjdCcpO1xuICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0blNpZGViYXInKTtcbiAgcHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7b2JqLnByb2plY3RJRH1gKTtcbiAgcHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IGAke29iai50aXRsZX1gO1xuICBkZWZhdWx0UHJvamVjdC5hcHBlbmQocHJvamVjdEJ0bik7XG4gIHNpZGViYXJQcm9qZWN0cy5hcHBlbmQoZGVmYXVsdFByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qTWFpbkRPTShvYmopIHtcbiAgY29uc3QgbWFpblByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Byb2plY3RzJyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ21haW5fX3Byb2plY3RzX190aXRsZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoJ21haW5fX3Byb2plY3RzX19lZGl0Jyk7XG4gIGVkaXQudGV4dENvbnRlbnQgPSAnRWRpdCBQcm9qZWN0JztcbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXNjLmNsYXNzTGlzdC5hZGQoJ21haW5fX3Byb2plY3RzX19kZXNjcmlwdGlvbicpO1xuICBkZXNjLnRleHRDb250ZW50ID0gb2JqLmRlc2M7XG4gIG1haW5Qcm9qZWN0cy5hcHBlbmQodGl0bGUsIGVkaXQsIGRlc2MpO1xufVxuXG5mdW5jdGlvbiBhZGRUb2RvRE9NKG9iaikge1xuICBjb25zdCB0b2RvU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX190b2RvcycpO1xuICBjb25zdCB0b2RvRElWID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9ESVYuY2xhc3NMaXN0LmFkZCgnbWFpbl9fdG9kb3NfX2NhcmQnLCAnc21hbGwnLCBgJHtvYmoucHJvamVjdElEfWApO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX3RpdGxlJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19kdWVEYXRlJyk7XG4gIGR1ZURhdGUudGV4dENvbnRlbnQgPSBvYmouZHVlRGF0ZTtcblxuICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVkaXQuY2xhc3NMaXN0LmFkZCgnY2FyZF9fZWRpdCcpO1xuICBlZGl0LnRleHRDb250ZW50ID0gJ0V4cGFuZCBUb2RvJztcblxuICB0b2RvRElWLmFwcGVuZCh0aXRsZSwgZHVlRGF0ZSwgZWRpdCk7XG4gIHRvZG9TZWN0aW9uLmFwcGVuZCh0b2RvRElWKTtcbn1cblxuZnVuY3Rpb24gYWRkQWxsVG9kb3NET00oYXJyYXkpIHtcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4gYWRkVG9kb0RPTShlbGVtZW50KSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRE9NKCkge1xuICAvLyBQcm9qZWN0IHNlY3Rpb25cbiAgY29uc3QgcHJvalRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Byb2plY3RzX190aXRsZScpO1xuICBjb25zdCBwcm9qRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19wcm9qZWN0c19fZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgcHJvakVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHNfX2VkaXQnKTtcbiAgaWYgKHByb2pUaXRsZSAhPT0gbnVsbCkge1xuICAgIHByb2pUaXRsZS5yZW1vdmUoKTtcbiAgICBwcm9qRGVzYy5yZW1vdmUoKTtcbiAgICBwcm9qRWRpdC5yZW1vdmUoKTtcbiAgICAvLyBUb2RvIHNlY3Rpb25cbiAgICBjb25zdCBhbGxUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX190b2RvcycpO1xuICAgIHdoaWxlIChhbGxUb2Rvcy5maXJzdENoaWxkKSB7XG4gICAgICBhbGxUb2Rvcy5yZW1vdmVDaGlsZChhbGxUb2Rvcy5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVET00ocHJvaklEKSB7XG4gIGNvbnN0IHByb2ogPSBmaW5kUHJvamVjdChwcm9qSUQpO1xuICBhZGRQcm9qTWFpbkRPTShwcm9qKTtcblxuICBjb25zdCBwcm9qVG9kb3MgPSBmaW5kUHJvalRvZG9zKHByb2pJRCk7XG4gIGFkZEFsbFRvZG9zRE9NKHByb2pUb2Rvcyk7XG4gIHVwZGF0ZURpc3BsYXllZFByb2oocHJvaklEKTtcbn1cblxuZnVuY3Rpb24gZWRpdFByb2pMaXN0ZW5lcigpIHtcbiAgY29uc3QgZWRpdFByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHNfX2VkaXQnKTtcbiAgY29uc3QgcHJvalNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtnZXREaXNwbGF5ZWRQcm9qKCl9YCk7XG4gIGVkaXRQcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Byb2plY3RzX190aXRsZScpO1xuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHNfX2Rlc2NyaXB0aW9uJyk7XG4gICAgaWYgKGVkaXRQcm9qLnRleHRDb250ZW50ID09PSAnRWRpdCBQcm9qZWN0Jykge1xuICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcbiAgICAgIGRlc2Muc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcbiAgICAgIGVkaXRQcm9qLnRleHRDb250ZW50ID0gJ1NhdmUgUHJvamVjdCc7XG4gICAgfSBlbHNlIGlmIChlZGl0UHJvai50ZXh0Q29udGVudCA9PT0gJ1NhdmUgUHJvamVjdCcpIHtcbiAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgZmFsc2UpO1xuICAgICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIGZhbHNlKTtcbiAgICAgIGVkaXRQcm9qLnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCc7XG4gICAgICBwcm9qU2lkZWJhci50ZXh0Q29udGVudCA9IHRpdGxlLnRleHRDb250ZW50O1xuICAgICAgdXBkYXRlUHJvak9iaih0aXRsZS50ZXh0Q29udGVudCwgZGVzYy50ZXh0Q29udGVudCk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHN3aXRjaFByb2pMaXN0ZW5lcigpIHtcbiAgY29uc3QgcHJvanMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuU2lkZWJhcicpO1xuICBBcnJheS5mcm9tKHByb2pzKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcHJvaklEID0gTWF0aC5mbG9vcihlbGVtZW50LmlkKTtcbiAgICBpZiAocHJvaklEICE9PSBnZXREaXNwbGF5ZWRQcm9qKCkpIHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyRE9NKCk7XG4gICAgICAgIGdlbmVyYXRlRE9NKHByb2pJRCk7XG4gICAgICAgIC8vIE5lZWQgdG8gYWRkIGxpc3RlbmVycyBhZ2FpbiBhZnRlciBjbGVhcmluZyBET00gYW5kIHVwZGF0aW5nIGRpc3BsYXlpbmcgcHJvamVjdFxuICAgICAgICBzd2l0Y2hQcm9qTGlzdGVuZXIoKTtcbiAgICAgICAgZWRpdFByb2pMaXN0ZW5lcigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gb3BlbkZvcm0oKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Rm9ybVByb2onKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBjbG9zZUZvcm0oKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtUHJvaicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9MaXN0ZW5lcigpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0blRvZG8nKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtJykuc3R5bGUuZGlzcGxheSAhPT0gJ2Jsb2NrJykge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Rm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b2RvTW9kYWxDYW5jZWwoKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2VGb3JtKCkpO1xufVxuXG5mdW5jdGlvbiB0b2RvTW9kYWxTdWJtaXQoKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtMScpO1xuICAgIGNvbnN0IHRpdGxlID0gZm9ybS5lbGVtZW50c1swXS52YWx1ZTtcbiAgICBjb25zdCBkZXNjID0gZm9ybS5lbGVtZW50c1sxXS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZm9ybS5lbGVtZW50c1syXS52YWx1ZTtcblxuICAgIGlmICh0aXRsZSAhPT0gJycgJiYgZGVzYyAhPT0gJycgJiYgZHVlRGF0ZSAhPT0gJycpIHtcbiAgICAgIGNvbnN0IG5ld1RvZG8gPSBjcmVhdGVUb2RvKHRpdGxlLCBkZXNjLCBkdWVEYXRlKTtcbiAgICAgIGFkZFRvZG9ET00obmV3VG9kbyk7XG4gICAgICBjbG9zZUZvcm0oKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qTGlzdGVuZXIoKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5Qcm9qZWN0Jyk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Rm9ybVByb2onKS5zdHlsZS5kaXNwbGF5ICE9PSAnYmxvY2snKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtUHJvaicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtUHJvaicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJvak1vZGFsQ2FuY2VsKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvakNhbmNlbCcpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZUZvcm0oKSk7XG59XG5cbmZ1bmN0aW9uIHByb2pNb2RhbFN1Ym1pdCgpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2pTdWJtaXQnKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtMicpO1xuICAgIGNvbnN0IHRpdGxlID0gZm9ybS5lbGVtZW50c1swXS52YWx1ZTtcbiAgICBjb25zdCBkZXNjID0gZm9ybS5lbGVtZW50c1sxXS52YWx1ZTtcblxuICAgIGlmICh0aXRsZSAhPT0gJycgJiYgZGVzYyAhPT0gJycpIHtcbiAgICAgIGNvbnN0IG5ld1Byb2ogPSBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjKTtcbiAgICAgIGNsZWFyRE9NKCk7XG4gICAgICBnZW5lcmF0ZURPTShuZXdQcm9qLnByb2plY3RJRCk7XG4gICAgICBhZGRQcm9qQnRuRE9NKG5ld1Byb2opO1xuICAgICAgY2xvc2VGb3JtKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gIGxldCBzdG9yYWdlO1xuICB0cnkge1xuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgY29uc3QgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpICYmXG4gICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgc3RvcmFnZSAmJlxuICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICApO1xuICB9XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBvYmplY3QtY3VybHktbmV3bGluZVxuZXhwb3J0IHtcbiAgYWRkUHJvakJ0bkRPTSxcbiAgYWRkUHJvak1haW5ET00sXG4gIGFkZFRvZG9ET00sXG4gIGNsZWFyRE9NLFxuICBlZGl0UHJvakxpc3RlbmVyLFxuICBzd2l0Y2hQcm9qTGlzdGVuZXIsXG4gIGNyZWF0ZVRvZG9MaXN0ZW5lcixcbiAgdG9kb01vZGFsQ2FuY2VsLFxuICB0b2RvTW9kYWxTdWJtaXQsXG4gIGNsb3NlRm9ybSxcbiAgb3BlbkZvcm0sXG4gIGNyZWF0ZVByb2pMaXN0ZW5lcixcbiAgcHJvak1vZGFsQ2FuY2VsLFxuICBwcm9qTW9kYWxTdWJtaXQsXG4gIHN0b3JhZ2VBdmFpbGFibGUsXG59O1xuIiwibGV0IHByb2plY3RTdG9yYWdlID0gW107XG5sZXQgZGlzcGxheWVkUHJvaiA9IDE7XG5cbmZ1bmN0aW9uIHByb2plY3RDb3VudGVyKCkge1xuICBpZiAodHlwZW9mIHByb2plY3RDb3VudGVyLmNvdW50ZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcHJvamVjdENvdW50ZXIuY291bnRlciA9IDA7XG4gIH1cbiAgcHJvamVjdENvdW50ZXIuY291bnRlciArPSAxO1xuICByZXR1cm4gcHJvamVjdENvdW50ZXIuY291bnRlcjtcbn1cbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlLCBkZXNjKSA9PiB7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9ICgpID0+IGNvbnNvbGUubG9nKHRpdGxlKTtcbiAgY29uc3QgcHJvamVjdElEID0gcHJvamVjdENvdW50ZXIoKTtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjLFxuICAgIHByb2plY3RJRCxcbiAgICBwcm9qZWN0VGl0bGUsXG4gIH07XG59O1xuXG5mdW5jdGlvbiBhZGRQcm9qTG9jYWxTdG9yYWdlKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdFN0b3JhZ2UnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0U3RvcmFnZSkpO1xufVxuZnVuY3Rpb24gcmV0cml2ZVByb2pMb2NhbFN0b3JhZ2UoKSB7XG4gIGNvbnN0IHJldHJpZXZlZE9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RTdG9yYWdlJykpO1xuICByZXR1cm4gcmV0cmlldmVkT2JqO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjKSB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0RmFjdG9yeSh0aXRsZSwgZGVzYyk7XG4gIHByb2plY3RTdG9yYWdlLnB1c2gobmV3UHJvamVjdCk7XG4gIGFkZFByb2pMb2NhbFN0b3JhZ2UoKTtcbiAgcmV0cml2ZVByb2pMb2NhbFN0b3JhZ2UoKTtcbiAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGZpbmRQcm9qZWN0KGlkKSB7XG4gIGNvbnN0IGZvdW5kT2JqID0gcHJvamVjdFN0b3JhZ2UuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC5wcm9qZWN0SUQgPT09IGlkKTtcbiAgcmV0dXJuIGZvdW5kT2JqO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qT2JqKHRpdGxlLCBkZXNjKSB7XG4gIGNvbnN0IGZvdW5kSW5kZXggPSBwcm9qZWN0U3RvcmFnZS5maW5kSW5kZXgoXG4gICAgKGVsZW1lbnQpID0+IGVsZW1lbnQucHJvamVjdElEID09PSBkaXNwbGF5ZWRQcm9qLFxuICApO1xuICBwcm9qZWN0U3RvcmFnZVtmb3VuZEluZGV4XS50aXRsZSA9IHRpdGxlO1xuICBwcm9qZWN0U3RvcmFnZVtmb3VuZEluZGV4XS5kZXNjID0gZGVzYztcbiAgY29uc29sZS5sb2coJ1VwZGF0ZWQgUHJvamVjdHM6ICcsIHByb2plY3RTdG9yYWdlKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGlzcGxheWVkUHJvaigpIHtcbiAgcmV0dXJuIGRpc3BsYXllZFByb2o7XG59XG5mdW5jdGlvbiB1cGRhdGVEaXNwbGF5ZWRQcm9qKHByb2pJRCkge1xuICBkaXNwbGF5ZWRQcm9qID0gcHJvaklEO1xufVxuZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gIHJldHVybiBwcm9qZWN0U3RvcmFnZTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RzKHByb2pzKSB7XG4gIGNvbnNvbGUubG9nKHByb2pzKTtcbiAgcHJvamVjdFN0b3JhZ2UgPSBwcm9qcztcbn1cblxuZXhwb3J0IHtcbiAgY3JlYXRlUHJvamVjdCxcbiAgZmluZFByb2plY3QsXG4gIHVwZGF0ZVByb2pPYmosXG4gIGdldERpc3BsYXllZFByb2osXG4gIGdldFByb2plY3RzLFxuICB1cGRhdGVEaXNwbGF5ZWRQcm9qLFxuICBhZGRQcm9qTG9jYWxTdG9yYWdlLFxuICByZXRyaXZlUHJvakxvY2FsU3RvcmFnZSxcbiAgdXBkYXRlUHJvamVjdHMsXG59O1xuIiwiaW1wb3J0IHsgYWRkVG9kb0RPTSB9IGZyb20gJy4vZG9tTWFuaXAnO1xuaW1wb3J0IHsgZ2V0RGlzcGxheWVkUHJvaiB9IGZyb20gJy4vcHJvamVjdHMnO1xuXG5jb25zdCB0b2RvU3RvcmFnZSA9IFtdO1xuXG5mdW5jdGlvbiB0b2RvQ291bnRlcigpIHtcbiAgaWYgKHR5cGVvZiB0b2RvQ291bnRlci5jb3VudGVyID09PSAndW5kZWZpbmVkJykge1xuICAgIHRvZG9Db3VudGVyLmNvdW50ZXIgPSAwO1xuICB9XG4gIHRvZG9Db3VudGVyLmNvdW50ZXIgKz0gMTtcbiAgcmV0dXJuIHRvZG9Db3VudGVyLmNvdW50ZXI7XG59XG5cbmNvbnN0IHRvZG9GYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgdG9kb0lELCBwcm9qZWN0SUQpID0+ICh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgdG9kb0lELFxuICBwcm9qZWN0SUQsXG59KTtcblxuZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGVzYywgZHVlRGF0ZSkge1xuICBjb25zdCB0b2RvSUQgPSB0b2RvQ291bnRlcigpO1xuICBjb25zdCBuZXdUb2RvID0gdG9kb0ZhY3RvcnkodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHRvZG9JRCwgZ2V0RGlzcGxheWVkUHJvaigpKTtcblxuICB0b2RvU3RvcmFnZS5wdXNoKG5ld1RvZG8pO1xuICByZXR1cm4gbmV3VG9kbztcbn1cblxuZnVuY3Rpb24gZmluZFRvZG8oaWQpIHtcbiAgY29uc3QgZm91bmRUb2RvID0gdG9kb1N0b3JhZ2UuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC50b2RvSUQgPT09IGlkKTtcbiAgcmV0dXJuIGZvdW5kVG9kbztcbn1cblxuZnVuY3Rpb24gZmluZFByb2pUb2Rvcyhwcm9qSUQpIHtcbiAgLy8gRmluZCBhbGwgdG9kb3MgYmFzZWQgb24gcHJvaklEXG4gIGNvbnN0IGZvdW5kVG9kb3MgPSB0b2RvU3RvcmFnZS5maWx0ZXIoKG9iaikgPT4gb2JqLnByb2plY3RJRCA9PT0gcHJvaklEKTtcbiAgcmV0dXJuIGZvdW5kVG9kb3M7XG59XG5cbmZ1bmN0aW9uIGdldFRvZG9zKCkge1xuICByZXR1cm4gdG9kb1N0b3JhZ2U7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG8sIGZpbmRUb2RvLCBnZXRUb2RvcywgZmluZFByb2pUb2RvcyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBQc3VlZG9jb2RlXG4vLyBPbiBwYWdlIGxvYWQsIGNyZWF0ZSBhIGRlZmF1bHQgcHJvamVjdCBhbmQgYSBkZWZhdWx0IHRhc2sgd2l0aGluIHRoYXQgcHJvamVjdFxuaW1wb3J0IHtcbiAgY3JlYXRlUHJvamVjdCxcbiAgZmluZFByb2plY3QsXG4gIGdldFByb2plY3RzLFxuICByZXRyaXZlUHJvakxvY2FsU3RvcmFnZSxcbiAgdXBkYXRlUHJvamVjdHMsXG59IGZyb20gJy4vcHJvamVjdHMnO1xuaW1wb3J0IHtcbiAgYWRkUHJvakJ0bkRPTSxcbiAgYWRkUHJvak1haW5ET00sXG4gIGFkZFRvZG9ET00sXG4gIGNyZWF0ZVByb2pMaXN0ZW5lcixcbiAgY3JlYXRlVG9kb0xpc3RlbmVyLFxuICBlZGl0UHJvakxpc3RlbmVyLFxuICBwcm9qTW9kYWxDYW5jZWwsXG4gIHByb2pNb2RhbFN1Ym1pdCxcbiAgc3dpdGNoUHJvakxpc3RlbmVyLFxuICB0b2RvTW9kYWxDYW5jZWwsXG4gIHRvZG9Nb2RhbFN1Ym1pdCxcbiAgc3RvcmFnZUF2YWlsYWJsZSxcbn0gZnJvbSAnLi9kb21NYW5pcCc7XG5pbXBvcnQgeyBjcmVhdGVUb2RvLCBmaW5kVG9kbywgZ2V0VG9kb3MgfSBmcm9tICcuL3RvZG9zJztcblxuLy8gSW5pdGlhbGlhdGlvbiBvZiB0aGUgZGVmYXVsdCB3ZWJwYWdlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgd3JhcC1paWZlXG4oZnVuY3Rpb24gaW5pdCgpIHtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgLy8gWWlwcGVlISBXZSBjYW4gdXNlIGxvY2FsU3RvcmFnZSBhd2Vzb21lbmVzc1xuICAgIGNvbnN0IHByb2plY3RzID0gcmV0cml2ZVByb2pMb2NhbFN0b3JhZ2UoKTtcbiAgICB1cGRhdGVQcm9qZWN0cyhwcm9qZWN0cyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQ3JlYXRpbmcgZGVmYXVsdCBwcm9qZWN0XG4gICAgY3JlYXRlUHJvamVjdChcbiAgICAgICdEZWZhdWx0IFByb2plY3QnLFxuICAgICAgJ1lvdSBjYW4gZW50ZXIgYSBwcm9qZWN0IGRlc2NyaXB0aW9uIGhlcmUhJyxcbiAgICApO1xuICAgIGFkZFByb2pCdG5ET00oZmluZFByb2plY3QoMSkpO1xuICAgIGFkZFByb2pNYWluRE9NKGZpbmRQcm9qZWN0KDEpKTtcbiAgICBjcmVhdGVUb2RvKFxuICAgICAgJ0EgZGVmYXVsdCB0b2RvJyxcbiAgICAgICdZb3UgY2FuIGVudGVyIGEgbG9uZ2VyIGRlc2NyaXB0aW9uL2RldGFpbHMgZm9yIHlvdXIgdG9kbyBoZXJlLicsXG4gICAgICAnMDgvMTUvMjAyMicsXG4gICAgKTtcbiAgICBjb25zdCBkZWZhdWx0VG9kbyA9IGZpbmRUb2RvKDEpO1xuICAgIGFkZFRvZG9ET00oZGVmYXVsdFRvZG8pO1xuXG4gICAgLy8gY3JlYXRpbmcgMm5kIHByb2plY3QgZXhhbXBsZVxuICAgIGNyZWF0ZVByb2plY3QoXG4gICAgICAnQW5vdGhlciBQcm9qZWN0JyxcbiAgICAgICdIZXJlIGlzIGFub3RoZXIgcHJvamVjdCB3aXRoIGEgZGlmZmVyZW50IGRlc2NyaXB0aW9uJyxcbiAgICApO1xuICAgIGFkZFByb2pCdG5ET00oZmluZFByb2plY3QoMikpO1xuXG4gICAgLy8gRXZlbnQgbGlzdGVuZXJzLCBldmVudHVhbGx5IGFkZCBpbnRvIHRoZWlyIG93biBmdW5jdGlvblxuICAgIGVkaXRQcm9qTGlzdGVuZXIoKTtcbiAgICBzd2l0Y2hQcm9qTGlzdGVuZXIoKTtcbiAgICAvLyBDcmVhdGUgbmV3IHRvZG9cbiAgICBjcmVhdGVUb2RvTGlzdGVuZXIoKTtcbiAgICB0b2RvTW9kYWxDYW5jZWwoKTtcbiAgICB0b2RvTW9kYWxTdWJtaXQoKTtcbiAgICAvLyBjcmVhdGUgbmV3IHByb2plY3RcbiAgICBjcmVhdGVQcm9qTGlzdGVuZXIoKTtcbiAgICBwcm9qTW9kYWxDYW5jZWwoKTtcbiAgICBwcm9qTW9kYWxTdWJtaXQoKTtcbiAgICAvLyBEZWJ1Z2dpbmcuIFJldHJpdmUgY3VycmVudCBwcm9qZWN0cyBhbmQgdG9kb3NcbiAgICBjb25zb2xlLmxvZygnSW5pdGlhbCBQcm9qZWN0czogJywgZ2V0UHJvamVjdHMoKSk7XG4gICAgY29uc29sZS5sb2coJ0luaXRpYWwgVG9kb3M6ICcsIGdldFRvZG9zKCkpO1xuICB9XG5cbiAgLy8gYWRkUHJvakxvY2FsU3RvcmFnZSgpO1xuICAvLyByZXRyaXZlUHJvakxvY2FsU3RvcmFnZSgpO1xufSkoKTtcblxuLy8gQWRkICdFZGl0IFByb2plY3QnIGZ1bmN0aW9uIC0gRE9ORVxuLy8gV3JpdGUgZnVuY3Rpb24gZm9yIGNsZWFyaW5nIERPTSAtLSBET05FXG4vLyBBZGQgcHJvamVjdCBzd2l0Y2hpbmcgLS0gRE9ORVxuLy8gQWRkIG5ldyB0b2RvcyAtLSBET05FXG4vLyBBZGQgJ0NyZWF0ZSBQcm9qZWN0JyBmdW5jdGlvbiwgY2xlYXIgRE9NLCBhbmQgdXBkYXRlIHdpdGggbmV3IFByb2plY3QgLS0gRE9ORVxuXG4vLyBBZGQgJ0V4cGFuZCBUb2RvJyBmdW5jdGlvblxuLy8gQWRkIGxvY2FsIHN0b3JhZ2VcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==