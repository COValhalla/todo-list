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
/* harmony export */   "addDefaultProjBtn": () => (/* binding */ addDefaultProjBtn),
/* harmony export */   "addDefaultProjMain": () => (/* binding */ addDefaultProjMain),
/* harmony export */   "addTodoDOM": () => (/* binding */ addTodoDOM)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ "./src/todos.js");



function addDefaultProjBtn() {
  const sidebarProjects = document.querySelector('.sidebar__projects');
  const defaultProject = document.createElement('div');
  defaultProject.classList.add('sidebar__project', '1');

  const projectBtn = document.createElement('button');
  projectBtn.classList.add('btn');
  projectBtn.textContent = 'Default Project';
  defaultProject.append(projectBtn);

  sidebarProjects.append(defaultProject);
}

function addDefaultProjMain() {
  const mainProjects = document.querySelector('.main__projects');
  const title = document.createElement('div');
  title.classList.add('main__projects__title');
  title.textContent = 'Default Project';
  const edit = document.createElement('div');
  edit.classList.add('main__projects__edit');
  edit.textContent = 'Edit Project';
  const desc = document.createElement('div');
  desc.classList.add('main__projects__description');
  desc.textContent =
    'You can enter project descriptions! Click Edit Project in order to edit the project name and the description.';

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
/* harmony export */   "default": () => (/* binding */ createDefaultProject)
/* harmony export */ });
const projectStorage = [];

function projectCounter() {
  if (typeof projectCounter.counter === 'undefined') {
    projectCounter.counter = 0;
  }
  projectCounter.counter += 1;
  return projectCounter.counter;
}
const projectFactory = (title, description) => {
  const projectTitle = () => console.log(title);
  const projectID = projectCounter();
  return {
    title,
    description,
    projectID,
    projectTitle,
  };
};

function createDefaultProject() {
  const defaultProject = projectFactory(
    'Default Project',
    'You can enter project descriptions! Click Edit Project in order to edit the project name and the description.',
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
  (0,_projects__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.addDefaultProjBtn)();
  (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.addDefaultProjMain)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDTjs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsV0FBVzs7QUFFcEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUU2RDs7Ozs7Ozs7Ozs7Ozs7O0FDckQ3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRXVDOzs7Ozs7O1VDekJ2QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQzhDO0FBQ2lDO0FBQ3pCOztBQUV0RDtBQUNBO0FBQ0EsRUFBRSxxREFBb0I7QUFDdEIsRUFBRSw0REFBaUI7QUFDbkIsRUFBRSw2REFBa0I7QUFDcEIsRUFBRSx5REFBaUI7QUFDbkIsc0JBQXNCLGdEQUFRO0FBQzlCLEVBQUUscURBQVU7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21NYW5pcC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaW5kUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdHMnO1xuaW1wb3J0IHsgZmluZFRvZG8gfSBmcm9tICcuL3RvZG9zJztcblxuZnVuY3Rpb24gYWRkRGVmYXVsdFByb2pCdG4oKSB7XG4gIGNvbnN0IHNpZGViYXJQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX19wcm9qZWN0cycpO1xuICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZWZhdWx0UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyX19wcm9qZWN0JywgJzEnKTtcblxuICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gIHByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnRGVmYXVsdCBQcm9qZWN0JztcbiAgZGVmYXVsdFByb2plY3QuYXBwZW5kKHByb2plY3RCdG4pO1xuXG4gIHNpZGViYXJQcm9qZWN0cy5hcHBlbmQoZGVmYXVsdFByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBhZGREZWZhdWx0UHJvak1haW4oKSB7XG4gIGNvbnN0IG1haW5Qcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19wcm9qZWN0cycpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdtYWluX19wcm9qZWN0c19fdGl0bGUnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnRGVmYXVsdCBQcm9qZWN0JztcbiAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoJ21haW5fX3Byb2plY3RzX19lZGl0Jyk7XG4gIGVkaXQudGV4dENvbnRlbnQgPSAnRWRpdCBQcm9qZWN0JztcbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXNjLmNsYXNzTGlzdC5hZGQoJ21haW5fX3Byb2plY3RzX19kZXNjcmlwdGlvbicpO1xuICBkZXNjLnRleHRDb250ZW50ID1cbiAgICAnWW91IGNhbiBlbnRlciBwcm9qZWN0IGRlc2NyaXB0aW9ucyEgQ2xpY2sgRWRpdCBQcm9qZWN0IGluIG9yZGVyIHRvIGVkaXQgdGhlIHByb2plY3QgbmFtZSBhbmQgdGhlIGRlc2NyaXB0aW9uLic7XG5cbiAgbWFpblByb2plY3RzLmFwcGVuZCh0aXRsZSwgZWRpdCwgZGVzYyk7XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9ET00ob2JqKSB7XG4gIGNvbnN0IHRvZG9TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3RvZG9zJyk7XG4gIGNvbnN0IHRvZG9ESVYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb0RJVi5jbGFzc0xpc3QuYWRkKCdtYWluX190b2Rvc19fY2FyZCcsICdzbWFsbCcsIGAke29iai50b2RvSUR9YCk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnY2FyZF9fdGl0bGUnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG5cbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2R1ZURhdGUnKTtcbiAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IG9iai5kdWVEYXRlO1xuXG4gIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWRpdC5jbGFzc0xpc3QuYWRkKCdjYXJkX19lZGl0Jyk7XG4gIGVkaXQudGV4dENvbnRlbnQgPSAnRXhwYW5kIFRvZG8nO1xuXG4gIHRvZG9ESVYuYXBwZW5kKHRpdGxlLCBkdWVEYXRlLCBlZGl0KTtcbiAgdG9kb1NlY3Rpb24uYXBwZW5kKHRvZG9ESVYpO1xufVxuXG5leHBvcnQgeyBhZGREZWZhdWx0UHJvakJ0biwgYWRkRGVmYXVsdFByb2pNYWluLCBhZGRUb2RvRE9NIH07XG4iLCJjb25zdCBwcm9qZWN0U3RvcmFnZSA9IFtdO1xuXG5mdW5jdGlvbiBwcm9qZWN0Q291bnRlcigpIHtcbiAgaWYgKHR5cGVvZiBwcm9qZWN0Q291bnRlci5jb3VudGVyID09PSAndW5kZWZpbmVkJykge1xuICAgIHByb2plY3RDb3VudGVyLmNvdW50ZXIgPSAwO1xuICB9XG4gIHByb2plY3RDb3VudGVyLmNvdW50ZXIgKz0gMTtcbiAgcmV0dXJuIHByb2plY3RDb3VudGVyLmNvdW50ZXI7XG59XG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gKCkgPT4gY29uc29sZS5sb2codGl0bGUpO1xuICBjb25zdCBwcm9qZWN0SUQgPSBwcm9qZWN0Q291bnRlcigpO1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIHByb2plY3RJRCxcbiAgICBwcm9qZWN0VGl0bGUsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVEZWZhdWx0UHJvamVjdCgpIHtcbiAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShcbiAgICAnRGVmYXVsdCBQcm9qZWN0JyxcbiAgICAnWW91IGNhbiBlbnRlciBwcm9qZWN0IGRlc2NyaXB0aW9ucyEgQ2xpY2sgRWRpdCBQcm9qZWN0IGluIG9yZGVyIHRvIGVkaXQgdGhlIHByb2plY3QgbmFtZSBhbmQgdGhlIGRlc2NyaXB0aW9uLicsXG4gICk7XG4gIHByb2plY3RTdG9yYWdlLnB1c2goZGVmYXVsdFByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBmaW5kUHJvamVjdChpZCkge1xuICBjb25zdCBmb3VuZE9iaiA9IHByb2plY3RTdG9yYWdlLmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQucHJvamVjdElEID09PSBpZCk7XG4gIHJldHVybiBmb3VuZE9iajtcbn1cbiIsImNvbnN0IHRvZG9TdG9yYWdlID0gW107XG5cbmNvbnN0IHRvZG9GYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgdG9kb0lEKSA9PiAoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGR1ZURhdGUsXG4gIHRvZG9JRCxcbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0VG9kbygpIHtcbiAgY29uc3QgZGVmYXVsdFRvZG8gPSB0b2RvRmFjdG9yeShcbiAgICAnRXhhbXBsZSBUb2RvJyxcbiAgICAnWW91IGNhbiBlbnRlciB0b2RvIGRlc2NyaXB0aW9ucyEnLFxuICAgICcwNy8xNS8yMDIyJyxcbiAgICAxLFxuICApO1xuXG4gIHRvZG9TdG9yYWdlLnB1c2goZGVmYXVsdFRvZG8pO1xufVxuXG5mdW5jdGlvbiBmaW5kVG9kbyhpZCkge1xuICBjb25zdCBmb3VuZFRvZG8gPSB0b2RvU3RvcmFnZS5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LnRvZG9JRCA9PT0gaWQpO1xuICByZXR1cm4gZm91bmRUb2RvO1xufVxuXG5leHBvcnQgeyBjcmVhdGVEZWZhdWx0VG9kbywgZmluZFRvZG8gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IG5ld1RvZG8gZnJvbSAnLi9wcm90b3R5cGUnO1xuXG4vLyBCZWxvdyBjcmVhdGVzIDQgcHJvdG90eXBlIHRvZG9zXG5cbi8vIG5ld1RvZG8oJ2EgdGl0bGUnLCAnYSBkZXNjcmlwdGlvbicsICcwOC8xNS8yMicsICdsb3cnLCAncHJvamVjdCB0aXRsZScpO1xuLy8gbmV3VG9kbygnYSB0aXRsZTInLCAnYSBkZXNjcmlwdGlvbjInLCAnMDgvMTUvMjInLCAnbG93JywgJ3Byb2plY3QgdGl0bGUyJyk7XG4vLyBuZXdUb2RvKCdhIHRpdGxlMycsICdhIGRlc2NyaXB0aW9uMycsICcwOC8xNS8yMicsICdsb3cnLCAncHJvamVjdCB0aXRsZTMnKTtcbi8vIG5ld1RvZG8oJ2EgdGl0bGU1JywgJ2EgZGVzY3JpcHRpb24zJywgJzA4LzE1LzIyJywgJ2xvdycsICdwcm9qZWN0IHRpdGxlMycpO1xuXG4vLyBQc3VlZG9jb2RlXG4vLyBPbiBwYWdlIGxvYWQsIGNyZWF0ZSBhIGRlZmF1bHQgcHJvamVjdCBhbmQgYSBkZWZhdWx0IHRhc2sgd2l0aGluIHRoYXQgcHJvamVjdFxuaW1wb3J0IGNyZWF0ZURlZmF1bHRQcm9qZWN0IGZyb20gJy4vcHJvamVjdHMnO1xuaW1wb3J0IHsgYWRkRGVmYXVsdFByb2pCdG4sIGFkZERlZmF1bHRQcm9qTWFpbiwgYWRkVG9kb0RPTSB9IGZyb20gJy4vZG9tTWFuaXAnO1xuaW1wb3J0IHsgY3JlYXRlRGVmYXVsdFRvZG8sIGZpbmRUb2RvIH0gZnJvbSAnLi90b2Rvcyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB3cmFwLWlpZmVcbihmdW5jdGlvbiBpbml0KCkge1xuICBjcmVhdGVEZWZhdWx0UHJvamVjdCgpO1xuICBhZGREZWZhdWx0UHJvakJ0bigpO1xuICBhZGREZWZhdWx0UHJvak1haW4oKTtcbiAgY3JlYXRlRGVmYXVsdFRvZG8oKTtcbiAgY29uc3QgZGVmYXVsdFRvZG8gPSBmaW5kVG9kbygxKTtcbiAgYWRkVG9kb0RPTShkZWZhdWx0VG9kbyk7XG59KSgpO1xuLy8gQ3JlYXRlIHRvZG8gYWRkcyBmb3JtcyB0byB0aGUgRE9NLCBhZnRlciBmaWxsaW5nIHRoZW0gb3V0XG4vLyBjbGlja2luZyBmaW5pc2ggdXBkYXRlcyB0aGVtIGFuZCByZW1vdmUgdGhlIHN1Ym1pdCBidXR0b25cbi8vIENyZWF0ZSBwcm9qZWN0IGNsZWFycyBET00sIGFkZHMgbmV3IHByb2plY3QgdG8gc2lkZWJhciwgYWRkcyBmb3JtIGZvciBmaWxsaW5nIG91dCBkZXRhaWxzXG5cbi8vIFVuY2VydGFpbnRpdGllc1xuLy8gRWRpdCBwcm9qZWN0IGludGVyYWN0aW9uLCBjaGFuZ2UgdG8gZm9ybT9cbi8vIGNvbnRlbnRlZGl0YWJsZVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9