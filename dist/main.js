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
/* harmony export */   "createTodoListener": () => (/* binding */ createTodoListener),
/* harmony export */   "editProjListener": () => (/* binding */ editProjListener),
/* harmony export */   "openForm": () => (/* binding */ openForm),
/* harmony export */   "switchProjListener": () => (/* binding */ switchProjListener),
/* harmony export */   "todoModalCancel": () => (/* binding */ todoModalCancel)
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
}

function closeForm() {
  document.getElementById('myForm').style.display = 'none';
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
  // Debugging. Retrive current projects and todos
  console.log('Initial Projects: ', (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getProjects)());
  console.log('Initial Todos: ', (0,_todos__WEBPACK_IMPORTED_MODULE_2__.getTodos)());
})();

// Add 'Edit Project' function - DONE
// Write function for clearing DOM -- DONE
// Add project switching -- DOM
// Add new todos

// Add 'Expand Todo' function

// How to handle below two creations? Modal? contenteditable?
// https://www.w3schools.com/howto/howto_js_popup_form.asp
// Add 'Create Todo' function and add to currently displayed Project
// Add 'Create Project' function, clear DOM, and update with new Project
// On Project click, clear DOM, and update with clicked Project

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhO0FBQ2YsRUFBRSx3REFBYSxDQUFDLHNEQUFXO0FBQzNCLEVBQUUseURBQWMsQ0FBQyxzREFBVztBQUM1QixFQUFFLGtEQUFVO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQVE7QUFDOUIsRUFBRSxxREFBVTs7QUFFWjtBQUNBLEVBQUUsd0RBQWE7QUFDZjtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdEQUFhLENBQUMsc0RBQVc7O0FBRTNCO0FBQ0EsRUFBRSwyREFBZ0I7QUFDbEIsRUFBRSw2REFBa0I7QUFDcEI7QUFDQSxFQUFFLDZEQUFrQjtBQUNwQixFQUFFLDBEQUFlO0FBQ2pCO0FBQ0Esb0NBQW9DLHNEQUFXO0FBQy9DLGlDQUFpQyxnREFBUTtBQUN6QyxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tTWFuaXAuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgdXBkYXRlUHJvak9iaixcbiAgZ2V0RGlzcGxheWVkUHJvaixcbiAgZmluZFByb2plY3QsXG4gIHVwZGF0ZURpc3BsYXllZFByb2osXG59IGZyb20gJy4vcHJvamVjdHMnO1xuaW1wb3J0IHsgZmluZFByb2pUb2RvcyB9IGZyb20gJy4vdG9kb3MnO1xuXG5mdW5jdGlvbiBhZGRQcm9qQnRuRE9NKG9iaikge1xuICBjb25zdCBzaWRlYmFyUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fcHJvamVjdHMnKTtcbiAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVmYXVsdFByb2plY3QuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcl9fcHJvamVjdCcpO1xuICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0blNpZGViYXInKTtcbiAgcHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7b2JqLnByb2plY3RJRH1gKTtcbiAgcHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IGAke29iai50aXRsZX1gO1xuICBkZWZhdWx0UHJvamVjdC5hcHBlbmQocHJvamVjdEJ0bik7XG4gIHNpZGViYXJQcm9qZWN0cy5hcHBlbmQoZGVmYXVsdFByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qTWFpbkRPTShvYmopIHtcbiAgY29uc3QgbWFpblByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Byb2plY3RzJyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ21haW5fX3Byb2plY3RzX190aXRsZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoJ21haW5fX3Byb2plY3RzX19lZGl0Jyk7XG4gIGVkaXQudGV4dENvbnRlbnQgPSAnRWRpdCBQcm9qZWN0JztcbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXNjLmNsYXNzTGlzdC5hZGQoJ21haW5fX3Byb2plY3RzX19kZXNjcmlwdGlvbicpO1xuICBkZXNjLnRleHRDb250ZW50ID0gb2JqLmRlc2M7XG4gIG1haW5Qcm9qZWN0cy5hcHBlbmQodGl0bGUsIGVkaXQsIGRlc2MpO1xufVxuXG5mdW5jdGlvbiBhZGRUb2RvRE9NKG9iaikge1xuICBjb25zdCB0b2RvU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX190b2RvcycpO1xuICBjb25zdCB0b2RvRElWID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9ESVYuY2xhc3NMaXN0LmFkZCgnbWFpbl9fdG9kb3NfX2NhcmQnLCAnc21hbGwnLCBgJHtvYmoucHJvamVjdElEfWApO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX3RpdGxlJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19kdWVEYXRlJyk7XG4gIGR1ZURhdGUudGV4dENvbnRlbnQgPSBvYmouZHVlRGF0ZTtcblxuICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVkaXQuY2xhc3NMaXN0LmFkZCgnY2FyZF9fZWRpdCcpO1xuICBlZGl0LnRleHRDb250ZW50ID0gJ0V4cGFuZCBUb2RvJztcblxuICB0b2RvRElWLmFwcGVuZCh0aXRsZSwgZHVlRGF0ZSwgZWRpdCk7XG4gIHRvZG9TZWN0aW9uLmFwcGVuZCh0b2RvRElWKTtcbn1cbmZ1bmN0aW9uIGFkZEFsbFRvZG9zRE9NKGFycmF5KSB7XG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IGFkZFRvZG9ET00oZWxlbWVudCkpO1xufVxuXG5mdW5jdGlvbiBjbGVhckRPTSgpIHtcbiAgLy8gUHJvamVjdCBzZWN0aW9uXG4gIGNvbnN0IHByb2pUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19wcm9qZWN0c19fdGl0bGUnKTtcbiAgY29uc3QgcHJvakRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHNfX2Rlc2NyaXB0aW9uJyk7XG4gIGNvbnN0IHByb2pFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Byb2plY3RzX19lZGl0Jyk7XG4gIGlmIChwcm9qVGl0bGUgIT09IG51bGwpIHtcbiAgICBwcm9qVGl0bGUucmVtb3ZlKCk7XG4gICAgcHJvakRlc2MucmVtb3ZlKCk7XG4gICAgcHJvakVkaXQucmVtb3ZlKCk7XG4gICAgLy8gVG9kbyBzZWN0aW9uXG4gICAgY29uc3QgYWxsVG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fdG9kb3MnKTtcbiAgICB3aGlsZSAoYWxsVG9kb3MuZmlyc3RDaGlsZCkge1xuICAgICAgYWxsVG9kb3MucmVtb3ZlQ2hpbGQoYWxsVG9kb3MuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRE9NKHByb2pJRCkge1xuICBjb25zdCBwcm9qID0gZmluZFByb2plY3QocHJvaklEKTtcbiAgYWRkUHJvak1haW5ET00ocHJvaik7XG5cbiAgY29uc3QgcHJvalRvZG9zID0gZmluZFByb2pUb2Rvcyhwcm9qSUQpO1xuICBhZGRBbGxUb2Rvc0RPTShwcm9qVG9kb3MpO1xuICB1cGRhdGVEaXNwbGF5ZWRQcm9qKHByb2pJRCk7XG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9qTGlzdGVuZXIoKSB7XG4gIGNvbnN0IGVkaXRQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Byb2plY3RzX19lZGl0Jyk7XG4gIGNvbnN0IHByb2pTaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7Z2V0RGlzcGxheWVkUHJvaigpfWApO1xuICBlZGl0UHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19wcm9qZWN0c19fdGl0bGUnKTtcbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Byb2plY3RzX19kZXNjcmlwdGlvbicpO1xuICAgIGlmIChlZGl0UHJvai50ZXh0Q29udGVudCA9PT0gJ0VkaXQgUHJvamVjdCcpIHtcbiAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdHJ1ZSk7XG4gICAgICBkZXNjLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdHJ1ZSk7XG4gICAgICBlZGl0UHJvai50ZXh0Q29udGVudCA9ICdTYXZlIFByb2plY3QnO1xuICAgIH0gZWxzZSBpZiAoZWRpdFByb2oudGV4dENvbnRlbnQgPT09ICdTYXZlIFByb2plY3QnKSB7XG4gICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIGZhbHNlKTtcbiAgICAgIGRlc2Muc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCBmYWxzZSk7XG4gICAgICBlZGl0UHJvai50ZXh0Q29udGVudCA9ICdFZGl0IFByb2plY3QnO1xuICAgICAgcHJvalNpZGViYXIudGV4dENvbnRlbnQgPSB0aXRsZS50ZXh0Q29udGVudDtcbiAgICAgIHVwZGF0ZVByb2pPYmoodGl0bGUudGV4dENvbnRlbnQsIGRlc2MudGV4dENvbnRlbnQpO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBzd2l0Y2hQcm9qTGlzdGVuZXIoKSB7XG4gIGNvbnN0IHByb2pzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0blNpZGViYXInKTtcbiAgQXJyYXkuZnJvbShwcm9qcykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHByb2pJRCA9IE1hdGguZmxvb3IoZWxlbWVudC5pZCk7XG4gICAgaWYgKHByb2pJRCAhPT0gZ2V0RGlzcGxheWVkUHJvaigpKSB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbGVhckRPTSgpO1xuICAgICAgICBnZW5lcmF0ZURPTShwcm9qSUQpO1xuICAgICAgICAvLyBOZWVkIHRvIGFkZCBsaXN0ZW5lcnMgYWdhaW4gYWZ0ZXIgY2xlYXJpbmcgRE9NIGFuZCB1cGRhdGluZyBkaXNwbGF5aW5nIHByb2plY3RcbiAgICAgICAgc3dpdGNoUHJvakxpc3RlbmVyKCk7XG4gICAgICAgIGVkaXRQcm9qTGlzdGVuZXIoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5Gb3JtKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Rm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9MaXN0ZW5lcigpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0blRvZG8nKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtJykuc3R5bGUuZGlzcGxheSAhPT0gJ2Jsb2NrJykge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Rm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b2RvTW9kYWxDYW5jZWwoKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2VGb3JtKCkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qTGlzdGVuZXIoKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5Qcm9qZWN0Jyk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHt9KTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG9iamVjdC1jdXJseS1uZXdsaW5lXG5leHBvcnQge1xuICBhZGRQcm9qQnRuRE9NLFxuICBhZGRQcm9qTWFpbkRPTSxcbiAgYWRkVG9kb0RPTSxcbiAgY2xlYXJET00sXG4gIGVkaXRQcm9qTGlzdGVuZXIsXG4gIHN3aXRjaFByb2pMaXN0ZW5lcixcbiAgY3JlYXRlVG9kb0xpc3RlbmVyLFxuICB0b2RvTW9kYWxDYW5jZWwsXG4gIGNsb3NlRm9ybSxcbiAgb3BlbkZvcm0sXG59O1xuIiwiY29uc3QgcHJvamVjdFN0b3JhZ2UgPSBbXTtcbmxldCBkaXNwbGF5ZWRQcm9qID0gMTtcblxuZnVuY3Rpb24gcHJvamVjdENvdW50ZXIoKSB7XG4gIGlmICh0eXBlb2YgcHJvamVjdENvdW50ZXIuY291bnRlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBwcm9qZWN0Q291bnRlci5jb3VudGVyID0gMDtcbiAgfVxuICBwcm9qZWN0Q291bnRlci5jb3VudGVyICs9IDE7XG4gIHJldHVybiBwcm9qZWN0Q291bnRlci5jb3VudGVyO1xufVxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAodGl0bGUsIGRlc2MpID0+IHtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gKCkgPT4gY29uc29sZS5sb2codGl0bGUpO1xuICBjb25zdCBwcm9qZWN0SUQgPSBwcm9qZWN0Q291bnRlcigpO1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2MsXG4gICAgcHJvamVjdElELFxuICAgIHByb2plY3RUaXRsZSxcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2MpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHRpdGxlLCBkZXNjKTtcbiAgcHJvamVjdFN0b3JhZ2UucHVzaChuZXdQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gZmluZFByb2plY3QoaWQpIHtcbiAgY29uc3QgZm91bmRPYmogPSBwcm9qZWN0U3RvcmFnZS5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LnByb2plY3RJRCA9PT0gaWQpO1xuICByZXR1cm4gZm91bmRPYmo7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2pPYmoodGl0bGUsIGRlc2MpIHtcbiAgY29uc3QgZm91bmRJbmRleCA9IHByb2plY3RTdG9yYWdlLmZpbmRJbmRleChcbiAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5wcm9qZWN0SUQgPT09IGRpc3BsYXllZFByb2osXG4gICk7XG4gIHByb2plY3RTdG9yYWdlW2ZvdW5kSW5kZXhdLnRpdGxlID0gdGl0bGU7XG4gIHByb2plY3RTdG9yYWdlW2ZvdW5kSW5kZXhdLmRlc2MgPSBkZXNjO1xuICBjb25zb2xlLmxvZygnVXBkYXRlZCBQcm9qZWN0czogJywgcHJvamVjdFN0b3JhZ2UpO1xufVxuXG5mdW5jdGlvbiBnZXREaXNwbGF5ZWRQcm9qKCkge1xuICByZXR1cm4gZGlzcGxheWVkUHJvajtcbn1cbmZ1bmN0aW9uIHVwZGF0ZURpc3BsYXllZFByb2oocHJvaklEKSB7XG4gIGRpc3BsYXllZFByb2ogPSBwcm9qSUQ7XG59XG5mdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgcmV0dXJuIHByb2plY3RTdG9yYWdlO1xufVxuXG5leHBvcnQge1xuICBjcmVhdGVQcm9qZWN0LFxuICBmaW5kUHJvamVjdCxcbiAgdXBkYXRlUHJvak9iaixcbiAgZ2V0RGlzcGxheWVkUHJvaixcbiAgZ2V0UHJvamVjdHMsXG4gIHVwZGF0ZURpc3BsYXllZFByb2osXG59O1xuIiwiaW1wb3J0IHsgYWRkVG9kb0RPTSB9IGZyb20gJy4vZG9tTWFuaXAnO1xuaW1wb3J0IHsgZ2V0RGlzcGxheWVkUHJvaiB9IGZyb20gJy4vcHJvamVjdHMnO1xuXG5jb25zdCB0b2RvU3RvcmFnZSA9IFtdO1xuXG5mdW5jdGlvbiB0b2RvQ291bnRlcigpIHtcbiAgaWYgKHR5cGVvZiB0b2RvQ291bnRlci5jb3VudGVyID09PSAndW5kZWZpbmVkJykge1xuICAgIHRvZG9Db3VudGVyLmNvdW50ZXIgPSAwO1xuICB9XG4gIHRvZG9Db3VudGVyLmNvdW50ZXIgKz0gMTtcbiAgcmV0dXJuIHRvZG9Db3VudGVyLmNvdW50ZXI7XG59XG5cbmNvbnN0IHRvZG9GYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgdG9kb0lELCBwcm9qZWN0SUQpID0+ICh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgdG9kb0lELFxuICBwcm9qZWN0SUQsXG59KTtcblxuZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGVzYywgZHVlRGF0ZSkge1xuICBjb25zdCB0b2RvSUQgPSB0b2RvQ291bnRlcigpO1xuICBjb25zdCBkZWZhdWx0VG9kbyA9IHRvZG9GYWN0b3J5KFxuICAgIHRpdGxlLFxuICAgIGRlc2MsXG4gICAgZHVlRGF0ZSxcbiAgICB0b2RvSUQsXG4gICAgZ2V0RGlzcGxheWVkUHJvaigpLFxuICApO1xuXG4gIHRvZG9TdG9yYWdlLnB1c2goZGVmYXVsdFRvZG8pO1xufVxuXG5mdW5jdGlvbiBmaW5kVG9kbyhpZCkge1xuICBjb25zdCBmb3VuZFRvZG8gPSB0b2RvU3RvcmFnZS5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LnRvZG9JRCA9PT0gaWQpO1xuICByZXR1cm4gZm91bmRUb2RvO1xufVxuXG5mdW5jdGlvbiBmaW5kUHJvalRvZG9zKHByb2pJRCkge1xuICAvLyBGaW5kIGFsbCB0b2RvcyBiYXNlZCBvbiBwcm9qSURcbiAgY29uc3QgZm91bmRUb2RvcyA9IHRvZG9TdG9yYWdlLmZpbHRlcigob2JqKSA9PiBvYmoucHJvamVjdElEID09PSBwcm9qSUQpO1xuICByZXR1cm4gZm91bmRUb2Rvcztcbn1cblxuY29uc3Qgb2JqZWN0cyA9IFtdO1xuY29uc3QgdGVzdDEgPSB7XG4gIHByb2plY3Q6IDEsXG4gIG5hbWU6ICdKb2UnLFxufTtcbmNvbnN0IHRlc3QyID0ge1xuICBwcm9qZWN0OiAyLFxuICBuYW1lOiAnSm9leScsXG59O1xuY29uc3QgdGVzdDMgPSB7XG4gIHByb2plY3Q6IDEsXG4gIG5hbWU6ICdKb3NlcGgnLFxufTtcbm9iamVjdHMucHVzaCh0ZXN0MSwgdGVzdDIsIHRlc3QzKTtcbm9iamVjdHM7XG5cbmNvbnN0IGZvdW5kUHJvaiA9IG9iamVjdHMuZmlsdGVyKChvYmopID0+IG9iai5wcm9qZWN0ID09PSAxKTtcblxuZnVuY3Rpb24gZ2V0VG9kb3MoKSB7XG4gIHJldHVybiB0b2RvU3RvcmFnZTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlVG9kbywgZmluZFRvZG8sIGdldFRvZG9zLCBmaW5kUHJvalRvZG9zIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIFBzdWVkb2NvZGVcbi8vIE9uIHBhZ2UgbG9hZCwgY3JlYXRlIGEgZGVmYXVsdCBwcm9qZWN0IGFuZCBhIGRlZmF1bHQgdGFzayB3aXRoaW4gdGhhdCBwcm9qZWN0XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBmaW5kUHJvamVjdCwgZ2V0UHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3RzJztcbmltcG9ydCB7XG4gIGFkZFByb2pCdG5ET00sXG4gIGFkZFByb2pNYWluRE9NLFxuICBhZGRUb2RvRE9NLFxuICBjcmVhdGVUb2RvTGlzdGVuZXIsXG4gIGVkaXRQcm9qTGlzdGVuZXIsXG4gIHN3aXRjaFByb2pMaXN0ZW5lcixcbiAgdG9kb01vZGFsQ2FuY2VsLFxufSBmcm9tICcuL2RvbU1hbmlwJztcbmltcG9ydCB7IGNyZWF0ZVRvZG8sIGZpbmRUb2RvLCBnZXRUb2RvcyB9IGZyb20gJy4vdG9kb3MnO1xuXG4vLyBJbml0aWFsaWF0aW9uIG9mIHRoZSBkZWZhdWx0IHdlYnBhZ2Vcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB3cmFwLWlpZmVcbihmdW5jdGlvbiBpbml0KCkge1xuICAvLyBDcmVhdGluZyBkZWZhdWx0IHByb2plY3RcbiAgY3JlYXRlUHJvamVjdCgnRGVmYXVsdCBQcm9qZWN0JywgJ1lvdSBjYW4gZW50ZXIgYSBwcm9qZWN0IGRlc2NyaXB0aW9uIGhlcmUhJyk7XG4gIGFkZFByb2pCdG5ET00oZmluZFByb2plY3QoMSkpO1xuICBhZGRQcm9qTWFpbkRPTShmaW5kUHJvamVjdCgxKSk7XG4gIGNyZWF0ZVRvZG8oXG4gICAgJ0EgZGVmYXVsdCB0b2RvJyxcbiAgICAnWW91IGNhbiBlbnRlciBhIGxvbmdlciBkZXNjcmlwdGlvbi9kZXRhaWxzIGZvciB5b3VyIHRvZG8gaGVyZS4nLFxuICAgICcwOC8xNS8yMDIyJyxcbiAgKTtcbiAgY29uc3QgZGVmYXVsdFRvZG8gPSBmaW5kVG9kbygxKTtcbiAgYWRkVG9kb0RPTShkZWZhdWx0VG9kbyk7XG5cbiAgLy8gY3JlYXRpbmcgMm5kIHByb2plY3QgZXhhbXBsZVxuICBjcmVhdGVQcm9qZWN0KFxuICAgICdBbm90aGVyIFByb2plY3QnLFxuICAgICdIZXJlIGlzIGFub3RoZXIgcHJvamVjdCB3aXRoIGEgZGlmZmVyZW50IGRlc2NyaXB0aW9uJyxcbiAgKTtcbiAgYWRkUHJvakJ0bkRPTShmaW5kUHJvamVjdCgyKSk7XG5cbiAgLy8gRXZlbnQgbGlzdGVuZXJzLCBldmVudHVhbGx5IGFkZCBpbnRvIHRoZWlyIG93biBmdW5jdGlvblxuICBlZGl0UHJvakxpc3RlbmVyKCk7XG4gIHN3aXRjaFByb2pMaXN0ZW5lcigpO1xuICAvLyBDcmVhdGUgbmV3IHRvZG9cbiAgY3JlYXRlVG9kb0xpc3RlbmVyKCk7XG4gIHRvZG9Nb2RhbENhbmNlbCgpO1xuICAvLyBEZWJ1Z2dpbmcuIFJldHJpdmUgY3VycmVudCBwcm9qZWN0cyBhbmQgdG9kb3NcbiAgY29uc29sZS5sb2coJ0luaXRpYWwgUHJvamVjdHM6ICcsIGdldFByb2plY3RzKCkpO1xuICBjb25zb2xlLmxvZygnSW5pdGlhbCBUb2RvczogJywgZ2V0VG9kb3MoKSk7XG59KSgpO1xuXG4vLyBBZGQgJ0VkaXQgUHJvamVjdCcgZnVuY3Rpb24gLSBET05FXG4vLyBXcml0ZSBmdW5jdGlvbiBmb3IgY2xlYXJpbmcgRE9NIC0tIERPTkVcbi8vIEFkZCBwcm9qZWN0IHN3aXRjaGluZyAtLSBET01cbi8vIEFkZCBuZXcgdG9kb3NcblxuLy8gQWRkICdFeHBhbmQgVG9kbycgZnVuY3Rpb25cblxuLy8gSG93IHRvIGhhbmRsZSBiZWxvdyB0d28gY3JlYXRpb25zPyBNb2RhbD8gY29udGVudGVkaXRhYmxlP1xuLy8gaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9ob3d0by9ob3d0b19qc19wb3B1cF9mb3JtLmFzcFxuLy8gQWRkICdDcmVhdGUgVG9kbycgZnVuY3Rpb24gYW5kIGFkZCB0byBjdXJyZW50bHkgZGlzcGxheWVkIFByb2plY3Rcbi8vIEFkZCAnQ3JlYXRlIFByb2plY3QnIGZ1bmN0aW9uLCBjbGVhciBET00sIGFuZCB1cGRhdGUgd2l0aCBuZXcgUHJvamVjdFxuLy8gT24gUHJvamVjdCBjbGljaywgY2xlYXIgRE9NLCBhbmQgdXBkYXRlIHdpdGggY2xpY2tlZCBQcm9qZWN0XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=