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
/* harmony export */   "addTodoDOM": () => (/* binding */ addTodoDOM)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ "./src/todos.js");



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
  todoDIV.classList.add('main__todos__card', 'small', `${obj.todoID}`);

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




/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDefaultProject": () => (/* binding */ createDefaultProject),
/* harmony export */   "findProject": () => (/* binding */ findProject)
/* harmony export */ });
const projectStorage = [];

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

const todoFactory = (title, description, dueDate, todoID) => ({
  title,
  description,
  dueDate,
  todoID,
});

function createDefaultTodo() {
  const defaultTodo = todoFactory(
    'Example Todo',
    'You can enter todo descriptions!',
    '07/15/2022',
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
// import newTodo from './prototype';

// Below creates 4 prototype todos

// newTodo('a title', 'a description', '08/15/22', 'low', 'project title');
// newTodo('a title2', 'a description2', '08/15/22', 'low', 'project title2');
// newTodo('a title3', 'a description3', '08/15/22', 'low', 'project title3');
// newTodo('a title5', 'a description3', '08/15/22', 'low', 'project title3');

// Psuedocode
// On page load, create a default project and a default task within that project




// eslint-disable-next-line wrap-iife
(function init() {
  (0,_projects__WEBPACK_IMPORTED_MODULE_0__.createDefaultProject)();
  const defaultProject = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.findProject)(1);
  (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.addProjBtnDOM)(defaultProject);
  (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.addProjMainDOM)(defaultProject);
  (0,_todos__WEBPACK_IMPORTED_MODULE_2__.createDefaultTodo)();
  const defaultTodo = (0,_todos__WEBPACK_IMPORTED_MODULE_2__.findTodo)(1);
  (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.addTodoDOM)(defaultTodo);
})();
// Create todo adds forms to the DOM, after filling them out
// clicking finish updates them and remove the submit button
// Create project clears DOM, adds new project to sidebar, adds form for filling out details

// Uncertaintities
// Edit project interaction, change to form?
// contenteditable

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDTjs7QUFFbkM7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELGNBQWM7QUFDcEU7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseURBQXlELFdBQVc7O0FBRXBFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFcUQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRHJEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRTZDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakM3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUV1Qzs7Ozs7OztVQ3pCdkM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUMrRDtBQUNRO0FBQ2pCOztBQUV0RDtBQUNBO0FBQ0EsRUFBRSwrREFBb0I7QUFDdEIseUJBQXlCLHNEQUFXO0FBQ3BDLEVBQUUsd0RBQWE7QUFDZixFQUFFLHlEQUFjO0FBQ2hCLEVBQUUseURBQWlCO0FBQ25CLHNCQUFzQixnREFBUTtBQUM5QixFQUFFLHFEQUFVO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tTWFuaXAuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmluZFByb2plY3QgfSBmcm9tICcuL3Byb2plY3RzJztcbmltcG9ydCB7IGZpbmRUb2RvIH0gZnJvbSAnLi90b2Rvcyc7XG5cbmZ1bmN0aW9uIGFkZFByb2pCdG5ET00ob2JqKSB7XG4gIGNvbnN0IHNpZGViYXJQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX19wcm9qZWN0cycpO1xuICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZWZhdWx0UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyX19wcm9qZWN0JywgYCR7b2JqLnByb2plY3RJRH1gKTtcbiAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICBwcm9qZWN0QnRuLnRleHRDb250ZW50ID0gYCR7b2JqLnRpdGxlfWA7XG4gIGRlZmF1bHRQcm9qZWN0LmFwcGVuZChwcm9qZWN0QnRuKTtcblxuICBzaWRlYmFyUHJvamVjdHMuYXBwZW5kKGRlZmF1bHRQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvak1haW5ET00ob2JqKSB7XG4gIGNvbnN0IG1haW5Qcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19wcm9qZWN0cycpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdtYWluX19wcm9qZWN0c19fdGl0bGUnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWRpdC5jbGFzc0xpc3QuYWRkKCdtYWluX19wcm9qZWN0c19fZWRpdCcpO1xuICBlZGl0LnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCc7XG4gIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzYy5jbGFzc0xpc3QuYWRkKCdtYWluX19wcm9qZWN0c19fZGVzY3JpcHRpb24nKTtcbiAgZGVzYy50ZXh0Q29udGVudCA9IG9iai5kZXNjO1xuICBtYWluUHJvamVjdHMuYXBwZW5kKHRpdGxlLCBlZGl0LCBkZXNjKTtcbn1cblxuZnVuY3Rpb24gYWRkVG9kb0RPTShvYmopIHtcbiAgY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fdG9kb3MnKTtcbiAgY29uc3QgdG9kb0RJViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvRElWLmNsYXNzTGlzdC5hZGQoJ21haW5fX3RvZG9zX19jYXJkJywgJ3NtYWxsJywgYCR7b2JqLnRvZG9JRH1gKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdjYXJkX190aXRsZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcblxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgnY2FyZF9fZHVlRGF0ZScpO1xuICBkdWVEYXRlLnRleHRDb250ZW50ID0gb2JqLmR1ZURhdGU7XG5cbiAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2VkaXQnKTtcbiAgZWRpdC50ZXh0Q29udGVudCA9ICdFeHBhbmQgVG9kbyc7XG5cbiAgdG9kb0RJVi5hcHBlbmQodGl0bGUsIGR1ZURhdGUsIGVkaXQpO1xuICB0b2RvU2VjdGlvbi5hcHBlbmQodG9kb0RJVik7XG59XG5cbmV4cG9ydCB7IGFkZFByb2pCdG5ET00sIGFkZFByb2pNYWluRE9NLCBhZGRUb2RvRE9NIH07XG4iLCJjb25zdCBwcm9qZWN0U3RvcmFnZSA9IFtdO1xuXG5mdW5jdGlvbiBwcm9qZWN0Q291bnRlcigpIHtcbiAgaWYgKHR5cGVvZiBwcm9qZWN0Q291bnRlci5jb3VudGVyID09PSAndW5kZWZpbmVkJykge1xuICAgIHByb2plY3RDb3VudGVyLmNvdW50ZXIgPSAwO1xuICB9XG4gIHByb2plY3RDb3VudGVyLmNvdW50ZXIgKz0gMTtcbiAgcmV0dXJuIHByb2plY3RDb3VudGVyLmNvdW50ZXI7XG59XG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9ICh0aXRsZSwgZGVzYykgPT4ge1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSAoKSA9PiBjb25zb2xlLmxvZyh0aXRsZSk7XG4gIGNvbnN0IHByb2plY3RJRCA9IHByb2plY3RDb3VudGVyKCk7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzYyxcbiAgICBwcm9qZWN0SUQsXG4gICAgcHJvamVjdFRpdGxlLFxuICB9O1xufTtcblxuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFByb2plY3QoKSB7XG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoXG4gICAgJ0RlZmF1bHQgUHJvamVjdCcsXG4gICAgJ1lvdSBjYW4gZW50ZXIgcHJvamVjdCBkZXNjc3JpcHRpb24hIENsaWNrIEVkaXQgUHJvamVjdCBpbiBvcmRlciB0byBlZGl0IHRoZSBwcm9qZWN0IG5hbWUgYW5kIHRoZSBkZXNjLicsXG4gICk7XG4gIHByb2plY3RTdG9yYWdlLnB1c2goZGVmYXVsdFByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBmaW5kUHJvamVjdChpZCkge1xuICBjb25zdCBmb3VuZE9iaiA9IHByb2plY3RTdG9yYWdlLmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQucHJvamVjdElEID09PSBpZCk7XG4gIHJldHVybiBmb3VuZE9iajtcbn1cblxuZXhwb3J0IHsgY3JlYXRlRGVmYXVsdFByb2plY3QsIGZpbmRQcm9qZWN0IH07XG4iLCJjb25zdCB0b2RvU3RvcmFnZSA9IFtdO1xuXG5jb25zdCB0b2RvRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHRvZG9JRCkgPT4gKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBkdWVEYXRlLFxuICB0b2RvSUQsXG59KTtcblxuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFRvZG8oKSB7XG4gIGNvbnN0IGRlZmF1bHRUb2RvID0gdG9kb0ZhY3RvcnkoXG4gICAgJ0V4YW1wbGUgVG9kbycsXG4gICAgJ1lvdSBjYW4gZW50ZXIgdG9kbyBkZXNjcmlwdGlvbnMhJyxcbiAgICAnMDcvMTUvMjAyMicsXG4gICAgMSxcbiAgKTtcblxuICB0b2RvU3RvcmFnZS5wdXNoKGRlZmF1bHRUb2RvKTtcbn1cblxuZnVuY3Rpb24gZmluZFRvZG8oaWQpIHtcbiAgY29uc3QgZm91bmRUb2RvID0gdG9kb1N0b3JhZ2UuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC50b2RvSUQgPT09IGlkKTtcbiAgcmV0dXJuIGZvdW5kVG9kbztcbn1cblxuZXhwb3J0IHsgY3JlYXRlRGVmYXVsdFRvZG8sIGZpbmRUb2RvIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCBuZXdUb2RvIGZyb20gJy4vcHJvdG90eXBlJztcblxuLy8gQmVsb3cgY3JlYXRlcyA0IHByb3RvdHlwZSB0b2Rvc1xuXG4vLyBuZXdUb2RvKCdhIHRpdGxlJywgJ2EgZGVzY3JpcHRpb24nLCAnMDgvMTUvMjInLCAnbG93JywgJ3Byb2plY3QgdGl0bGUnKTtcbi8vIG5ld1RvZG8oJ2EgdGl0bGUyJywgJ2EgZGVzY3JpcHRpb24yJywgJzA4LzE1LzIyJywgJ2xvdycsICdwcm9qZWN0IHRpdGxlMicpO1xuLy8gbmV3VG9kbygnYSB0aXRsZTMnLCAnYSBkZXNjcmlwdGlvbjMnLCAnMDgvMTUvMjInLCAnbG93JywgJ3Byb2plY3QgdGl0bGUzJyk7XG4vLyBuZXdUb2RvKCdhIHRpdGxlNScsICdhIGRlc2NyaXB0aW9uMycsICcwOC8xNS8yMicsICdsb3cnLCAncHJvamVjdCB0aXRsZTMnKTtcblxuLy8gUHN1ZWRvY29kZVxuLy8gT24gcGFnZSBsb2FkLCBjcmVhdGUgYSBkZWZhdWx0IHByb2plY3QgYW5kIGEgZGVmYXVsdCB0YXNrIHdpdGhpbiB0aGF0IHByb2plY3RcbmltcG9ydCB7IGNyZWF0ZURlZmF1bHRQcm9qZWN0LCBmaW5kUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdHMnO1xuaW1wb3J0IHsgYWRkUHJvakJ0bkRPTSwgYWRkUHJvak1haW5ET00sIGFkZFRvZG9ET00gfSBmcm9tICcuL2RvbU1hbmlwJztcbmltcG9ydCB7IGNyZWF0ZURlZmF1bHRUb2RvLCBmaW5kVG9kbyB9IGZyb20gJy4vdG9kb3MnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgd3JhcC1paWZlXG4oZnVuY3Rpb24gaW5pdCgpIHtcbiAgY3JlYXRlRGVmYXVsdFByb2plY3QoKTtcbiAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBmaW5kUHJvamVjdCgxKTtcbiAgYWRkUHJvakJ0bkRPTShkZWZhdWx0UHJvamVjdCk7XG4gIGFkZFByb2pNYWluRE9NKGRlZmF1bHRQcm9qZWN0KTtcbiAgY3JlYXRlRGVmYXVsdFRvZG8oKTtcbiAgY29uc3QgZGVmYXVsdFRvZG8gPSBmaW5kVG9kbygxKTtcbiAgYWRkVG9kb0RPTShkZWZhdWx0VG9kbyk7XG59KSgpO1xuLy8gQ3JlYXRlIHRvZG8gYWRkcyBmb3JtcyB0byB0aGUgRE9NLCBhZnRlciBmaWxsaW5nIHRoZW0gb3V0XG4vLyBjbGlja2luZyBmaW5pc2ggdXBkYXRlcyB0aGVtIGFuZCByZW1vdmUgdGhlIHN1Ym1pdCBidXR0b25cbi8vIENyZWF0ZSBwcm9qZWN0IGNsZWFycyBET00sIGFkZHMgbmV3IHByb2plY3QgdG8gc2lkZWJhciwgYWRkcyBmb3JtIGZvciBmaWxsaW5nIG91dCBkZXRhaWxzXG5cbi8vIFVuY2VydGFpbnRpdGllc1xuLy8gRWRpdCBwcm9qZWN0IGludGVyYWN0aW9uLCBjaGFuZ2UgdG8gZm9ybT9cbi8vIGNvbnRlbnRlZGl0YWJsZVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9