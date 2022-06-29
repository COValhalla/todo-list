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
/* harmony export */   "editProjListener": () => (/* binding */ editProjListener)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");


function addProjBtnDOM(obj) {
  const sidebarProjects = document.querySelector('.sidebar__projects');
  const defaultProject = document.createElement('div');
  defaultProject.classList.add('sidebar__project', `${obj.projectID}`);
  const projectBtn = document.createElement('button');
  projectBtn.classList.add('btn');
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

function editProjListener() {
  const editProj = document.querySelector('.main__projects__edit');
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
      (0,_projects__WEBPACK_IMPORTED_MODULE_0__.updateProject)(title.textContent, desc.textContent);
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




/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDefaultProject": () => (/* binding */ createDefaultProject),
/* harmony export */   "findProject": () => (/* binding */ findProject),
/* harmony export */   "updateProject": () => (/* binding */ updateProject)
/* harmony export */ });
const projectStorage = [];
const currentProject = 1;

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

function createDefaultProject() {
  const defaultProject = projectFactory(
    'Default Project',
    'You can enter project descsription! Click Edit Project in order to edit the project name and the desc.',
  );
  projectStorage.push(defaultProject);
}

function findProject(id) {
  const foundObj = projectStorage.find((element) => element.projectID === id);
  return foundObj;
}

function updateProject(title, desc) {
  const foundIndex = projectStorage.findIndex(
    (element) => element.projectID === currentProject,
  );
  projectStorage[foundIndex].title = title;
  projectStorage[foundIndex].desc = desc;
  console.log(projectStorage);
}




/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDefaultTodo": () => (/* binding */ createDefaultTodo),
/* harmony export */   "findTodo": () => (/* binding */ findTodo)
/* harmony export */ });
const todoStorage = [];

const todoFactory = (title, description, dueDate, todoID, projectID) => ({
  title,
  description,
  dueDate,
  todoID,
  projectID,
});

function createDefaultTodo() {
  const defaultTodo = todoFactory(
    'Example Todo',
    'You can enter todo descriptions!',
    '07/15/2022',
    1,
    1,
  );

  todoStorage.push(defaultTodo);
}

function findTodo(id) {
  const foundTodo = todoStorage.find((element) => element.todoID === id);
  return foundTodo;
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
  (0,_projects__WEBPACK_IMPORTED_MODULE_0__.createDefaultProject)();
  const defaultProject = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.findProject)(1);
  (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.addProjBtnDOM)(defaultProject);
  (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.addProjMainDOM)(defaultProject);
  (0,_todos__WEBPACK_IMPORTED_MODULE_2__.createDefaultTodo)();
  const defaultTodo = (0,_todos__WEBPACK_IMPORTED_MODULE_2__.findTodo)(1);
  (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.addTodoDOM)(defaultTodo);
  (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.editProjListener)();
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxjQUFjO0FBQ3BFO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxjQUFjOztBQUV2RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0RBQWE7QUFDbkI7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQztBQUMzQzs7QUFFdUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0V2RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNEQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQzVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUV1Qzs7Ozs7OztVQzNCdkM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUMrRDtBQU0zQztBQUNrQzs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrREFBb0I7QUFDdEIseUJBQXlCLHNEQUFXO0FBQ3BDLEVBQUUsd0RBQWE7QUFDZixFQUFFLHlEQUFjO0FBQ2hCLEVBQUUseURBQWlCO0FBQ25CLHNCQUFzQixnREFBUTtBQUM5QixFQUFFLHFEQUFVO0FBQ1osRUFBRSwyREFBZ0I7QUFDbEIsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21NYW5pcC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1cGRhdGVQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0cyc7XG5cbmZ1bmN0aW9uIGFkZFByb2pCdG5ET00ob2JqKSB7XG4gIGNvbnN0IHNpZGViYXJQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX19wcm9qZWN0cycpO1xuICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZWZhdWx0UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyX19wcm9qZWN0JywgYCR7b2JqLnByb2plY3RJRH1gKTtcbiAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICBwcm9qZWN0QnRuLnRleHRDb250ZW50ID0gYCR7b2JqLnRpdGxlfWA7XG4gIGRlZmF1bHRQcm9qZWN0LmFwcGVuZChwcm9qZWN0QnRuKTtcblxuICBzaWRlYmFyUHJvamVjdHMuYXBwZW5kKGRlZmF1bHRQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvak1haW5ET00ob2JqKSB7XG4gIGNvbnN0IG1haW5Qcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19wcm9qZWN0cycpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdtYWluX19wcm9qZWN0c19fdGl0bGUnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWRpdC5jbGFzc0xpc3QuYWRkKCdtYWluX19wcm9qZWN0c19fZWRpdCcpO1xuICBlZGl0LnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCc7XG4gIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzYy5jbGFzc0xpc3QuYWRkKCdtYWluX19wcm9qZWN0c19fZGVzY3JpcHRpb24nKTtcbiAgZGVzYy50ZXh0Q29udGVudCA9IG9iai5kZXNjO1xuICBtYWluUHJvamVjdHMuYXBwZW5kKHRpdGxlLCBlZGl0LCBkZXNjKTtcbn1cblxuZnVuY3Rpb24gYWRkVG9kb0RPTShvYmopIHtcbiAgY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fdG9kb3MnKTtcbiAgY29uc3QgdG9kb0RJViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvRElWLmNsYXNzTGlzdC5hZGQoJ21haW5fX3RvZG9zX19jYXJkJywgJ3NtYWxsJywgYCR7b2JqLnByb2plY3RJRH1gKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdjYXJkX190aXRsZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcblxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgnY2FyZF9fZHVlRGF0ZScpO1xuICBkdWVEYXRlLnRleHRDb250ZW50ID0gb2JqLmR1ZURhdGU7XG5cbiAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2VkaXQnKTtcbiAgZWRpdC50ZXh0Q29udGVudCA9ICdFeHBhbmQgVG9kbyc7XG5cbiAgdG9kb0RJVi5hcHBlbmQodGl0bGUsIGR1ZURhdGUsIGVkaXQpO1xuICB0b2RvU2VjdGlvbi5hcHBlbmQodG9kb0RJVik7XG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9qTGlzdGVuZXIoKSB7XG4gIGNvbnN0IGVkaXRQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Byb2plY3RzX19lZGl0Jyk7XG4gIGVkaXRQcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Byb2plY3RzX190aXRsZScpO1xuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHNfX2Rlc2NyaXB0aW9uJyk7XG4gICAgaWYgKGVkaXRQcm9qLnRleHRDb250ZW50ID09PSAnRWRpdCBQcm9qZWN0Jykge1xuICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcbiAgICAgIGRlc2Muc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcbiAgICAgIGVkaXRQcm9qLnRleHRDb250ZW50ID0gJ1NhdmUgUHJvamVjdCc7XG4gICAgfSBlbHNlIGlmIChlZGl0UHJvai50ZXh0Q29udGVudCA9PT0gJ1NhdmUgUHJvamVjdCcpIHtcbiAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgZmFsc2UpO1xuICAgICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIGZhbHNlKTtcbiAgICAgIGVkaXRQcm9qLnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCc7XG4gICAgICB1cGRhdGVQcm9qZWN0KHRpdGxlLnRleHRDb250ZW50LCBkZXNjLnRleHRDb250ZW50KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvTGlzdGVuZXIoKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5Ub2RvJyk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyBHZXQgY3VycmVudCBQcm9qZWN0IElEIGZvciBhc3NpZ25tZW50XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qTGlzdGVuZXIoKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5Qcm9qZWN0Jyk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHt9KTtcbn1cblxuZXhwb3J0IHsgYWRkUHJvakJ0bkRPTSwgYWRkUHJvak1haW5ET00sIGFkZFRvZG9ET00sIGVkaXRQcm9qTGlzdGVuZXIgfTtcbiIsImNvbnN0IHByb2plY3RTdG9yYWdlID0gW107XG5jb25zdCBjdXJyZW50UHJvamVjdCA9IDE7XG5cbmZ1bmN0aW9uIHByb2plY3RDb3VudGVyKCkge1xuICBpZiAodHlwZW9mIHByb2plY3RDb3VudGVyLmNvdW50ZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcHJvamVjdENvdW50ZXIuY291bnRlciA9IDA7XG4gIH1cbiAgcHJvamVjdENvdW50ZXIuY291bnRlciArPSAxO1xuICByZXR1cm4gcHJvamVjdENvdW50ZXIuY291bnRlcjtcbn1cbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlLCBkZXNjKSA9PiB7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9ICgpID0+IGNvbnNvbGUubG9nKHRpdGxlKTtcbiAgY29uc3QgcHJvamVjdElEID0gcHJvamVjdENvdW50ZXIoKTtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjLFxuICAgIHByb2plY3RJRCxcbiAgICBwcm9qZWN0VGl0bGUsXG4gIH07XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0UHJvamVjdCgpIHtcbiAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShcbiAgICAnRGVmYXVsdCBQcm9qZWN0JyxcbiAgICAnWW91IGNhbiBlbnRlciBwcm9qZWN0IGRlc2NzcmlwdGlvbiEgQ2xpY2sgRWRpdCBQcm9qZWN0IGluIG9yZGVyIHRvIGVkaXQgdGhlIHByb2plY3QgbmFtZSBhbmQgdGhlIGRlc2MuJyxcbiAgKTtcbiAgcHJvamVjdFN0b3JhZ2UucHVzaChkZWZhdWx0UHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGZpbmRQcm9qZWN0KGlkKSB7XG4gIGNvbnN0IGZvdW5kT2JqID0gcHJvamVjdFN0b3JhZ2UuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC5wcm9qZWN0SUQgPT09IGlkKTtcbiAgcmV0dXJuIGZvdW5kT2JqO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0KHRpdGxlLCBkZXNjKSB7XG4gIGNvbnN0IGZvdW5kSW5kZXggPSBwcm9qZWN0U3RvcmFnZS5maW5kSW5kZXgoXG4gICAgKGVsZW1lbnQpID0+IGVsZW1lbnQucHJvamVjdElEID09PSBjdXJyZW50UHJvamVjdCxcbiAgKTtcbiAgcHJvamVjdFN0b3JhZ2VbZm91bmRJbmRleF0udGl0bGUgPSB0aXRsZTtcbiAgcHJvamVjdFN0b3JhZ2VbZm91bmRJbmRleF0uZGVzYyA9IGRlc2M7XG4gIGNvbnNvbGUubG9nKHByb2plY3RTdG9yYWdlKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlRGVmYXVsdFByb2plY3QsIGZpbmRQcm9qZWN0LCB1cGRhdGVQcm9qZWN0IH07XG4iLCJjb25zdCB0b2RvU3RvcmFnZSA9IFtdO1xuXG5jb25zdCB0b2RvRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHRvZG9JRCwgcHJvamVjdElEKSA9PiAoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGR1ZURhdGUsXG4gIHRvZG9JRCxcbiAgcHJvamVjdElELFxufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRUb2RvKCkge1xuICBjb25zdCBkZWZhdWx0VG9kbyA9IHRvZG9GYWN0b3J5KFxuICAgICdFeGFtcGxlIFRvZG8nLFxuICAgICdZb3UgY2FuIGVudGVyIHRvZG8gZGVzY3JpcHRpb25zIScsXG4gICAgJzA3LzE1LzIwMjInLFxuICAgIDEsXG4gICAgMSxcbiAgKTtcblxuICB0b2RvU3RvcmFnZS5wdXNoKGRlZmF1bHRUb2RvKTtcbn1cblxuZnVuY3Rpb24gZmluZFRvZG8oaWQpIHtcbiAgY29uc3QgZm91bmRUb2RvID0gdG9kb1N0b3JhZ2UuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC50b2RvSUQgPT09IGlkKTtcbiAgcmV0dXJuIGZvdW5kVG9kbztcbn1cblxuZXhwb3J0IHsgY3JlYXRlRGVmYXVsdFRvZG8sIGZpbmRUb2RvIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIFBzdWVkb2NvZGVcbi8vIE9uIHBhZ2UgbG9hZCwgY3JlYXRlIGEgZGVmYXVsdCBwcm9qZWN0IGFuZCBhIGRlZmF1bHQgdGFzayB3aXRoaW4gdGhhdCBwcm9qZWN0XG5pbXBvcnQgeyBjcmVhdGVEZWZhdWx0UHJvamVjdCwgZmluZFByb2plY3QgfSBmcm9tICcuL3Byb2plY3RzJztcbmltcG9ydCB7XG4gIGFkZFByb2pCdG5ET00sXG4gIGFkZFByb2pNYWluRE9NLFxuICBhZGRUb2RvRE9NLFxuICBlZGl0UHJvakxpc3RlbmVyLFxufSBmcm9tICcuL2RvbU1hbmlwJztcbmltcG9ydCB7IGNyZWF0ZURlZmF1bHRUb2RvLCBmaW5kVG9kbyB9IGZyb20gJy4vdG9kb3MnO1xuXG4vLyBJbml0aWFsaWF0aW9uIG9mIHRoZSBkZWZhdWx0IHdlYnBhZ2Vcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB3cmFwLWlpZmVcbihmdW5jdGlvbiBpbml0KCkge1xuICBjcmVhdGVEZWZhdWx0UHJvamVjdCgpO1xuICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IGZpbmRQcm9qZWN0KDEpO1xuICBhZGRQcm9qQnRuRE9NKGRlZmF1bHRQcm9qZWN0KTtcbiAgYWRkUHJvak1haW5ET00oZGVmYXVsdFByb2plY3QpO1xuICBjcmVhdGVEZWZhdWx0VG9kbygpO1xuICBjb25zdCBkZWZhdWx0VG9kbyA9IGZpbmRUb2RvKDEpO1xuICBhZGRUb2RvRE9NKGRlZmF1bHRUb2RvKTtcbiAgZWRpdFByb2pMaXN0ZW5lcigpO1xufSkoKTtcblxuLy8gQWRkICdFZGl0IFByb2plY3QnIGZ1bmN0aW9uXG5cbi8vIEFkZCAnRXhwYW5kIFRvZG8nIGZ1bmN0aW9uXG5cbi8vIEhvdyB0byBoYW5kbGUgYmVsb3cgdHdvIGNyZWF0aW9ucz8gTW9kYWw/IGNvbnRlbnRlZGl0YWJsZT9cbi8vIGh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vaG93dG8vaG93dG9fanNfcG9wdXBfZm9ybS5hc3Bcbi8vIEFkZCAnQ3JlYXRlIFRvZG8nIGZ1bmN0aW9uIGFuZCBhZGQgdG8gY3VycmVudGx5IGRpc3BsYXllZCBQcm9qZWN0XG4vLyBBZGQgJ0NyZWF0ZSBQcm9qZWN0JyBmdW5jdGlvbiwgY2xlYXIgRE9NLCBhbmQgdXBkYXRlIHdpdGggbmV3IFByb2plY3Rcbi8vIE9uIFByb2plY3QgY2xpY2ssIGNsZWFyIERPTSwgYW5kIHVwZGF0ZSB3aXRoIGNsaWNrZWQgUHJvamVjdFxuXG4vLyBVbmNlcnRhaW50aXRpZXNcbi8vIEVkaXQgcHJvamVjdCBpbnRlcmFjdGlvbiwgY2hhbmdlIHRvIGZvcm0/XG4vLyBjb250ZW50ZWRpdGFibGVcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==