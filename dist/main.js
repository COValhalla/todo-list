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
/* harmony export */   "editProjListener": () => (/* binding */ editProjListener)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");


function addProjBtnDOM(obj) {
  const sidebarProjects = document.querySelector('.sidebar__projects');
  const defaultProject = document.createElement('div');
  defaultProject.classList.add('sidebar__project', `${obj.projectID}`);
  const projectBtn = document.createElement('button');
  projectBtn.classList.add('btn', `${(0,_projects__WEBPACK_IMPORTED_MODULE_0__.getDisplayedProj)()}`);
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

function clearDOM() {
  // Project section
  const projTitle = document.querySelector('.main__projects__title');
  const projDesc = document.querySelector('.main__projects__description');
  const projEdit = document.querySelector('.main__projects__edit');
  projTitle.remove();
  projDesc.remove();
  projEdit.remove();
  // Todo section
  const allTodos = document.querySelector('.main__todos');
  while (allTodos.firstChild) {
    allTodos.removeChild(allTodos.firstChild);
  }
}

function editProjListener() {
  const editProj = document.querySelector('.main__projects__edit');
  const projSidebar = document.getElementsByClassName(
    `btn ${(0,_projects__WEBPACK_IMPORTED_MODULE_0__.getDisplayedProj)()}`,
  );
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
      projSidebar[0].textContent = title.textContent;
      (0,_projects__WEBPACK_IMPORTED_MODULE_0__.updateProjObj)(title.textContent, desc.textContent);
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
/* harmony export */   "updateProjObj": () => (/* binding */ updateProjObj)
/* harmony export */ });
const projectStorage = [];
const displayedProj = 1;

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
}

function getDisplayedProj() {
  return displayedProj;
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
/* harmony export */   "findTodo": () => (/* binding */ findTodo),
/* harmony export */   "getTodos": () => (/* binding */ getTodos)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");


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
    (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getDisplayedProj)(),
  );

  todoStorage.push(defaultTodo);
}

function findTodo(id) {
  const foundTodo = todoStorage.find((element) => element.todoID === id);
  return foundTodo;
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
  // Creating default project
  (0,_projects__WEBPACK_IMPORTED_MODULE_0__.createProject)('Default Project', 'You can enter a project description here!');
  const firstProject = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.findProject)(1);
  (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.addProjBtnDOM)(firstProject);
  (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.addProjMainDOM)(firstProject);
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
  const secondProject = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.findProject)(2);
  (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.addProjBtnDOM)(secondProject);

  // Debugging. Retrive current projects and todos
  console.log((0,_projects__WEBPACK_IMPORTED_MODULE_0__.getProjects)());
  console.log((0,_todos__WEBPACK_IMPORTED_MODULE_2__.getTodos)());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZEOztBQUU3RDtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsY0FBYztBQUNwRTtBQUNBLHFDQUFxQywyREFBZ0IsR0FBRztBQUN4RCw4QkFBOEIsVUFBVTtBQUN4Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxjQUFjOztBQUV2RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDJEQUFnQixHQUFHO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHdEQUFhO0FBQ25CO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7O0FBRUE7QUFPRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRDRDOztBQUU5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyREFBZ0I7QUFDcEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMEM7Ozs7Ozs7VUN6QzFDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDcUU7QUFNakQ7QUFDcUM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3REFBYTtBQUNmLHVCQUF1QixzREFBVztBQUNsQyxFQUFFLHdEQUFhO0FBQ2YsRUFBRSx5REFBYztBQUNoQixFQUFFLGtEQUFVO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQVE7QUFDOUIsRUFBRSxxREFBVTtBQUNaLEVBQUUsMkRBQWdCOztBQUVsQjtBQUNBLEVBQUUsd0RBQWE7QUFDZjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0RBQVc7QUFDbkMsRUFBRSx3REFBYTs7QUFFZjtBQUNBLGNBQWMsc0RBQVc7QUFDekIsY0FBYyxnREFBUTtBQUN0QixDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbU1hbmlwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVwZGF0ZVByb2pPYmosIGdldERpc3BsYXllZFByb2ogfSBmcm9tICcuL3Byb2plY3RzJztcblxuZnVuY3Rpb24gYWRkUHJvakJ0bkRPTShvYmopIHtcbiAgY29uc3Qgc2lkZWJhclByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3Byb2plY3RzJyk7XG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlZmF1bHRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJfX3Byb2plY3QnLCBgJHtvYmoucHJvamVjdElEfWApO1xuICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgYCR7Z2V0RGlzcGxheWVkUHJvaigpfWApO1xuICBwcm9qZWN0QnRuLnRleHRDb250ZW50ID0gYCR7b2JqLnRpdGxlfWA7XG4gIGRlZmF1bHRQcm9qZWN0LmFwcGVuZChwcm9qZWN0QnRuKTtcblxuICBzaWRlYmFyUHJvamVjdHMuYXBwZW5kKGRlZmF1bHRQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvak1haW5ET00ob2JqKSB7XG4gIGNvbnN0IG1haW5Qcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19wcm9qZWN0cycpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdtYWluX19wcm9qZWN0c19fdGl0bGUnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWRpdC5jbGFzc0xpc3QuYWRkKCdtYWluX19wcm9qZWN0c19fZWRpdCcpO1xuICBlZGl0LnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCc7XG4gIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzYy5jbGFzc0xpc3QuYWRkKCdtYWluX19wcm9qZWN0c19fZGVzY3JpcHRpb24nKTtcbiAgZGVzYy50ZXh0Q29udGVudCA9IG9iai5kZXNjO1xuICBtYWluUHJvamVjdHMuYXBwZW5kKHRpdGxlLCBlZGl0LCBkZXNjKTtcbn1cblxuZnVuY3Rpb24gYWRkVG9kb0RPTShvYmopIHtcbiAgY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fdG9kb3MnKTtcbiAgY29uc3QgdG9kb0RJViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvRElWLmNsYXNzTGlzdC5hZGQoJ21haW5fX3RvZG9zX19jYXJkJywgJ3NtYWxsJywgYCR7b2JqLnByb2plY3RJRH1gKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdjYXJkX190aXRsZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcblxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgnY2FyZF9fZHVlRGF0ZScpO1xuICBkdWVEYXRlLnRleHRDb250ZW50ID0gb2JqLmR1ZURhdGU7XG5cbiAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2VkaXQnKTtcbiAgZWRpdC50ZXh0Q29udGVudCA9ICdFeHBhbmQgVG9kbyc7XG5cbiAgdG9kb0RJVi5hcHBlbmQodGl0bGUsIGR1ZURhdGUsIGVkaXQpO1xuICB0b2RvU2VjdGlvbi5hcHBlbmQodG9kb0RJVik7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRE9NKCkge1xuICAvLyBQcm9qZWN0IHNlY3Rpb25cbiAgY29uc3QgcHJvalRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Byb2plY3RzX190aXRsZScpO1xuICBjb25zdCBwcm9qRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19wcm9qZWN0c19fZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgcHJvakVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHNfX2VkaXQnKTtcbiAgcHJvalRpdGxlLnJlbW92ZSgpO1xuICBwcm9qRGVzYy5yZW1vdmUoKTtcbiAgcHJvakVkaXQucmVtb3ZlKCk7XG4gIC8vIFRvZG8gc2VjdGlvblxuICBjb25zdCBhbGxUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX190b2RvcycpO1xuICB3aGlsZSAoYWxsVG9kb3MuZmlyc3RDaGlsZCkge1xuICAgIGFsbFRvZG9zLnJlbW92ZUNoaWxkKGFsbFRvZG9zLmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9qTGlzdGVuZXIoKSB7XG4gIGNvbnN0IGVkaXRQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Byb2plY3RzX19lZGl0Jyk7XG4gIGNvbnN0IHByb2pTaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICBgYnRuICR7Z2V0RGlzcGxheWVkUHJvaigpfWAsXG4gICk7XG4gIGVkaXRQcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Byb2plY3RzX190aXRsZScpO1xuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHNfX2Rlc2NyaXB0aW9uJyk7XG4gICAgaWYgKGVkaXRQcm9qLnRleHRDb250ZW50ID09PSAnRWRpdCBQcm9qZWN0Jykge1xuICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcbiAgICAgIGRlc2Muc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcbiAgICAgIGVkaXRQcm9qLnRleHRDb250ZW50ID0gJ1NhdmUgUHJvamVjdCc7XG4gICAgfSBlbHNlIGlmIChlZGl0UHJvai50ZXh0Q29udGVudCA9PT0gJ1NhdmUgUHJvamVjdCcpIHtcbiAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgZmFsc2UpO1xuICAgICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIGZhbHNlKTtcbiAgICAgIGVkaXRQcm9qLnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCc7XG4gICAgICBwcm9qU2lkZWJhclswXS50ZXh0Q29udGVudCA9IHRpdGxlLnRleHRDb250ZW50O1xuICAgICAgdXBkYXRlUHJvak9iaih0aXRsZS50ZXh0Q29udGVudCwgZGVzYy50ZXh0Q29udGVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kb0xpc3RlbmVyKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuVG9kbycpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gR2V0IGN1cnJlbnQgUHJvamVjdCBJRCBmb3IgYXNzaWdubWVudFxuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvakxpc3RlbmVyKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuUHJvamVjdCcpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7fSk7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBvYmplY3QtY3VybHktbmV3bGluZVxuZXhwb3J0IHtcbiAgYWRkUHJvakJ0bkRPTSxcbiAgYWRkUHJvak1haW5ET00sXG4gIGFkZFRvZG9ET00sXG4gIGNsZWFyRE9NLFxuICBlZGl0UHJvakxpc3RlbmVyLFxufTtcbiIsImNvbnN0IHByb2plY3RTdG9yYWdlID0gW107XG5jb25zdCBkaXNwbGF5ZWRQcm9qID0gMTtcblxuZnVuY3Rpb24gcHJvamVjdENvdW50ZXIoKSB7XG4gIGlmICh0eXBlb2YgcHJvamVjdENvdW50ZXIuY291bnRlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBwcm9qZWN0Q291bnRlci5jb3VudGVyID0gMDtcbiAgfVxuICBwcm9qZWN0Q291bnRlci5jb3VudGVyICs9IDE7XG4gIHJldHVybiBwcm9qZWN0Q291bnRlci5jb3VudGVyO1xufVxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAodGl0bGUsIGRlc2MpID0+IHtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gKCkgPT4gY29uc29sZS5sb2codGl0bGUpO1xuICBjb25zdCBwcm9qZWN0SUQgPSBwcm9qZWN0Q291bnRlcigpO1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2MsXG4gICAgcHJvamVjdElELFxuICAgIHByb2plY3RUaXRsZSxcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2MpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHRpdGxlLCBkZXNjKTtcbiAgcHJvamVjdFN0b3JhZ2UucHVzaChuZXdQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gZmluZFByb2plY3QoaWQpIHtcbiAgY29uc3QgZm91bmRPYmogPSBwcm9qZWN0U3RvcmFnZS5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LnByb2plY3RJRCA9PT0gaWQpO1xuICByZXR1cm4gZm91bmRPYmo7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2pPYmoodGl0bGUsIGRlc2MpIHtcbiAgY29uc3QgZm91bmRJbmRleCA9IHByb2plY3RTdG9yYWdlLmZpbmRJbmRleChcbiAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5wcm9qZWN0SUQgPT09IGRpc3BsYXllZFByb2osXG4gICk7XG4gIHByb2plY3RTdG9yYWdlW2ZvdW5kSW5kZXhdLnRpdGxlID0gdGl0bGU7XG4gIHByb2plY3RTdG9yYWdlW2ZvdW5kSW5kZXhdLmRlc2MgPSBkZXNjO1xufVxuXG5mdW5jdGlvbiBnZXREaXNwbGF5ZWRQcm9qKCkge1xuICByZXR1cm4gZGlzcGxheWVkUHJvajtcbn1cbmZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICByZXR1cm4gcHJvamVjdFN0b3JhZ2U7XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVByb2plY3QsXG4gIGZpbmRQcm9qZWN0LFxuICB1cGRhdGVQcm9qT2JqLFxuICBnZXREaXNwbGF5ZWRQcm9qLFxuICBnZXRQcm9qZWN0cyxcbn07XG4iLCJpbXBvcnQgeyBnZXREaXNwbGF5ZWRQcm9qIH0gZnJvbSAnLi9wcm9qZWN0cyc7XG5cbmNvbnN0IHRvZG9TdG9yYWdlID0gW107XG5cbmZ1bmN0aW9uIHRvZG9Db3VudGVyKCkge1xuICBpZiAodHlwZW9mIHRvZG9Db3VudGVyLmNvdW50ZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdG9kb0NvdW50ZXIuY291bnRlciA9IDA7XG4gIH1cbiAgdG9kb0NvdW50ZXIuY291bnRlciArPSAxO1xuICByZXR1cm4gdG9kb0NvdW50ZXIuY291bnRlcjtcbn1cblxuY29uc3QgdG9kb0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCB0b2RvSUQsIHByb2plY3RJRCkgPT4gKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBkdWVEYXRlLFxuICB0b2RvSUQsXG4gIHByb2plY3RJRCxcbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVUb2RvKHRpdGxlLCBkZXNjLCBkdWVEYXRlKSB7XG4gIGNvbnN0IHRvZG9JRCA9IHRvZG9Db3VudGVyKCk7XG4gIGNvbnN0IGRlZmF1bHRUb2RvID0gdG9kb0ZhY3RvcnkoXG4gICAgdGl0bGUsXG4gICAgZGVzYyxcbiAgICBkdWVEYXRlLFxuICAgIHRvZG9JRCxcbiAgICBnZXREaXNwbGF5ZWRQcm9qKCksXG4gICk7XG5cbiAgdG9kb1N0b3JhZ2UucHVzaChkZWZhdWx0VG9kbyk7XG59XG5cbmZ1bmN0aW9uIGZpbmRUb2RvKGlkKSB7XG4gIGNvbnN0IGZvdW5kVG9kbyA9IHRvZG9TdG9yYWdlLmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQudG9kb0lEID09PSBpZCk7XG4gIHJldHVybiBmb3VuZFRvZG87XG59XG5mdW5jdGlvbiBnZXRUb2RvcygpIHtcbiAgcmV0dXJuIHRvZG9TdG9yYWdlO1xufVxuXG5leHBvcnQgeyBjcmVhdGVUb2RvLCBmaW5kVG9kbywgZ2V0VG9kb3MgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gUHN1ZWRvY29kZVxuLy8gT24gcGFnZSBsb2FkLCBjcmVhdGUgYSBkZWZhdWx0IHByb2plY3QgYW5kIGEgZGVmYXVsdCB0YXNrIHdpdGhpbiB0aGF0IHByb2plY3RcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QsIGZpbmRQcm9qZWN0LCBnZXRQcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdHMnO1xuaW1wb3J0IHtcbiAgYWRkUHJvakJ0bkRPTSxcbiAgYWRkUHJvak1haW5ET00sXG4gIGFkZFRvZG9ET00sXG4gIGVkaXRQcm9qTGlzdGVuZXIsXG59IGZyb20gJy4vZG9tTWFuaXAnO1xuaW1wb3J0IHsgY3JlYXRlVG9kbywgZmluZFRvZG8sIGdldFRvZG9zIH0gZnJvbSAnLi90b2Rvcyc7XG5cbi8vIEluaXRpYWxpYXRpb24gb2YgdGhlIGRlZmF1bHQgd2VicGFnZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHdyYXAtaWlmZVxuKGZ1bmN0aW9uIGluaXQoKSB7XG4gIC8vIENyZWF0aW5nIGRlZmF1bHQgcHJvamVjdFxuICBjcmVhdGVQcm9qZWN0KCdEZWZhdWx0IFByb2plY3QnLCAnWW91IGNhbiBlbnRlciBhIHByb2plY3QgZGVzY3JpcHRpb24gaGVyZSEnKTtcbiAgY29uc3QgZmlyc3RQcm9qZWN0ID0gZmluZFByb2plY3QoMSk7XG4gIGFkZFByb2pCdG5ET00oZmlyc3RQcm9qZWN0KTtcbiAgYWRkUHJvak1haW5ET00oZmlyc3RQcm9qZWN0KTtcbiAgY3JlYXRlVG9kbyhcbiAgICAnQSBkZWZhdWx0IHRvZG8nLFxuICAgICdZb3UgY2FuIGVudGVyIGEgbG9uZ2VyIGRlc2NyaXB0aW9uL2RldGFpbHMgZm9yIHlvdXIgdG9kbyBoZXJlLicsXG4gICAgJzA4LzE1LzIwMjInLFxuICApO1xuICBjb25zdCBkZWZhdWx0VG9kbyA9IGZpbmRUb2RvKDEpO1xuICBhZGRUb2RvRE9NKGRlZmF1bHRUb2RvKTtcbiAgZWRpdFByb2pMaXN0ZW5lcigpO1xuXG4gIC8vIGNyZWF0aW5nIDJuZCBwcm9qZWN0IGV4YW1wbGVcbiAgY3JlYXRlUHJvamVjdChcbiAgICAnQW5vdGhlciBQcm9qZWN0JyxcbiAgICAnSGVyZSBpcyBhbm90aGVyIHByb2plY3Qgd2l0aCBhIGRpZmZlcmVudCBkZXNjcmlwdGlvbicsXG4gICk7XG4gIGNvbnN0IHNlY29uZFByb2plY3QgPSBmaW5kUHJvamVjdCgyKTtcbiAgYWRkUHJvakJ0bkRPTShzZWNvbmRQcm9qZWN0KTtcblxuICAvLyBEZWJ1Z2dpbmcuIFJldHJpdmUgY3VycmVudCBwcm9qZWN0cyBhbmQgdG9kb3NcbiAgY29uc29sZS5sb2coZ2V0UHJvamVjdHMoKSk7XG4gIGNvbnNvbGUubG9nKGdldFRvZG9zKCkpO1xufSkoKTtcblxuLy8gQWRkICdFZGl0IFByb2plY3QnIGZ1bmN0aW9uIC0gRE9ORVxuLy8gV3JpdGUgZnVuY3Rpb24gZm9yIGNsZWFyaW5nIERPTSAtLSBET05FXG4vLyBBZGQgcHJvamVjdCBzd2l0Y2hpbmdcblxuLy8gQWRkICdFeHBhbmQgVG9kbycgZnVuY3Rpb25cblxuLy8gSG93IHRvIGhhbmRsZSBiZWxvdyB0d28gY3JlYXRpb25zPyBNb2RhbD8gY29udGVudGVkaXRhYmxlP1xuLy8gaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9ob3d0by9ob3d0b19qc19wb3B1cF9mb3JtLmFzcFxuLy8gQWRkICdDcmVhdGUgVG9kbycgZnVuY3Rpb24gYW5kIGFkZCB0byBjdXJyZW50bHkgZGlzcGxheWVkIFByb2plY3Rcbi8vIEFkZCAnQ3JlYXRlIFByb2plY3QnIGZ1bmN0aW9uLCBjbGVhciBET00sIGFuZCB1cGRhdGUgd2l0aCBuZXcgUHJvamVjdFxuLy8gT24gUHJvamVjdCBjbGljaywgY2xlYXIgRE9NLCBhbmQgdXBkYXRlIHdpdGggY2xpY2tlZCBQcm9qZWN0XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=