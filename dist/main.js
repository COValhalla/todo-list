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
/* harmony export */   "editProjListener": () => (/* binding */ editProjListener),
/* harmony export */   "switchProjListener": () => (/* binding */ switchProjListener)
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

function createTodoListener() {
  const button = document.querySelector('.btnTodo');
  button.addEventListener('click', () => {
    // Get current Project ID for assignment
  });
}

function createProjListener() {
  const button = document.querySelector('.btnProject');
  button.addEventListener('click', () => {});
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
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "findProject": () => (/* binding */ findProject),
/* harmony export */   "getDisplayedProj": () => (/* binding */ getDisplayedProj),
/* harmony export */   "getProjects": () => (/* binding */ getProjects),
/* harmony export */   "updateDisplayedProj": () => (/* binding */ updateDisplayedProj),
/* harmony export */   "updateProjObj": () => (/* binding */ updateProjObj)
/* harmony export */ });
const projectStorage = [];
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

function createProject(title, desc) {
  const newProject = projectFactory(title, desc);
  projectStorage.push(newProject);
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
  const defaultTodo = todoFactory(
    title,
    desc,
    dueDate,
    todoID,
    (0,_projects__WEBPACK_IMPORTED_MODULE_1__.getDisplayedProj)(),
  );

  todoStorage.push(defaultTodo);
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

const objects = [];
const test1 = {
  project: 1,
  name: 'Joe',
};
const test2 = {
  project: 2,
  name: 'Joey',
};
const test3 = {
  project: 1,
  name: 'Joseph',
};
objects.push(test1, test2, test3);
objects;

const foundProj = objects.filter((obj) => obj.project === 1);

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
  // Creating default project
  (0,_projects__WEBPACK_IMPORTED_MODULE_0__.createProject)('Default Project', 'You can enter a project description here!');
  (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.addProjBtnDOM)((0,_projects__WEBPACK_IMPORTED_MODULE_0__.findProject)(1));
  (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.addProjMainDOM)((0,_projects__WEBPACK_IMPORTED_MODULE_0__.findProject)(1));
  (0,_todos__WEBPACK_IMPORTED_MODULE_2__.createTodo)(
    'A default todo',
    'You can enter a longer description/details for your todo here.',
    '08/15/2022',
  );
  const defaultTodo = (0,_todos__WEBPACK_IMPORTED_MODULE_2__.findTodo)(1);
  (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.addTodoDOM)(defaultTodo);
  (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.editProjListener)();

  // creating 2nd project example
  (0,_projects__WEBPACK_IMPORTED_MODULE_0__.createProject)(
    'Another Project',
    'Here is another project with a different description',
  );
  (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.addProjBtnDOM)((0,_projects__WEBPACK_IMPORTED_MODULE_0__.findProject)(2));

  (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.switchProjListener)();

  // Debugging. Retrive current projects and todos
  console.log('Initial Projects: ', (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getProjects)());
  console.log('Initial Todos: ', (0,_todos__WEBPACK_IMPORTED_MODULE_2__.getTodos)());
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnREFBUTtBQUM5QixFQUFFLHFEQUFVO0FBQ1osRUFBRSwyREFBZ0I7O0FBRWxCO0FBQ0EsRUFBRSx3REFBYTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0RBQWEsQ0FBQyxzREFBVzs7QUFFM0IsRUFBRSw2REFBa0I7O0FBRXBCO0FBQ0Esb0NBQW9DLHNEQUFXO0FBQy9DLGlDQUFpQyxnREFBUTtBQUN6QyxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbU1hbmlwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHVwZGF0ZVByb2pPYmosXG4gIGdldERpc3BsYXllZFByb2osXG4gIGZpbmRQcm9qZWN0LFxuICB1cGRhdGVEaXNwbGF5ZWRQcm9qLFxufSBmcm9tICcuL3Byb2plY3RzJztcbmltcG9ydCB7IGZpbmRQcm9qVG9kb3MgfSBmcm9tICcuL3RvZG9zJztcblxuZnVuY3Rpb24gYWRkUHJvakJ0bkRPTShvYmopIHtcbiAgY29uc3Qgc2lkZWJhclByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3Byb2plY3RzJyk7XG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlZmF1bHRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJfX3Byb2plY3QnKTtcbiAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG5TaWRlYmFyJyk7XG4gIHByb2plY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsIGAke29iai5wcm9qZWN0SUR9YCk7XG4gIHByb2plY3RCdG4udGV4dENvbnRlbnQgPSBgJHtvYmoudGl0bGV9YDtcbiAgZGVmYXVsdFByb2plY3QuYXBwZW5kKHByb2plY3RCdG4pO1xuICBzaWRlYmFyUHJvamVjdHMuYXBwZW5kKGRlZmF1bHRQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvak1haW5ET00ob2JqKSB7XG4gIGNvbnN0IG1haW5Qcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19wcm9qZWN0cycpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdtYWluX19wcm9qZWN0c19fdGl0bGUnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWRpdC5jbGFzc0xpc3QuYWRkKCdtYWluX19wcm9qZWN0c19fZWRpdCcpO1xuICBlZGl0LnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCc7XG4gIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzYy5jbGFzc0xpc3QuYWRkKCdtYWluX19wcm9qZWN0c19fZGVzY3JpcHRpb24nKTtcbiAgZGVzYy50ZXh0Q29udGVudCA9IG9iai5kZXNjO1xuICBtYWluUHJvamVjdHMuYXBwZW5kKHRpdGxlLCBlZGl0LCBkZXNjKTtcbn1cblxuZnVuY3Rpb24gYWRkVG9kb0RPTShvYmopIHtcbiAgY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fdG9kb3MnKTtcbiAgY29uc3QgdG9kb0RJViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvRElWLmNsYXNzTGlzdC5hZGQoJ21haW5fX3RvZG9zX19jYXJkJywgJ3NtYWxsJywgYCR7b2JqLnByb2plY3RJRH1gKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdjYXJkX190aXRsZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcblxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgnY2FyZF9fZHVlRGF0ZScpO1xuICBkdWVEYXRlLnRleHRDb250ZW50ID0gb2JqLmR1ZURhdGU7XG5cbiAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2VkaXQnKTtcbiAgZWRpdC50ZXh0Q29udGVudCA9ICdFeHBhbmQgVG9kbyc7XG5cbiAgdG9kb0RJVi5hcHBlbmQodGl0bGUsIGR1ZURhdGUsIGVkaXQpO1xuICB0b2RvU2VjdGlvbi5hcHBlbmQodG9kb0RJVik7XG59XG5mdW5jdGlvbiBhZGRBbGxUb2Rvc0RPTShhcnJheSkge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiBhZGRUb2RvRE9NKGVsZW1lbnQpKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJET00oKSB7XG4gIC8vIFByb2plY3Qgc2VjdGlvblxuICBjb25zdCBwcm9qVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHNfX3RpdGxlJyk7XG4gIGNvbnN0IHByb2pEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Byb2plY3RzX19kZXNjcmlwdGlvbicpO1xuICBjb25zdCBwcm9qRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19wcm9qZWN0c19fZWRpdCcpO1xuICBpZiAocHJvalRpdGxlICE9PSBudWxsKSB7XG4gICAgcHJvalRpdGxlLnJlbW92ZSgpO1xuICAgIHByb2pEZXNjLnJlbW92ZSgpO1xuICAgIHByb2pFZGl0LnJlbW92ZSgpO1xuICAgIC8vIFRvZG8gc2VjdGlvblxuICAgIGNvbnN0IGFsbFRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3RvZG9zJyk7XG4gICAgd2hpbGUgKGFsbFRvZG9zLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGFsbFRvZG9zLnJlbW92ZUNoaWxkKGFsbFRvZG9zLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZURPTShwcm9qSUQpIHtcbiAgY29uc3QgcHJvaiA9IGZpbmRQcm9qZWN0KHByb2pJRCk7XG4gIGFkZFByb2pNYWluRE9NKHByb2opO1xuXG4gIGNvbnN0IHByb2pUb2RvcyA9IGZpbmRQcm9qVG9kb3MocHJvaklEKTtcbiAgYWRkQWxsVG9kb3NET00ocHJvalRvZG9zKTtcbiAgdXBkYXRlRGlzcGxheWVkUHJvaihwcm9qSUQpO1xufVxuXG5mdW5jdGlvbiBlZGl0UHJvakxpc3RlbmVyKCkge1xuICBjb25zdCBlZGl0UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19wcm9qZWN0c19fZWRpdCcpO1xuICBjb25zdCBwcm9qU2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2dldERpc3BsYXllZFByb2ooKX1gKTtcbiAgZWRpdFByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHNfX3RpdGxlJyk7XG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19wcm9qZWN0c19fZGVzY3JpcHRpb24nKTtcbiAgICBpZiAoZWRpdFByb2oudGV4dENvbnRlbnQgPT09ICdFZGl0IFByb2plY3QnKSB7XG4gICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIHRydWUpO1xuICAgICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIHRydWUpO1xuICAgICAgZWRpdFByb2oudGV4dENvbnRlbnQgPSAnU2F2ZSBQcm9qZWN0JztcbiAgICB9IGVsc2UgaWYgKGVkaXRQcm9qLnRleHRDb250ZW50ID09PSAnU2F2ZSBQcm9qZWN0Jykge1xuICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCBmYWxzZSk7XG4gICAgICBkZXNjLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgZmFsc2UpO1xuICAgICAgZWRpdFByb2oudGV4dENvbnRlbnQgPSAnRWRpdCBQcm9qZWN0JztcbiAgICAgIHByb2pTaWRlYmFyLnRleHRDb250ZW50ID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICB1cGRhdGVQcm9qT2JqKHRpdGxlLnRleHRDb250ZW50LCBkZXNjLnRleHRDb250ZW50KTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gc3dpdGNoUHJvakxpc3RlbmVyKCkge1xuICBjb25zdCBwcm9qcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG5TaWRlYmFyJyk7XG4gIEFycmF5LmZyb20ocHJvanMpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBwcm9qSUQgPSBNYXRoLmZsb29yKGVsZW1lbnQuaWQpO1xuICAgIGlmIChwcm9qSUQgIT09IGdldERpc3BsYXllZFByb2ooKSkge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xlYXJET00oKTtcbiAgICAgICAgZ2VuZXJhdGVET00ocHJvaklEKTtcbiAgICAgICAgLy8gTmVlZCB0byBhZGQgbGlzdGVuZXJzIGFnYWluIGFmdGVyIGNsZWFyaW5nIERPTSBhbmQgdXBkYXRpbmcgZGlzcGxheWluZyBwcm9qZWN0XG4gICAgICAgIHN3aXRjaFByb2pMaXN0ZW5lcigpO1xuICAgICAgICBlZGl0UHJvakxpc3RlbmVyKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvTGlzdGVuZXIoKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5Ub2RvJyk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyBHZXQgY3VycmVudCBQcm9qZWN0IElEIGZvciBhc3NpZ25tZW50XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qTGlzdGVuZXIoKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5Qcm9qZWN0Jyk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHt9KTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG9iamVjdC1jdXJseS1uZXdsaW5lXG5leHBvcnQge1xuICBhZGRQcm9qQnRuRE9NLFxuICBhZGRQcm9qTWFpbkRPTSxcbiAgYWRkVG9kb0RPTSxcbiAgY2xlYXJET00sXG4gIGVkaXRQcm9qTGlzdGVuZXIsXG4gIHN3aXRjaFByb2pMaXN0ZW5lcixcbn07XG4iLCJjb25zdCBwcm9qZWN0U3RvcmFnZSA9IFtdO1xubGV0IGRpc3BsYXllZFByb2ogPSAxO1xuXG5mdW5jdGlvbiBwcm9qZWN0Q291bnRlcigpIHtcbiAgaWYgKHR5cGVvZiBwcm9qZWN0Q291bnRlci5jb3VudGVyID09PSAndW5kZWZpbmVkJykge1xuICAgIHByb2plY3RDb3VudGVyLmNvdW50ZXIgPSAwO1xuICB9XG4gIHByb2plY3RDb3VudGVyLmNvdW50ZXIgKz0gMTtcbiAgcmV0dXJuIHByb2plY3RDb3VudGVyLmNvdW50ZXI7XG59XG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9ICh0aXRsZSwgZGVzYykgPT4ge1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSAoKSA9PiBjb25zb2xlLmxvZyh0aXRsZSk7XG4gIGNvbnN0IHByb2plY3RJRCA9IHByb2plY3RDb3VudGVyKCk7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzYyxcbiAgICBwcm9qZWN0SUQsXG4gICAgcHJvamVjdFRpdGxlLFxuICB9O1xufTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSwgZGVzYykge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkodGl0bGUsIGRlc2MpO1xuICBwcm9qZWN0U3RvcmFnZS5wdXNoKG5ld1Byb2plY3QpO1xufVxuXG5mdW5jdGlvbiBmaW5kUHJvamVjdChpZCkge1xuICBjb25zdCBmb3VuZE9iaiA9IHByb2plY3RTdG9yYWdlLmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQucHJvamVjdElEID09PSBpZCk7XG4gIHJldHVybiBmb3VuZE9iajtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvak9iaih0aXRsZSwgZGVzYykge1xuICBjb25zdCBmb3VuZEluZGV4ID0gcHJvamVjdFN0b3JhZ2UuZmluZEluZGV4KFxuICAgIChlbGVtZW50KSA9PiBlbGVtZW50LnByb2plY3RJRCA9PT0gZGlzcGxheWVkUHJvaixcbiAgKTtcbiAgcHJvamVjdFN0b3JhZ2VbZm91bmRJbmRleF0udGl0bGUgPSB0aXRsZTtcbiAgcHJvamVjdFN0b3JhZ2VbZm91bmRJbmRleF0uZGVzYyA9IGRlc2M7XG4gIGNvbnNvbGUubG9nKCdVcGRhdGVkIFByb2plY3RzOiAnLCBwcm9qZWN0U3RvcmFnZSk7XG59XG5cbmZ1bmN0aW9uIGdldERpc3BsYXllZFByb2ooKSB7XG4gIHJldHVybiBkaXNwbGF5ZWRQcm9qO1xufVxuZnVuY3Rpb24gdXBkYXRlRGlzcGxheWVkUHJvaihwcm9qSUQpIHtcbiAgZGlzcGxheWVkUHJvaiA9IHByb2pJRDtcbn1cbmZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICByZXR1cm4gcHJvamVjdFN0b3JhZ2U7XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVByb2plY3QsXG4gIGZpbmRQcm9qZWN0LFxuICB1cGRhdGVQcm9qT2JqLFxuICBnZXREaXNwbGF5ZWRQcm9qLFxuICBnZXRQcm9qZWN0cyxcbiAgdXBkYXRlRGlzcGxheWVkUHJvaixcbn07XG4iLCJpbXBvcnQgeyBhZGRUb2RvRE9NIH0gZnJvbSAnLi9kb21NYW5pcCc7XG5pbXBvcnQgeyBnZXREaXNwbGF5ZWRQcm9qIH0gZnJvbSAnLi9wcm9qZWN0cyc7XG5cbmNvbnN0IHRvZG9TdG9yYWdlID0gW107XG5cbmZ1bmN0aW9uIHRvZG9Db3VudGVyKCkge1xuICBpZiAodHlwZW9mIHRvZG9Db3VudGVyLmNvdW50ZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdG9kb0NvdW50ZXIuY291bnRlciA9IDA7XG4gIH1cbiAgdG9kb0NvdW50ZXIuY291bnRlciArPSAxO1xuICByZXR1cm4gdG9kb0NvdW50ZXIuY291bnRlcjtcbn1cblxuY29uc3QgdG9kb0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCB0b2RvSUQsIHByb2plY3RJRCkgPT4gKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBkdWVEYXRlLFxuICB0b2RvSUQsXG4gIHByb2plY3RJRCxcbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVUb2RvKHRpdGxlLCBkZXNjLCBkdWVEYXRlKSB7XG4gIGNvbnN0IHRvZG9JRCA9IHRvZG9Db3VudGVyKCk7XG4gIGNvbnN0IGRlZmF1bHRUb2RvID0gdG9kb0ZhY3RvcnkoXG4gICAgdGl0bGUsXG4gICAgZGVzYyxcbiAgICBkdWVEYXRlLFxuICAgIHRvZG9JRCxcbiAgICBnZXREaXNwbGF5ZWRQcm9qKCksXG4gICk7XG5cbiAgdG9kb1N0b3JhZ2UucHVzaChkZWZhdWx0VG9kbyk7XG59XG5cbmZ1bmN0aW9uIGZpbmRUb2RvKGlkKSB7XG4gIGNvbnN0IGZvdW5kVG9kbyA9IHRvZG9TdG9yYWdlLmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQudG9kb0lEID09PSBpZCk7XG4gIHJldHVybiBmb3VuZFRvZG87XG59XG5cbmZ1bmN0aW9uIGZpbmRQcm9qVG9kb3MocHJvaklEKSB7XG4gIC8vIEZpbmQgYWxsIHRvZG9zIGJhc2VkIG9uIHByb2pJRFxuICBjb25zdCBmb3VuZFRvZG9zID0gdG9kb1N0b3JhZ2UuZmlsdGVyKChvYmopID0+IG9iai5wcm9qZWN0SUQgPT09IHByb2pJRCk7XG4gIHJldHVybiBmb3VuZFRvZG9zO1xufVxuXG5jb25zdCBvYmplY3RzID0gW107XG5jb25zdCB0ZXN0MSA9IHtcbiAgcHJvamVjdDogMSxcbiAgbmFtZTogJ0pvZScsXG59O1xuY29uc3QgdGVzdDIgPSB7XG4gIHByb2plY3Q6IDIsXG4gIG5hbWU6ICdKb2V5Jyxcbn07XG5jb25zdCB0ZXN0MyA9IHtcbiAgcHJvamVjdDogMSxcbiAgbmFtZTogJ0pvc2VwaCcsXG59O1xub2JqZWN0cy5wdXNoKHRlc3QxLCB0ZXN0MiwgdGVzdDMpO1xub2JqZWN0cztcblxuY29uc3QgZm91bmRQcm9qID0gb2JqZWN0cy5maWx0ZXIoKG9iaikgPT4gb2JqLnByb2plY3QgPT09IDEpO1xuXG5mdW5jdGlvbiBnZXRUb2RvcygpIHtcbiAgcmV0dXJuIHRvZG9TdG9yYWdlO1xufVxuXG5leHBvcnQgeyBjcmVhdGVUb2RvLCBmaW5kVG9kbywgZ2V0VG9kb3MsIGZpbmRQcm9qVG9kb3MgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gUHN1ZWRvY29kZVxuLy8gT24gcGFnZSBsb2FkLCBjcmVhdGUgYSBkZWZhdWx0IHByb2plY3QgYW5kIGEgZGVmYXVsdCB0YXNrIHdpdGhpbiB0aGF0IHByb2plY3RcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QsIGZpbmRQcm9qZWN0LCBnZXRQcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdHMnO1xuaW1wb3J0IHtcbiAgYWRkUHJvakJ0bkRPTSxcbiAgYWRkUHJvak1haW5ET00sXG4gIGFkZFRvZG9ET00sXG4gIGVkaXRQcm9qTGlzdGVuZXIsXG4gIHN3aXRjaFByb2pMaXN0ZW5lcixcbn0gZnJvbSAnLi9kb21NYW5pcCc7XG5pbXBvcnQgeyBjcmVhdGVUb2RvLCBmaW5kVG9kbywgZ2V0VG9kb3MgfSBmcm9tICcuL3RvZG9zJztcblxuLy8gSW5pdGlhbGlhdGlvbiBvZiB0aGUgZGVmYXVsdCB3ZWJwYWdlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgd3JhcC1paWZlXG4oZnVuY3Rpb24gaW5pdCgpIHtcbiAgLy8gQ3JlYXRpbmcgZGVmYXVsdCBwcm9qZWN0XG4gIGNyZWF0ZVByb2plY3QoJ0RlZmF1bHQgUHJvamVjdCcsICdZb3UgY2FuIGVudGVyIGEgcHJvamVjdCBkZXNjcmlwdGlvbiBoZXJlIScpO1xuICBhZGRQcm9qQnRuRE9NKGZpbmRQcm9qZWN0KDEpKTtcbiAgYWRkUHJvak1haW5ET00oZmluZFByb2plY3QoMSkpO1xuICBjcmVhdGVUb2RvKFxuICAgICdBIGRlZmF1bHQgdG9kbycsXG4gICAgJ1lvdSBjYW4gZW50ZXIgYSBsb25nZXIgZGVzY3JpcHRpb24vZGV0YWlscyBmb3IgeW91ciB0b2RvIGhlcmUuJyxcbiAgICAnMDgvMTUvMjAyMicsXG4gICk7XG4gIGNvbnN0IGRlZmF1bHRUb2RvID0gZmluZFRvZG8oMSk7XG4gIGFkZFRvZG9ET00oZGVmYXVsdFRvZG8pO1xuICBlZGl0UHJvakxpc3RlbmVyKCk7XG5cbiAgLy8gY3JlYXRpbmcgMm5kIHByb2plY3QgZXhhbXBsZVxuICBjcmVhdGVQcm9qZWN0KFxuICAgICdBbm90aGVyIFByb2plY3QnLFxuICAgICdIZXJlIGlzIGFub3RoZXIgcHJvamVjdCB3aXRoIGEgZGlmZmVyZW50IGRlc2NyaXB0aW9uJyxcbiAgKTtcbiAgYWRkUHJvakJ0bkRPTShmaW5kUHJvamVjdCgyKSk7XG5cbiAgc3dpdGNoUHJvakxpc3RlbmVyKCk7XG5cbiAgLy8gRGVidWdnaW5nLiBSZXRyaXZlIGN1cnJlbnQgcHJvamVjdHMgYW5kIHRvZG9zXG4gIGNvbnNvbGUubG9nKCdJbml0aWFsIFByb2plY3RzOiAnLCBnZXRQcm9qZWN0cygpKTtcbiAgY29uc29sZS5sb2coJ0luaXRpYWwgVG9kb3M6ICcsIGdldFRvZG9zKCkpO1xufSkoKTtcblxuLy8gQWRkICdFZGl0IFByb2plY3QnIGZ1bmN0aW9uIC0gRE9ORVxuLy8gV3JpdGUgZnVuY3Rpb24gZm9yIGNsZWFyaW5nIERPTSAtLSBET05FXG4vLyBBZGQgcHJvamVjdCBzd2l0Y2hpbmdcblxuLy8gQWRkICdFeHBhbmQgVG9kbycgZnVuY3Rpb25cblxuLy8gSG93IHRvIGhhbmRsZSBiZWxvdyB0d28gY3JlYXRpb25zPyBNb2RhbD8gY29udGVudGVkaXRhYmxlP1xuLy8gaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9ob3d0by9ob3d0b19qc19wb3B1cF9mb3JtLmFzcFxuLy8gQWRkICdDcmVhdGUgVG9kbycgZnVuY3Rpb24gYW5kIGFkZCB0byBjdXJyZW50bHkgZGlzcGxheWVkIFByb2plY3Rcbi8vIEFkZCAnQ3JlYXRlIFByb2plY3QnIGZ1bmN0aW9uLCBjbGVhciBET00sIGFuZCB1cGRhdGUgd2l0aCBuZXcgUHJvamVjdFxuLy8gT24gUHJvamVjdCBjbGljaywgY2xlYXIgRE9NLCBhbmQgdXBkYXRlIHdpdGggY2xpY2tlZCBQcm9qZWN0XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=