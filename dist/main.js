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
// Add project switching

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkQ7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxjQUFjO0FBQ3BFO0FBQ0EscUNBQXFDLDJEQUFnQixHQUFHO0FBQ3hELDhCQUE4QixVQUFVO0FBQ3hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseURBQXlELGNBQWM7O0FBRXZFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDJEQUFnQixHQUFHO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHdEQUFhO0FBQ25CO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7O0FBRUE7QUFDdUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRnZFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BENEM7O0FBRTlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJEQUFnQjtBQUNwQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUwQzs7Ozs7OztVQ3pDMUM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNxRTtBQU1qRDtBQUNxQzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdEQUFhO0FBQ2YsdUJBQXVCLHNEQUFXO0FBQ2xDLEVBQUUsd0RBQWE7QUFDZixFQUFFLHlEQUFjO0FBQ2hCLEVBQUUsa0RBQVU7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnREFBUTtBQUM5QixFQUFFLHFEQUFVO0FBQ1osRUFBRSwyREFBZ0I7O0FBRWxCO0FBQ0EsRUFBRSx3REFBYTtBQUNmO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzREFBVztBQUNuQyxFQUFFLHdEQUFhOztBQUVmO0FBQ0EsY0FBYyxzREFBVztBQUN6QixjQUFjLGdEQUFRO0FBQ3RCLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21NYW5pcC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1cGRhdGVQcm9qT2JqLCBnZXREaXNwbGF5ZWRQcm9qIH0gZnJvbSAnLi9wcm9qZWN0cyc7XG5cbmZ1bmN0aW9uIGFkZFByb2pCdG5ET00ob2JqKSB7XG4gIGNvbnN0IHNpZGViYXJQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX19wcm9qZWN0cycpO1xuICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZWZhdWx0UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyX19wcm9qZWN0JywgYCR7b2JqLnByb2plY3RJRH1gKTtcbiAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsIGAke2dldERpc3BsYXllZFByb2ooKX1gKTtcbiAgcHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IGAke29iai50aXRsZX1gO1xuICBkZWZhdWx0UHJvamVjdC5hcHBlbmQocHJvamVjdEJ0bik7XG5cbiAgc2lkZWJhclByb2plY3RzLmFwcGVuZChkZWZhdWx0UHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2pNYWluRE9NKG9iaikge1xuICBjb25zdCBtYWluUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHMnKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnbWFpbl9fcHJvamVjdHNfX3RpdGxlJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVkaXQuY2xhc3NMaXN0LmFkZCgnbWFpbl9fcHJvamVjdHNfX2VkaXQnKTtcbiAgZWRpdC50ZXh0Q29udGVudCA9ICdFZGl0IFByb2plY3QnO1xuICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2MuY2xhc3NMaXN0LmFkZCgnbWFpbl9fcHJvamVjdHNfX2Rlc2NyaXB0aW9uJyk7XG4gIGRlc2MudGV4dENvbnRlbnQgPSBvYmouZGVzYztcbiAgbWFpblByb2plY3RzLmFwcGVuZCh0aXRsZSwgZWRpdCwgZGVzYyk7XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9ET00ob2JqKSB7XG4gIGNvbnN0IHRvZG9TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3RvZG9zJyk7XG4gIGNvbnN0IHRvZG9ESVYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb0RJVi5jbGFzc0xpc3QuYWRkKCdtYWluX190b2Rvc19fY2FyZCcsICdzbWFsbCcsIGAke29iai5wcm9qZWN0SUR9YCk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnY2FyZF9fdGl0bGUnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG5cbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2R1ZURhdGUnKTtcbiAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IG9iai5kdWVEYXRlO1xuXG4gIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWRpdC5jbGFzc0xpc3QuYWRkKCdjYXJkX19lZGl0Jyk7XG4gIGVkaXQudGV4dENvbnRlbnQgPSAnRXhwYW5kIFRvZG8nO1xuXG4gIHRvZG9ESVYuYXBwZW5kKHRpdGxlLCBkdWVEYXRlLCBlZGl0KTtcbiAgdG9kb1NlY3Rpb24uYXBwZW5kKHRvZG9ESVYpO1xufVxuXG5mdW5jdGlvbiBlZGl0UHJvakxpc3RlbmVyKCkge1xuICBjb25zdCBlZGl0UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19wcm9qZWN0c19fZWRpdCcpO1xuICBjb25zdCBwcm9qU2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgYGJ0biAke2dldERpc3BsYXllZFByb2ooKX1gLFxuICApO1xuICBlZGl0UHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19wcm9qZWN0c19fdGl0bGUnKTtcbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Byb2plY3RzX19kZXNjcmlwdGlvbicpO1xuICAgIGlmIChlZGl0UHJvai50ZXh0Q29udGVudCA9PT0gJ0VkaXQgUHJvamVjdCcpIHtcbiAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdHJ1ZSk7XG4gICAgICBkZXNjLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdHJ1ZSk7XG4gICAgICBlZGl0UHJvai50ZXh0Q29udGVudCA9ICdTYXZlIFByb2plY3QnO1xuICAgIH0gZWxzZSBpZiAoZWRpdFByb2oudGV4dENvbnRlbnQgPT09ICdTYXZlIFByb2plY3QnKSB7XG4gICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIGZhbHNlKTtcbiAgICAgIGRlc2Muc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCBmYWxzZSk7XG4gICAgICBlZGl0UHJvai50ZXh0Q29udGVudCA9ICdFZGl0IFByb2plY3QnO1xuICAgICAgcHJvalNpZGViYXJbMF0udGV4dENvbnRlbnQgPSB0aXRsZS50ZXh0Q29udGVudDtcbiAgICAgIHVwZGF0ZVByb2pPYmoodGl0bGUudGV4dENvbnRlbnQsIGRlc2MudGV4dENvbnRlbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9MaXN0ZW5lcigpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0blRvZG8nKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIEdldCBjdXJyZW50IFByb2plY3QgSUQgZm9yIGFzc2lnbm1lbnRcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2pMaXN0ZW5lcigpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0blByb2plY3QnKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge30pO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgb2JqZWN0LWN1cmx5LW5ld2xpbmVcbmV4cG9ydCB7IGFkZFByb2pCdG5ET00sIGFkZFByb2pNYWluRE9NLCBhZGRUb2RvRE9NLCBlZGl0UHJvakxpc3RlbmVyIH07XG4iLCJjb25zdCBwcm9qZWN0U3RvcmFnZSA9IFtdO1xuY29uc3QgZGlzcGxheWVkUHJvaiA9IDE7XG5cbmZ1bmN0aW9uIHByb2plY3RDb3VudGVyKCkge1xuICBpZiAodHlwZW9mIHByb2plY3RDb3VudGVyLmNvdW50ZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcHJvamVjdENvdW50ZXIuY291bnRlciA9IDA7XG4gIH1cbiAgcHJvamVjdENvdW50ZXIuY291bnRlciArPSAxO1xuICByZXR1cm4gcHJvamVjdENvdW50ZXIuY291bnRlcjtcbn1cbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlLCBkZXNjKSA9PiB7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9ICgpID0+IGNvbnNvbGUubG9nKHRpdGxlKTtcbiAgY29uc3QgcHJvamVjdElEID0gcHJvamVjdENvdW50ZXIoKTtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjLFxuICAgIHByb2plY3RJRCxcbiAgICBwcm9qZWN0VGl0bGUsXG4gIH07XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjKSB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0RmFjdG9yeSh0aXRsZSwgZGVzYyk7XG4gIHByb2plY3RTdG9yYWdlLnB1c2gobmV3UHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGZpbmRQcm9qZWN0KGlkKSB7XG4gIGNvbnN0IGZvdW5kT2JqID0gcHJvamVjdFN0b3JhZ2UuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC5wcm9qZWN0SUQgPT09IGlkKTtcbiAgcmV0dXJuIGZvdW5kT2JqO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qT2JqKHRpdGxlLCBkZXNjKSB7XG4gIGNvbnN0IGZvdW5kSW5kZXggPSBwcm9qZWN0U3RvcmFnZS5maW5kSW5kZXgoXG4gICAgKGVsZW1lbnQpID0+IGVsZW1lbnQucHJvamVjdElEID09PSBkaXNwbGF5ZWRQcm9qLFxuICApO1xuICBwcm9qZWN0U3RvcmFnZVtmb3VuZEluZGV4XS50aXRsZSA9IHRpdGxlO1xuICBwcm9qZWN0U3RvcmFnZVtmb3VuZEluZGV4XS5kZXNjID0gZGVzYztcbn1cblxuZnVuY3Rpb24gZ2V0RGlzcGxheWVkUHJvaigpIHtcbiAgcmV0dXJuIGRpc3BsYXllZFByb2o7XG59XG5mdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgcmV0dXJuIHByb2plY3RTdG9yYWdlO1xufVxuXG5leHBvcnQge1xuICBjcmVhdGVQcm9qZWN0LFxuICBmaW5kUHJvamVjdCxcbiAgdXBkYXRlUHJvak9iaixcbiAgZ2V0RGlzcGxheWVkUHJvaixcbiAgZ2V0UHJvamVjdHMsXG59O1xuIiwiaW1wb3J0IHsgZ2V0RGlzcGxheWVkUHJvaiB9IGZyb20gJy4vcHJvamVjdHMnO1xuXG5jb25zdCB0b2RvU3RvcmFnZSA9IFtdO1xuXG5mdW5jdGlvbiB0b2RvQ291bnRlcigpIHtcbiAgaWYgKHR5cGVvZiB0b2RvQ291bnRlci5jb3VudGVyID09PSAndW5kZWZpbmVkJykge1xuICAgIHRvZG9Db3VudGVyLmNvdW50ZXIgPSAwO1xuICB9XG4gIHRvZG9Db3VudGVyLmNvdW50ZXIgKz0gMTtcbiAgcmV0dXJuIHRvZG9Db3VudGVyLmNvdW50ZXI7XG59XG5cbmNvbnN0IHRvZG9GYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgdG9kb0lELCBwcm9qZWN0SUQpID0+ICh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgdG9kb0lELFxuICBwcm9qZWN0SUQsXG59KTtcblxuZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGVzYywgZHVlRGF0ZSkge1xuICBjb25zdCB0b2RvSUQgPSB0b2RvQ291bnRlcigpO1xuICBjb25zdCBkZWZhdWx0VG9kbyA9IHRvZG9GYWN0b3J5KFxuICAgIHRpdGxlLFxuICAgIGRlc2MsXG4gICAgZHVlRGF0ZSxcbiAgICB0b2RvSUQsXG4gICAgZ2V0RGlzcGxheWVkUHJvaigpLFxuICApO1xuXG4gIHRvZG9TdG9yYWdlLnB1c2goZGVmYXVsdFRvZG8pO1xufVxuXG5mdW5jdGlvbiBmaW5kVG9kbyhpZCkge1xuICBjb25zdCBmb3VuZFRvZG8gPSB0b2RvU3RvcmFnZS5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LnRvZG9JRCA9PT0gaWQpO1xuICByZXR1cm4gZm91bmRUb2RvO1xufVxuZnVuY3Rpb24gZ2V0VG9kb3MoKSB7XG4gIHJldHVybiB0b2RvU3RvcmFnZTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlVG9kbywgZmluZFRvZG8sIGdldFRvZG9zIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIFBzdWVkb2NvZGVcbi8vIE9uIHBhZ2UgbG9hZCwgY3JlYXRlIGEgZGVmYXVsdCBwcm9qZWN0IGFuZCBhIGRlZmF1bHQgdGFzayB3aXRoaW4gdGhhdCBwcm9qZWN0XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBmaW5kUHJvamVjdCwgZ2V0UHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3RzJztcbmltcG9ydCB7XG4gIGFkZFByb2pCdG5ET00sXG4gIGFkZFByb2pNYWluRE9NLFxuICBhZGRUb2RvRE9NLFxuICBlZGl0UHJvakxpc3RlbmVyLFxufSBmcm9tICcuL2RvbU1hbmlwJztcbmltcG9ydCB7IGNyZWF0ZVRvZG8sIGZpbmRUb2RvLCBnZXRUb2RvcyB9IGZyb20gJy4vdG9kb3MnO1xuXG4vLyBJbml0aWFsaWF0aW9uIG9mIHRoZSBkZWZhdWx0IHdlYnBhZ2Vcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB3cmFwLWlpZmVcbihmdW5jdGlvbiBpbml0KCkge1xuICAvLyBDcmVhdGluZyBkZWZhdWx0IHByb2plY3RcbiAgY3JlYXRlUHJvamVjdCgnRGVmYXVsdCBQcm9qZWN0JywgJ1lvdSBjYW4gZW50ZXIgYSBwcm9qZWN0IGRlc2NyaXB0aW9uIGhlcmUhJyk7XG4gIGNvbnN0IGZpcnN0UHJvamVjdCA9IGZpbmRQcm9qZWN0KDEpO1xuICBhZGRQcm9qQnRuRE9NKGZpcnN0UHJvamVjdCk7XG4gIGFkZFByb2pNYWluRE9NKGZpcnN0UHJvamVjdCk7XG4gIGNyZWF0ZVRvZG8oXG4gICAgJ0EgZGVmYXVsdCB0b2RvJyxcbiAgICAnWW91IGNhbiBlbnRlciBhIGxvbmdlciBkZXNjcmlwdGlvbi9kZXRhaWxzIGZvciB5b3VyIHRvZG8gaGVyZS4nLFxuICAgICcwOC8xNS8yMDIyJyxcbiAgKTtcbiAgY29uc3QgZGVmYXVsdFRvZG8gPSBmaW5kVG9kbygxKTtcbiAgYWRkVG9kb0RPTShkZWZhdWx0VG9kbyk7XG4gIGVkaXRQcm9qTGlzdGVuZXIoKTtcblxuICAvLyBjcmVhdGluZyAybmQgcHJvamVjdCBleGFtcGxlXG4gIGNyZWF0ZVByb2plY3QoXG4gICAgJ0Fub3RoZXIgUHJvamVjdCcsXG4gICAgJ0hlcmUgaXMgYW5vdGhlciBwcm9qZWN0IHdpdGggYSBkaWZmZXJlbnQgZGVzY3JpcHRpb24nLFxuICApO1xuICBjb25zdCBzZWNvbmRQcm9qZWN0ID0gZmluZFByb2plY3QoMik7XG4gIGFkZFByb2pCdG5ET00oc2Vjb25kUHJvamVjdCk7XG5cbiAgLy8gRGVidWdnaW5nLiBSZXRyaXZlIGN1cnJlbnQgcHJvamVjdHMgYW5kIHRvZG9zXG4gIGNvbnNvbGUubG9nKGdldFByb2plY3RzKCkpO1xuICBjb25zb2xlLmxvZyhnZXRUb2RvcygpKTtcbn0pKCk7XG5cbi8vIEFkZCAnRWRpdCBQcm9qZWN0JyBmdW5jdGlvbiAtIERPTkVcbi8vIEFkZCBwcm9qZWN0IHN3aXRjaGluZ1xuXG4vLyBBZGQgJ0V4cGFuZCBUb2RvJyBmdW5jdGlvblxuXG4vLyBIb3cgdG8gaGFuZGxlIGJlbG93IHR3byBjcmVhdGlvbnM/IE1vZGFsPyBjb250ZW50ZWRpdGFibGU/XG4vLyBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2hvd3RvL2hvd3RvX2pzX3BvcHVwX2Zvcm0uYXNwXG4vLyBBZGQgJ0NyZWF0ZSBUb2RvJyBmdW5jdGlvbiBhbmQgYWRkIHRvIGN1cnJlbnRseSBkaXNwbGF5ZWQgUHJvamVjdFxuLy8gQWRkICdDcmVhdGUgUHJvamVjdCcgZnVuY3Rpb24sIGNsZWFyIERPTSwgYW5kIHVwZGF0ZSB3aXRoIG5ldyBQcm9qZWN0XG4vLyBPbiBQcm9qZWN0IGNsaWNrLCBjbGVhciBET00sIGFuZCB1cGRhdGUgd2l0aCBjbGlja2VkIFByb2plY3RcblxuLy8gVW5jZXJ0YWludGl0aWVzXG4vLyBFZGl0IHByb2plY3QgaW50ZXJhY3Rpb24sIGNoYW5nZSB0byBmb3JtP1xuLy8gY29udGVudGVkaXRhYmxlXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=