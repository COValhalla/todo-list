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
      // form.elements[0].value = '';
      // form.elements[1].value = '';
      // form.elements[2].value = '';
      closeForm();
    }

    // test
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
  // create new project
  (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.createProjListener)();
  (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.projModalCancel)();
  // Debugging. Retrive current projects and todos
  console.log('Initial Projects: ', (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getProjects)());
  console.log('Initial Todos: ', (0,_todos__WEBPACK_IMPORTED_MODULE_2__.getTodos)());
})();

// Add 'Edit Project' function - DONE
// Write function for clearing DOM -- DONE
// Add project switching -- DONE
// Add new todos -- DONE

// Add 'Create Project' function, clear DOM, and update with new Project
// Add 'Expand Todo' function

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDcUU7QUFZakQ7QUFDcUM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3REFBYTtBQUNmLEVBQUUsd0RBQWEsQ0FBQyxzREFBVztBQUMzQixFQUFFLHlEQUFjLENBQUMsc0RBQVc7QUFDNUIsRUFBRSxrREFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdEQUFRO0FBQzlCLEVBQUUscURBQVU7O0FBRVo7QUFDQSxFQUFFLHdEQUFhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3REFBYSxDQUFDLHNEQUFXOztBQUUzQjtBQUNBLEVBQUUsMkRBQWdCO0FBQ2xCLEVBQUUsNkRBQWtCO0FBQ3BCO0FBQ0EsRUFBRSw2REFBa0I7QUFDcEIsRUFBRSwwREFBZTtBQUNqQixFQUFFLDBEQUFlO0FBQ2pCO0FBQ0EsRUFBRSw2REFBa0I7QUFDcEIsRUFBRSwwREFBZTtBQUNqQjtBQUNBLG9DQUFvQyxzREFBVztBQUMvQyxpQ0FBaUMsZ0RBQVE7QUFDekMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbU1hbmlwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHVwZGF0ZVByb2pPYmosXG4gIGdldERpc3BsYXllZFByb2osXG4gIGZpbmRQcm9qZWN0LFxuICB1cGRhdGVEaXNwbGF5ZWRQcm9qLFxufSBmcm9tICcuL3Byb2plY3RzJztcbmltcG9ydCB7IGZpbmRQcm9qVG9kb3MsIGNyZWF0ZVRvZG8gfSBmcm9tICcuL3RvZG9zJztcblxuZnVuY3Rpb24gYWRkUHJvakJ0bkRPTShvYmopIHtcbiAgY29uc3Qgc2lkZWJhclByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3Byb2plY3RzJyk7XG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlZmF1bHRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJfX3Byb2plY3QnKTtcbiAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG5TaWRlYmFyJyk7XG4gIHByb2plY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsIGAke29iai5wcm9qZWN0SUR9YCk7XG4gIHByb2plY3RCdG4udGV4dENvbnRlbnQgPSBgJHtvYmoudGl0bGV9YDtcbiAgZGVmYXVsdFByb2plY3QuYXBwZW5kKHByb2plY3RCdG4pO1xuICBzaWRlYmFyUHJvamVjdHMuYXBwZW5kKGRlZmF1bHRQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvak1haW5ET00ob2JqKSB7XG4gIGNvbnN0IG1haW5Qcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19wcm9qZWN0cycpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdtYWluX19wcm9qZWN0c19fdGl0bGUnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWRpdC5jbGFzc0xpc3QuYWRkKCdtYWluX19wcm9qZWN0c19fZWRpdCcpO1xuICBlZGl0LnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCc7XG4gIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzYy5jbGFzc0xpc3QuYWRkKCdtYWluX19wcm9qZWN0c19fZGVzY3JpcHRpb24nKTtcbiAgZGVzYy50ZXh0Q29udGVudCA9IG9iai5kZXNjO1xuICBtYWluUHJvamVjdHMuYXBwZW5kKHRpdGxlLCBlZGl0LCBkZXNjKTtcbn1cblxuZnVuY3Rpb24gYWRkVG9kb0RPTShvYmopIHtcbiAgY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fdG9kb3MnKTtcbiAgY29uc3QgdG9kb0RJViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvRElWLmNsYXNzTGlzdC5hZGQoJ21haW5fX3RvZG9zX19jYXJkJywgJ3NtYWxsJywgYCR7b2JqLnByb2plY3RJRH1gKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdjYXJkX190aXRsZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcblxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgnY2FyZF9fZHVlRGF0ZScpO1xuICBkdWVEYXRlLnRleHRDb250ZW50ID0gb2JqLmR1ZURhdGU7XG5cbiAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2VkaXQnKTtcbiAgZWRpdC50ZXh0Q29udGVudCA9ICdFeHBhbmQgVG9kbyc7XG5cbiAgdG9kb0RJVi5hcHBlbmQodGl0bGUsIGR1ZURhdGUsIGVkaXQpO1xuICB0b2RvU2VjdGlvbi5hcHBlbmQodG9kb0RJVik7XG59XG5mdW5jdGlvbiBhZGRBbGxUb2Rvc0RPTShhcnJheSkge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiBhZGRUb2RvRE9NKGVsZW1lbnQpKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJET00oKSB7XG4gIC8vIFByb2plY3Qgc2VjdGlvblxuICBjb25zdCBwcm9qVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHNfX3RpdGxlJyk7XG4gIGNvbnN0IHByb2pEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Byb2plY3RzX19kZXNjcmlwdGlvbicpO1xuICBjb25zdCBwcm9qRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19wcm9qZWN0c19fZWRpdCcpO1xuICBpZiAocHJvalRpdGxlICE9PSBudWxsKSB7XG4gICAgcHJvalRpdGxlLnJlbW92ZSgpO1xuICAgIHByb2pEZXNjLnJlbW92ZSgpO1xuICAgIHByb2pFZGl0LnJlbW92ZSgpO1xuICAgIC8vIFRvZG8gc2VjdGlvblxuICAgIGNvbnN0IGFsbFRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3RvZG9zJyk7XG4gICAgd2hpbGUgKGFsbFRvZG9zLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGFsbFRvZG9zLnJlbW92ZUNoaWxkKGFsbFRvZG9zLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZURPTShwcm9qSUQpIHtcbiAgY29uc3QgcHJvaiA9IGZpbmRQcm9qZWN0KHByb2pJRCk7XG4gIGFkZFByb2pNYWluRE9NKHByb2opO1xuXG4gIGNvbnN0IHByb2pUb2RvcyA9IGZpbmRQcm9qVG9kb3MocHJvaklEKTtcbiAgYWRkQWxsVG9kb3NET00ocHJvalRvZG9zKTtcbiAgdXBkYXRlRGlzcGxheWVkUHJvaihwcm9qSUQpO1xufVxuXG5mdW5jdGlvbiBlZGl0UHJvakxpc3RlbmVyKCkge1xuICBjb25zdCBlZGl0UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19wcm9qZWN0c19fZWRpdCcpO1xuICBjb25zdCBwcm9qU2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2dldERpc3BsYXllZFByb2ooKX1gKTtcbiAgZWRpdFByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHNfX3RpdGxlJyk7XG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19wcm9qZWN0c19fZGVzY3JpcHRpb24nKTtcbiAgICBpZiAoZWRpdFByb2oudGV4dENvbnRlbnQgPT09ICdFZGl0IFByb2plY3QnKSB7XG4gICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIHRydWUpO1xuICAgICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIHRydWUpO1xuICAgICAgZWRpdFByb2oudGV4dENvbnRlbnQgPSAnU2F2ZSBQcm9qZWN0JztcbiAgICB9IGVsc2UgaWYgKGVkaXRQcm9qLnRleHRDb250ZW50ID09PSAnU2F2ZSBQcm9qZWN0Jykge1xuICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCBmYWxzZSk7XG4gICAgICBkZXNjLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgZmFsc2UpO1xuICAgICAgZWRpdFByb2oudGV4dENvbnRlbnQgPSAnRWRpdCBQcm9qZWN0JztcbiAgICAgIHByb2pTaWRlYmFyLnRleHRDb250ZW50ID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICB1cGRhdGVQcm9qT2JqKHRpdGxlLnRleHRDb250ZW50LCBkZXNjLnRleHRDb250ZW50KTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gc3dpdGNoUHJvakxpc3RlbmVyKCkge1xuICBjb25zdCBwcm9qcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG5TaWRlYmFyJyk7XG4gIEFycmF5LmZyb20ocHJvanMpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBwcm9qSUQgPSBNYXRoLmZsb29yKGVsZW1lbnQuaWQpO1xuICAgIGlmIChwcm9qSUQgIT09IGdldERpc3BsYXllZFByb2ooKSkge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xlYXJET00oKTtcbiAgICAgICAgZ2VuZXJhdGVET00ocHJvaklEKTtcbiAgICAgICAgLy8gTmVlZCB0byBhZGQgbGlzdGVuZXJzIGFnYWluIGFmdGVyIGNsZWFyaW5nIERPTSBhbmQgdXBkYXRpbmcgZGlzcGxheWluZyBwcm9qZWN0XG4gICAgICAgIHN3aXRjaFByb2pMaXN0ZW5lcigpO1xuICAgICAgICBlZGl0UHJvakxpc3RlbmVyKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvcGVuRm9ybSgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Rm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtUHJvaicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Rm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUZvcm1Qcm9qJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kb0xpc3RlbmVyKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuVG9kbycpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUZvcm0nKS5zdHlsZS5kaXNwbGF5ICE9PSAnYmxvY2snKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvZG9Nb2RhbENhbmNlbCgpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbCcpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZUZvcm0oKSk7XG59XG5cbmZ1bmN0aW9uIHRvZG9Nb2RhbFN1Ym1pdCgpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUZvcm0xJyk7XG4gICAgY29uc3QgdGl0bGUgPSBmb3JtLmVsZW1lbnRzWzBdLnZhbHVlO1xuICAgIGNvbnN0IGRlc2MgPSBmb3JtLmVsZW1lbnRzWzFdLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBmb3JtLmVsZW1lbnRzWzJdLnZhbHVlO1xuXG4gICAgaWYgKHRpdGxlICE9PSAnJyAmJiBkZXNjICE9PSAnJyAmJiBkdWVEYXRlICE9PSAnJykge1xuICAgICAgY29uc3QgbmV3VG9kbyA9IGNyZWF0ZVRvZG8odGl0bGUsIGRlc2MsIGR1ZURhdGUpO1xuICAgICAgYWRkVG9kb0RPTShuZXdUb2RvKTtcbiAgICAgIC8vIGZvcm0uZWxlbWVudHNbMF0udmFsdWUgPSAnJztcbiAgICAgIC8vIGZvcm0uZWxlbWVudHNbMV0udmFsdWUgPSAnJztcbiAgICAgIC8vIGZvcm0uZWxlbWVudHNbMl0udmFsdWUgPSAnJztcbiAgICAgIGNsb3NlRm9ybSgpO1xuICAgIH1cblxuICAgIC8vIHRlc3RcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2pMaXN0ZW5lcigpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0blByb2plY3QnKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtUHJvaicpLnN0eWxlLmRpc3BsYXkgIT09ICdibG9jaycpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUZvcm1Qcm9qJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUZvcm1Qcm9qJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwcm9qTW9kYWxDYW5jZWwoKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qQ2FuY2VsJyk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3NlRm9ybSgpKTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG9iamVjdC1jdXJseS1uZXdsaW5lXG5leHBvcnQge1xuICBhZGRQcm9qQnRuRE9NLFxuICBhZGRQcm9qTWFpbkRPTSxcbiAgYWRkVG9kb0RPTSxcbiAgY2xlYXJET00sXG4gIGVkaXRQcm9qTGlzdGVuZXIsXG4gIHN3aXRjaFByb2pMaXN0ZW5lcixcbiAgY3JlYXRlVG9kb0xpc3RlbmVyLFxuICB0b2RvTW9kYWxDYW5jZWwsXG4gIHRvZG9Nb2RhbFN1Ym1pdCxcbiAgY2xvc2VGb3JtLFxuICBvcGVuRm9ybSxcbiAgY3JlYXRlUHJvakxpc3RlbmVyLFxuICBwcm9qTW9kYWxDYW5jZWwsXG59O1xuIiwiY29uc3QgcHJvamVjdFN0b3JhZ2UgPSBbXTtcbmxldCBkaXNwbGF5ZWRQcm9qID0gMTtcblxuZnVuY3Rpb24gcHJvamVjdENvdW50ZXIoKSB7XG4gIGlmICh0eXBlb2YgcHJvamVjdENvdW50ZXIuY291bnRlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBwcm9qZWN0Q291bnRlci5jb3VudGVyID0gMDtcbiAgfVxuICBwcm9qZWN0Q291bnRlci5jb3VudGVyICs9IDE7XG4gIHJldHVybiBwcm9qZWN0Q291bnRlci5jb3VudGVyO1xufVxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAodGl0bGUsIGRlc2MpID0+IHtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gKCkgPT4gY29uc29sZS5sb2codGl0bGUpO1xuICBjb25zdCBwcm9qZWN0SUQgPSBwcm9qZWN0Q291bnRlcigpO1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2MsXG4gICAgcHJvamVjdElELFxuICAgIHByb2plY3RUaXRsZSxcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2MpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHRpdGxlLCBkZXNjKTtcbiAgcHJvamVjdFN0b3JhZ2UucHVzaChuZXdQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gZmluZFByb2plY3QoaWQpIHtcbiAgY29uc3QgZm91bmRPYmogPSBwcm9qZWN0U3RvcmFnZS5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LnByb2plY3RJRCA9PT0gaWQpO1xuICByZXR1cm4gZm91bmRPYmo7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2pPYmoodGl0bGUsIGRlc2MpIHtcbiAgY29uc3QgZm91bmRJbmRleCA9IHByb2plY3RTdG9yYWdlLmZpbmRJbmRleChcbiAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5wcm9qZWN0SUQgPT09IGRpc3BsYXllZFByb2osXG4gICk7XG4gIHByb2plY3RTdG9yYWdlW2ZvdW5kSW5kZXhdLnRpdGxlID0gdGl0bGU7XG4gIHByb2plY3RTdG9yYWdlW2ZvdW5kSW5kZXhdLmRlc2MgPSBkZXNjO1xuICBjb25zb2xlLmxvZygnVXBkYXRlZCBQcm9qZWN0czogJywgcHJvamVjdFN0b3JhZ2UpO1xufVxuXG5mdW5jdGlvbiBnZXREaXNwbGF5ZWRQcm9qKCkge1xuICByZXR1cm4gZGlzcGxheWVkUHJvajtcbn1cbmZ1bmN0aW9uIHVwZGF0ZURpc3BsYXllZFByb2oocHJvaklEKSB7XG4gIGRpc3BsYXllZFByb2ogPSBwcm9qSUQ7XG59XG5mdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgcmV0dXJuIHByb2plY3RTdG9yYWdlO1xufVxuXG5leHBvcnQge1xuICBjcmVhdGVQcm9qZWN0LFxuICBmaW5kUHJvamVjdCxcbiAgdXBkYXRlUHJvak9iaixcbiAgZ2V0RGlzcGxheWVkUHJvaixcbiAgZ2V0UHJvamVjdHMsXG4gIHVwZGF0ZURpc3BsYXllZFByb2osXG59O1xuIiwiaW1wb3J0IHsgYWRkVG9kb0RPTSB9IGZyb20gJy4vZG9tTWFuaXAnO1xuaW1wb3J0IHsgZ2V0RGlzcGxheWVkUHJvaiB9IGZyb20gJy4vcHJvamVjdHMnO1xuXG5jb25zdCB0b2RvU3RvcmFnZSA9IFtdO1xuXG5mdW5jdGlvbiB0b2RvQ291bnRlcigpIHtcbiAgaWYgKHR5cGVvZiB0b2RvQ291bnRlci5jb3VudGVyID09PSAndW5kZWZpbmVkJykge1xuICAgIHRvZG9Db3VudGVyLmNvdW50ZXIgPSAwO1xuICB9XG4gIHRvZG9Db3VudGVyLmNvdW50ZXIgKz0gMTtcbiAgcmV0dXJuIHRvZG9Db3VudGVyLmNvdW50ZXI7XG59XG5cbmNvbnN0IHRvZG9GYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgdG9kb0lELCBwcm9qZWN0SUQpID0+ICh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgdG9kb0lELFxuICBwcm9qZWN0SUQsXG59KTtcblxuZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGVzYywgZHVlRGF0ZSkge1xuICBjb25zdCB0b2RvSUQgPSB0b2RvQ291bnRlcigpO1xuICBjb25zdCBuZXdUb2RvID0gdG9kb0ZhY3RvcnkodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHRvZG9JRCwgZ2V0RGlzcGxheWVkUHJvaigpKTtcblxuICB0b2RvU3RvcmFnZS5wdXNoKG5ld1RvZG8pO1xuICByZXR1cm4gbmV3VG9kbztcbn1cblxuZnVuY3Rpb24gZmluZFRvZG8oaWQpIHtcbiAgY29uc3QgZm91bmRUb2RvID0gdG9kb1N0b3JhZ2UuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC50b2RvSUQgPT09IGlkKTtcbiAgcmV0dXJuIGZvdW5kVG9kbztcbn1cblxuZnVuY3Rpb24gZmluZFByb2pUb2Rvcyhwcm9qSUQpIHtcbiAgLy8gRmluZCBhbGwgdG9kb3MgYmFzZWQgb24gcHJvaklEXG4gIGNvbnN0IGZvdW5kVG9kb3MgPSB0b2RvU3RvcmFnZS5maWx0ZXIoKG9iaikgPT4gb2JqLnByb2plY3RJRCA9PT0gcHJvaklEKTtcbiAgcmV0dXJuIGZvdW5kVG9kb3M7XG59XG5cbmZ1bmN0aW9uIGdldFRvZG9zKCkge1xuICByZXR1cm4gdG9kb1N0b3JhZ2U7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG8sIGZpbmRUb2RvLCBnZXRUb2RvcywgZmluZFByb2pUb2RvcyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBQc3VlZG9jb2RlXG4vLyBPbiBwYWdlIGxvYWQsIGNyZWF0ZSBhIGRlZmF1bHQgcHJvamVjdCBhbmQgYSBkZWZhdWx0IHRhc2sgd2l0aGluIHRoYXQgcHJvamVjdFxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgZmluZFByb2plY3QsIGdldFByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0cyc7XG5pbXBvcnQge1xuICBhZGRQcm9qQnRuRE9NLFxuICBhZGRQcm9qTWFpbkRPTSxcbiAgYWRkVG9kb0RPTSxcbiAgY3JlYXRlUHJvakxpc3RlbmVyLFxuICBjcmVhdGVUb2RvTGlzdGVuZXIsXG4gIGVkaXRQcm9qTGlzdGVuZXIsXG4gIHByb2pNb2RhbENhbmNlbCxcbiAgc3dpdGNoUHJvakxpc3RlbmVyLFxuICB0b2RvTW9kYWxDYW5jZWwsXG4gIHRvZG9Nb2RhbFN1Ym1pdCxcbn0gZnJvbSAnLi9kb21NYW5pcCc7XG5pbXBvcnQgeyBjcmVhdGVUb2RvLCBmaW5kVG9kbywgZ2V0VG9kb3MgfSBmcm9tICcuL3RvZG9zJztcblxuLy8gSW5pdGlhbGlhdGlvbiBvZiB0aGUgZGVmYXVsdCB3ZWJwYWdlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgd3JhcC1paWZlXG4oZnVuY3Rpb24gaW5pdCgpIHtcbiAgLy8gQ3JlYXRpbmcgZGVmYXVsdCBwcm9qZWN0XG4gIGNyZWF0ZVByb2plY3QoJ0RlZmF1bHQgUHJvamVjdCcsICdZb3UgY2FuIGVudGVyIGEgcHJvamVjdCBkZXNjcmlwdGlvbiBoZXJlIScpO1xuICBhZGRQcm9qQnRuRE9NKGZpbmRQcm9qZWN0KDEpKTtcbiAgYWRkUHJvak1haW5ET00oZmluZFByb2plY3QoMSkpO1xuICBjcmVhdGVUb2RvKFxuICAgICdBIGRlZmF1bHQgdG9kbycsXG4gICAgJ1lvdSBjYW4gZW50ZXIgYSBsb25nZXIgZGVzY3JpcHRpb24vZGV0YWlscyBmb3IgeW91ciB0b2RvIGhlcmUuJyxcbiAgICAnMDgvMTUvMjAyMicsXG4gICk7XG4gIGNvbnN0IGRlZmF1bHRUb2RvID0gZmluZFRvZG8oMSk7XG4gIGFkZFRvZG9ET00oZGVmYXVsdFRvZG8pO1xuXG4gIC8vIGNyZWF0aW5nIDJuZCBwcm9qZWN0IGV4YW1wbGVcbiAgY3JlYXRlUHJvamVjdChcbiAgICAnQW5vdGhlciBQcm9qZWN0JyxcbiAgICAnSGVyZSBpcyBhbm90aGVyIHByb2plY3Qgd2l0aCBhIGRpZmZlcmVudCBkZXNjcmlwdGlvbicsXG4gICk7XG4gIGFkZFByb2pCdG5ET00oZmluZFByb2plY3QoMikpO1xuXG4gIC8vIEV2ZW50IGxpc3RlbmVycywgZXZlbnR1YWxseSBhZGQgaW50byB0aGVpciBvd24gZnVuY3Rpb25cbiAgZWRpdFByb2pMaXN0ZW5lcigpO1xuICBzd2l0Y2hQcm9qTGlzdGVuZXIoKTtcbiAgLy8gQ3JlYXRlIG5ldyB0b2RvXG4gIGNyZWF0ZVRvZG9MaXN0ZW5lcigpO1xuICB0b2RvTW9kYWxDYW5jZWwoKTtcbiAgdG9kb01vZGFsU3VibWl0KCk7XG4gIC8vIGNyZWF0ZSBuZXcgcHJvamVjdFxuICBjcmVhdGVQcm9qTGlzdGVuZXIoKTtcbiAgcHJvak1vZGFsQ2FuY2VsKCk7XG4gIC8vIERlYnVnZ2luZy4gUmV0cml2ZSBjdXJyZW50IHByb2plY3RzIGFuZCB0b2Rvc1xuICBjb25zb2xlLmxvZygnSW5pdGlhbCBQcm9qZWN0czogJywgZ2V0UHJvamVjdHMoKSk7XG4gIGNvbnNvbGUubG9nKCdJbml0aWFsIFRvZG9zOiAnLCBnZXRUb2RvcygpKTtcbn0pKCk7XG5cbi8vIEFkZCAnRWRpdCBQcm9qZWN0JyBmdW5jdGlvbiAtIERPTkVcbi8vIFdyaXRlIGZ1bmN0aW9uIGZvciBjbGVhcmluZyBET00gLS0gRE9ORVxuLy8gQWRkIHByb2plY3Qgc3dpdGNoaW5nIC0tIERPTkVcbi8vIEFkZCBuZXcgdG9kb3MgLS0gRE9ORVxuXG4vLyBBZGQgJ0NyZWF0ZSBQcm9qZWN0JyBmdW5jdGlvbiwgY2xlYXIgRE9NLCBhbmQgdXBkYXRlIHdpdGggbmV3IFByb2plY3Rcbi8vIEFkZCAnRXhwYW5kIFRvZG8nIGZ1bmN0aW9uXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=