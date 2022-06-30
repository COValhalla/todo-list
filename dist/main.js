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

function todoModalSubmit() {
  const button = document.querySelector('.submit');
  button.addEventListener('click', () => {
    const form = document.getElementById('myForm1');
    const title = form.elements[0].value;
    const desc = form.elements[1].value;
    const dueDate = form.elements[2].value;

    const newTodo = (0,_todos__WEBPACK_IMPORTED_MODULE_1__.createTodo)(title, desc, dueDate);
    addTodoDOM(newTodo);
    closeForm();
    // test
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
  (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.todoModalSubmit)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxDQUFDLHNEQUFXO0FBQzNCLEVBQUUseURBQWMsQ0FBQyxzREFBVztBQUM1QixFQUFFLGtEQUFVO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQVE7QUFDOUIsRUFBRSxxREFBVTs7QUFFWjtBQUNBLEVBQUUsd0RBQWE7QUFDZjtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdEQUFhLENBQUMsc0RBQVc7O0FBRTNCO0FBQ0EsRUFBRSwyREFBZ0I7QUFDbEIsRUFBRSw2REFBa0I7QUFDcEI7QUFDQSxFQUFFLDZEQUFrQjtBQUNwQixFQUFFLDBEQUFlO0FBQ2pCLEVBQUUsMERBQWU7QUFDakI7QUFDQSxvQ0FBb0Msc0RBQVc7QUFDL0MsaUNBQWlDLGdEQUFRO0FBQ3pDLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21NYW5pcC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICB1cGRhdGVQcm9qT2JqLFxuICBnZXREaXNwbGF5ZWRQcm9qLFxuICBmaW5kUHJvamVjdCxcbiAgdXBkYXRlRGlzcGxheWVkUHJvaixcbn0gZnJvbSAnLi9wcm9qZWN0cyc7XG5pbXBvcnQgeyBmaW5kUHJvalRvZG9zLCBjcmVhdGVUb2RvIH0gZnJvbSAnLi90b2Rvcyc7XG5cbmZ1bmN0aW9uIGFkZFByb2pCdG5ET00ob2JqKSB7XG4gIGNvbnN0IHNpZGViYXJQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX19wcm9qZWN0cycpO1xuICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZWZhdWx0UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyX19wcm9qZWN0Jyk7XG4gIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuU2lkZWJhcicpO1xuICBwcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtvYmoucHJvamVjdElEfWApO1xuICBwcm9qZWN0QnRuLnRleHRDb250ZW50ID0gYCR7b2JqLnRpdGxlfWA7XG4gIGRlZmF1bHRQcm9qZWN0LmFwcGVuZChwcm9qZWN0QnRuKTtcbiAgc2lkZWJhclByb2plY3RzLmFwcGVuZChkZWZhdWx0UHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2pNYWluRE9NKG9iaikge1xuICBjb25zdCBtYWluUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHMnKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnbWFpbl9fcHJvamVjdHNfX3RpdGxlJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVkaXQuY2xhc3NMaXN0LmFkZCgnbWFpbl9fcHJvamVjdHNfX2VkaXQnKTtcbiAgZWRpdC50ZXh0Q29udGVudCA9ICdFZGl0IFByb2plY3QnO1xuICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2MuY2xhc3NMaXN0LmFkZCgnbWFpbl9fcHJvamVjdHNfX2Rlc2NyaXB0aW9uJyk7XG4gIGRlc2MudGV4dENvbnRlbnQgPSBvYmouZGVzYztcbiAgbWFpblByb2plY3RzLmFwcGVuZCh0aXRsZSwgZWRpdCwgZGVzYyk7XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9ET00ob2JqKSB7XG4gIGNvbnN0IHRvZG9TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3RvZG9zJyk7XG4gIGNvbnN0IHRvZG9ESVYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb0RJVi5jbGFzc0xpc3QuYWRkKCdtYWluX190b2Rvc19fY2FyZCcsICdzbWFsbCcsIGAke29iai5wcm9qZWN0SUR9YCk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnY2FyZF9fdGl0bGUnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG5cbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2R1ZURhdGUnKTtcbiAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IG9iai5kdWVEYXRlO1xuXG4gIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWRpdC5jbGFzc0xpc3QuYWRkKCdjYXJkX19lZGl0Jyk7XG4gIGVkaXQudGV4dENvbnRlbnQgPSAnRXhwYW5kIFRvZG8nO1xuXG4gIHRvZG9ESVYuYXBwZW5kKHRpdGxlLCBkdWVEYXRlLCBlZGl0KTtcbiAgdG9kb1NlY3Rpb24uYXBwZW5kKHRvZG9ESVYpO1xufVxuZnVuY3Rpb24gYWRkQWxsVG9kb3NET00oYXJyYXkpIHtcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4gYWRkVG9kb0RPTShlbGVtZW50KSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRE9NKCkge1xuICAvLyBQcm9qZWN0IHNlY3Rpb25cbiAgY29uc3QgcHJvalRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Byb2plY3RzX190aXRsZScpO1xuICBjb25zdCBwcm9qRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19wcm9qZWN0c19fZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgcHJvakVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHNfX2VkaXQnKTtcbiAgaWYgKHByb2pUaXRsZSAhPT0gbnVsbCkge1xuICAgIHByb2pUaXRsZS5yZW1vdmUoKTtcbiAgICBwcm9qRGVzYy5yZW1vdmUoKTtcbiAgICBwcm9qRWRpdC5yZW1vdmUoKTtcbiAgICAvLyBUb2RvIHNlY3Rpb25cbiAgICBjb25zdCBhbGxUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX190b2RvcycpO1xuICAgIHdoaWxlIChhbGxUb2Rvcy5maXJzdENoaWxkKSB7XG4gICAgICBhbGxUb2Rvcy5yZW1vdmVDaGlsZChhbGxUb2Rvcy5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVET00ocHJvaklEKSB7XG4gIGNvbnN0IHByb2ogPSBmaW5kUHJvamVjdChwcm9qSUQpO1xuICBhZGRQcm9qTWFpbkRPTShwcm9qKTtcblxuICBjb25zdCBwcm9qVG9kb3MgPSBmaW5kUHJvalRvZG9zKHByb2pJRCk7XG4gIGFkZEFsbFRvZG9zRE9NKHByb2pUb2Rvcyk7XG4gIHVwZGF0ZURpc3BsYXllZFByb2oocHJvaklEKTtcbn1cblxuZnVuY3Rpb24gZWRpdFByb2pMaXN0ZW5lcigpIHtcbiAgY29uc3QgZWRpdFByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHNfX2VkaXQnKTtcbiAgY29uc3QgcHJvalNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtnZXREaXNwbGF5ZWRQcm9qKCl9YCk7XG4gIGVkaXRQcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Byb2plY3RzX190aXRsZScpO1xuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHNfX2Rlc2NyaXB0aW9uJyk7XG4gICAgaWYgKGVkaXRQcm9qLnRleHRDb250ZW50ID09PSAnRWRpdCBQcm9qZWN0Jykge1xuICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcbiAgICAgIGRlc2Muc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcbiAgICAgIGVkaXRQcm9qLnRleHRDb250ZW50ID0gJ1NhdmUgUHJvamVjdCc7XG4gICAgfSBlbHNlIGlmIChlZGl0UHJvai50ZXh0Q29udGVudCA9PT0gJ1NhdmUgUHJvamVjdCcpIHtcbiAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgZmFsc2UpO1xuICAgICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIGZhbHNlKTtcbiAgICAgIGVkaXRQcm9qLnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCc7XG4gICAgICBwcm9qU2lkZWJhci50ZXh0Q29udGVudCA9IHRpdGxlLnRleHRDb250ZW50O1xuICAgICAgdXBkYXRlUHJvak9iaih0aXRsZS50ZXh0Q29udGVudCwgZGVzYy50ZXh0Q29udGVudCk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHN3aXRjaFByb2pMaXN0ZW5lcigpIHtcbiAgY29uc3QgcHJvanMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuU2lkZWJhcicpO1xuICBBcnJheS5mcm9tKHByb2pzKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcHJvaklEID0gTWF0aC5mbG9vcihlbGVtZW50LmlkKTtcbiAgICBpZiAocHJvaklEICE9PSBnZXREaXNwbGF5ZWRQcm9qKCkpIHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyRE9NKCk7XG4gICAgICAgIGdlbmVyYXRlRE9NKHByb2pJRCk7XG4gICAgICAgIC8vIE5lZWQgdG8gYWRkIGxpc3RlbmVycyBhZ2FpbiBhZnRlciBjbGVhcmluZyBET00gYW5kIHVwZGF0aW5nIGRpc3BsYXlpbmcgcHJvamVjdFxuICAgICAgICBzd2l0Y2hQcm9qTGlzdGVuZXIoKTtcbiAgICAgICAgZWRpdFByb2pMaXN0ZW5lcigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gb3BlbkZvcm0oKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZnVuY3Rpb24gY2xvc2VGb3JtKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kb0xpc3RlbmVyKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuVG9kbycpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUZvcm0nKS5zdHlsZS5kaXNwbGF5ICE9PSAnYmxvY2snKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvZG9Nb2RhbENhbmNlbCgpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbCcpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZUZvcm0oKSk7XG59XG5cbmZ1bmN0aW9uIHRvZG9Nb2RhbFN1Ym1pdCgpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUZvcm0xJyk7XG4gICAgY29uc3QgdGl0bGUgPSBmb3JtLmVsZW1lbnRzWzBdLnZhbHVlO1xuICAgIGNvbnN0IGRlc2MgPSBmb3JtLmVsZW1lbnRzWzFdLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBmb3JtLmVsZW1lbnRzWzJdLnZhbHVlO1xuXG4gICAgY29uc3QgbmV3VG9kbyA9IGNyZWF0ZVRvZG8odGl0bGUsIGRlc2MsIGR1ZURhdGUpO1xuICAgIGFkZFRvZG9ET00obmV3VG9kbyk7XG4gICAgY2xvc2VGb3JtKCk7XG4gICAgLy8gdGVzdFxuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvakxpc3RlbmVyKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuUHJvamVjdCcpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7fSk7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBvYmplY3QtY3VybHktbmV3bGluZVxuZXhwb3J0IHtcbiAgYWRkUHJvakJ0bkRPTSxcbiAgYWRkUHJvak1haW5ET00sXG4gIGFkZFRvZG9ET00sXG4gIGNsZWFyRE9NLFxuICBlZGl0UHJvakxpc3RlbmVyLFxuICBzd2l0Y2hQcm9qTGlzdGVuZXIsXG4gIGNyZWF0ZVRvZG9MaXN0ZW5lcixcbiAgdG9kb01vZGFsQ2FuY2VsLFxuICB0b2RvTW9kYWxTdWJtaXQsXG4gIGNsb3NlRm9ybSxcbiAgb3BlbkZvcm0sXG59O1xuIiwiY29uc3QgcHJvamVjdFN0b3JhZ2UgPSBbXTtcbmxldCBkaXNwbGF5ZWRQcm9qID0gMTtcblxuZnVuY3Rpb24gcHJvamVjdENvdW50ZXIoKSB7XG4gIGlmICh0eXBlb2YgcHJvamVjdENvdW50ZXIuY291bnRlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBwcm9qZWN0Q291bnRlci5jb3VudGVyID0gMDtcbiAgfVxuICBwcm9qZWN0Q291bnRlci5jb3VudGVyICs9IDE7XG4gIHJldHVybiBwcm9qZWN0Q291bnRlci5jb3VudGVyO1xufVxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAodGl0bGUsIGRlc2MpID0+IHtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gKCkgPT4gY29uc29sZS5sb2codGl0bGUpO1xuICBjb25zdCBwcm9qZWN0SUQgPSBwcm9qZWN0Q291bnRlcigpO1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2MsXG4gICAgcHJvamVjdElELFxuICAgIHByb2plY3RUaXRsZSxcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2MpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHRpdGxlLCBkZXNjKTtcbiAgcHJvamVjdFN0b3JhZ2UucHVzaChuZXdQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gZmluZFByb2plY3QoaWQpIHtcbiAgY29uc3QgZm91bmRPYmogPSBwcm9qZWN0U3RvcmFnZS5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LnByb2plY3RJRCA9PT0gaWQpO1xuICByZXR1cm4gZm91bmRPYmo7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2pPYmoodGl0bGUsIGRlc2MpIHtcbiAgY29uc3QgZm91bmRJbmRleCA9IHByb2plY3RTdG9yYWdlLmZpbmRJbmRleChcbiAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5wcm9qZWN0SUQgPT09IGRpc3BsYXllZFByb2osXG4gICk7XG4gIHByb2plY3RTdG9yYWdlW2ZvdW5kSW5kZXhdLnRpdGxlID0gdGl0bGU7XG4gIHByb2plY3RTdG9yYWdlW2ZvdW5kSW5kZXhdLmRlc2MgPSBkZXNjO1xuICBjb25zb2xlLmxvZygnVXBkYXRlZCBQcm9qZWN0czogJywgcHJvamVjdFN0b3JhZ2UpO1xufVxuXG5mdW5jdGlvbiBnZXREaXNwbGF5ZWRQcm9qKCkge1xuICByZXR1cm4gZGlzcGxheWVkUHJvajtcbn1cbmZ1bmN0aW9uIHVwZGF0ZURpc3BsYXllZFByb2oocHJvaklEKSB7XG4gIGRpc3BsYXllZFByb2ogPSBwcm9qSUQ7XG59XG5mdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgcmV0dXJuIHByb2plY3RTdG9yYWdlO1xufVxuXG5leHBvcnQge1xuICBjcmVhdGVQcm9qZWN0LFxuICBmaW5kUHJvamVjdCxcbiAgdXBkYXRlUHJvak9iaixcbiAgZ2V0RGlzcGxheWVkUHJvaixcbiAgZ2V0UHJvamVjdHMsXG4gIHVwZGF0ZURpc3BsYXllZFByb2osXG59O1xuIiwiaW1wb3J0IHsgYWRkVG9kb0RPTSB9IGZyb20gJy4vZG9tTWFuaXAnO1xuaW1wb3J0IHsgZ2V0RGlzcGxheWVkUHJvaiB9IGZyb20gJy4vcHJvamVjdHMnO1xuXG5jb25zdCB0b2RvU3RvcmFnZSA9IFtdO1xuXG5mdW5jdGlvbiB0b2RvQ291bnRlcigpIHtcbiAgaWYgKHR5cGVvZiB0b2RvQ291bnRlci5jb3VudGVyID09PSAndW5kZWZpbmVkJykge1xuICAgIHRvZG9Db3VudGVyLmNvdW50ZXIgPSAwO1xuICB9XG4gIHRvZG9Db3VudGVyLmNvdW50ZXIgKz0gMTtcbiAgcmV0dXJuIHRvZG9Db3VudGVyLmNvdW50ZXI7XG59XG5cbmNvbnN0IHRvZG9GYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgdG9kb0lELCBwcm9qZWN0SUQpID0+ICh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgdG9kb0lELFxuICBwcm9qZWN0SUQsXG59KTtcblxuZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGVzYywgZHVlRGF0ZSkge1xuICBjb25zdCB0b2RvSUQgPSB0b2RvQ291bnRlcigpO1xuICBjb25zdCBuZXdUb2RvID0gdG9kb0ZhY3RvcnkodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHRvZG9JRCwgZ2V0RGlzcGxheWVkUHJvaigpKTtcblxuICB0b2RvU3RvcmFnZS5wdXNoKG5ld1RvZG8pO1xuICByZXR1cm4gbmV3VG9kbztcbn1cblxuZnVuY3Rpb24gZmluZFRvZG8oaWQpIHtcbiAgY29uc3QgZm91bmRUb2RvID0gdG9kb1N0b3JhZ2UuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC50b2RvSUQgPT09IGlkKTtcbiAgcmV0dXJuIGZvdW5kVG9kbztcbn1cblxuZnVuY3Rpb24gZmluZFByb2pUb2Rvcyhwcm9qSUQpIHtcbiAgLy8gRmluZCBhbGwgdG9kb3MgYmFzZWQgb24gcHJvaklEXG4gIGNvbnN0IGZvdW5kVG9kb3MgPSB0b2RvU3RvcmFnZS5maWx0ZXIoKG9iaikgPT4gb2JqLnByb2plY3RJRCA9PT0gcHJvaklEKTtcbiAgcmV0dXJuIGZvdW5kVG9kb3M7XG59XG5cbmZ1bmN0aW9uIGdldFRvZG9zKCkge1xuICByZXR1cm4gdG9kb1N0b3JhZ2U7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG8sIGZpbmRUb2RvLCBnZXRUb2RvcywgZmluZFByb2pUb2RvcyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBQc3VlZG9jb2RlXG4vLyBPbiBwYWdlIGxvYWQsIGNyZWF0ZSBhIGRlZmF1bHQgcHJvamVjdCBhbmQgYSBkZWZhdWx0IHRhc2sgd2l0aGluIHRoYXQgcHJvamVjdFxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgZmluZFByb2plY3QsIGdldFByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0cyc7XG5pbXBvcnQge1xuICBhZGRQcm9qQnRuRE9NLFxuICBhZGRQcm9qTWFpbkRPTSxcbiAgYWRkVG9kb0RPTSxcbiAgY3JlYXRlVG9kb0xpc3RlbmVyLFxuICBlZGl0UHJvakxpc3RlbmVyLFxuICBzd2l0Y2hQcm9qTGlzdGVuZXIsXG4gIHRvZG9Nb2RhbENhbmNlbCxcbiAgdG9kb01vZGFsU3VibWl0LFxufSBmcm9tICcuL2RvbU1hbmlwJztcbmltcG9ydCB7IGNyZWF0ZVRvZG8sIGZpbmRUb2RvLCBnZXRUb2RvcyB9IGZyb20gJy4vdG9kb3MnO1xuXG4vLyBJbml0aWFsaWF0aW9uIG9mIHRoZSBkZWZhdWx0IHdlYnBhZ2Vcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB3cmFwLWlpZmVcbihmdW5jdGlvbiBpbml0KCkge1xuICAvLyBDcmVhdGluZyBkZWZhdWx0IHByb2plY3RcbiAgY3JlYXRlUHJvamVjdCgnRGVmYXVsdCBQcm9qZWN0JywgJ1lvdSBjYW4gZW50ZXIgYSBwcm9qZWN0IGRlc2NyaXB0aW9uIGhlcmUhJyk7XG4gIGFkZFByb2pCdG5ET00oZmluZFByb2plY3QoMSkpO1xuICBhZGRQcm9qTWFpbkRPTShmaW5kUHJvamVjdCgxKSk7XG4gIGNyZWF0ZVRvZG8oXG4gICAgJ0EgZGVmYXVsdCB0b2RvJyxcbiAgICAnWW91IGNhbiBlbnRlciBhIGxvbmdlciBkZXNjcmlwdGlvbi9kZXRhaWxzIGZvciB5b3VyIHRvZG8gaGVyZS4nLFxuICAgICcwOC8xNS8yMDIyJyxcbiAgKTtcbiAgY29uc3QgZGVmYXVsdFRvZG8gPSBmaW5kVG9kbygxKTtcbiAgYWRkVG9kb0RPTShkZWZhdWx0VG9kbyk7XG5cbiAgLy8gY3JlYXRpbmcgMm5kIHByb2plY3QgZXhhbXBsZVxuICBjcmVhdGVQcm9qZWN0KFxuICAgICdBbm90aGVyIFByb2plY3QnLFxuICAgICdIZXJlIGlzIGFub3RoZXIgcHJvamVjdCB3aXRoIGEgZGlmZmVyZW50IGRlc2NyaXB0aW9uJyxcbiAgKTtcbiAgYWRkUHJvakJ0bkRPTShmaW5kUHJvamVjdCgyKSk7XG5cbiAgLy8gRXZlbnQgbGlzdGVuZXJzLCBldmVudHVhbGx5IGFkZCBpbnRvIHRoZWlyIG93biBmdW5jdGlvblxuICBlZGl0UHJvakxpc3RlbmVyKCk7XG4gIHN3aXRjaFByb2pMaXN0ZW5lcigpO1xuICAvLyBDcmVhdGUgbmV3IHRvZG9cbiAgY3JlYXRlVG9kb0xpc3RlbmVyKCk7XG4gIHRvZG9Nb2RhbENhbmNlbCgpO1xuICB0b2RvTW9kYWxTdWJtaXQoKTtcbiAgLy8gRGVidWdnaW5nLiBSZXRyaXZlIGN1cnJlbnQgcHJvamVjdHMgYW5kIHRvZG9zXG4gIGNvbnNvbGUubG9nKCdJbml0aWFsIFByb2plY3RzOiAnLCBnZXRQcm9qZWN0cygpKTtcbiAgY29uc29sZS5sb2coJ0luaXRpYWwgVG9kb3M6ICcsIGdldFRvZG9zKCkpO1xufSkoKTtcblxuLy8gQWRkICdFZGl0IFByb2plY3QnIGZ1bmN0aW9uIC0gRE9ORVxuLy8gV3JpdGUgZnVuY3Rpb24gZm9yIGNsZWFyaW5nIERPTSAtLSBET05FXG4vLyBBZGQgcHJvamVjdCBzd2l0Y2hpbmcgLS0gRE9NXG4vLyBBZGQgbmV3IHRvZG9zXG5cbi8vIEFkZCAnRXhwYW5kIFRvZG8nIGZ1bmN0aW9uXG5cbi8vIEhvdyB0byBoYW5kbGUgYmVsb3cgdHdvIGNyZWF0aW9ucz8gTW9kYWw/IGNvbnRlbnRlZGl0YWJsZT9cbi8vIGh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vaG93dG8vaG93dG9fanNfcG9wdXBfZm9ybS5hc3Bcbi8vIEFkZCAnQ3JlYXRlIFRvZG8nIGZ1bmN0aW9uIGFuZCBhZGQgdG8gY3VycmVudGx5IGRpc3BsYXllZCBQcm9qZWN0XG4vLyBBZGQgJ0NyZWF0ZSBQcm9qZWN0JyBmdW5jdGlvbiwgY2xlYXIgRE9NLCBhbmQgdXBkYXRlIHdpdGggbmV3IFByb2plY3Rcbi8vIE9uIFByb2plY3QgY2xpY2ssIGNsZWFyIERPTSwgYW5kIHVwZGF0ZSB3aXRoIGNsaWNrZWQgUHJvamVjdFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9