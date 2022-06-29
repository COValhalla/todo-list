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


function addProjBtnDOM(obj) {
  const sidebarProjects = document.querySelector('.sidebar__projects');
  const defaultProject = document.createElement('div');
  defaultProject.classList.add('sidebar__project');
  defaultProject.setAttribute('id', `${obj.projectID}`);
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

function switchProjListener() {
  const projs = document.querySelectorAll('.btnSidebar');
  Array.from(projs).forEach((element) => {
    const projID = Math.floor(element.id);
    if (projID !== (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getDisplayedProj)()) {
      element.addEventListener('click', () => {
        clearDOM();
      });
    }
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbU1hbmlwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVwZGF0ZVByb2pPYmosIGdldERpc3BsYXllZFByb2ogfSBmcm9tICcuL3Byb2plY3RzJztcblxuZnVuY3Rpb24gYWRkUHJvakJ0bkRPTShvYmopIHtcbiAgY29uc3Qgc2lkZWJhclByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3Byb2plY3RzJyk7XG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlZmF1bHRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJfX3Byb2plY3QnKTtcbiAgZGVmYXVsdFByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsIGAke29iai5wcm9qZWN0SUR9YCk7XG4gIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuU2lkZWJhcicpO1xuICBwcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtvYmoucHJvamVjdElEfWApO1xuICBwcm9qZWN0QnRuLnRleHRDb250ZW50ID0gYCR7b2JqLnRpdGxlfWA7XG4gIGRlZmF1bHRQcm9qZWN0LmFwcGVuZChwcm9qZWN0QnRuKTtcblxuICBzaWRlYmFyUHJvamVjdHMuYXBwZW5kKGRlZmF1bHRQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvak1haW5ET00ob2JqKSB7XG4gIGNvbnN0IG1haW5Qcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19wcm9qZWN0cycpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdtYWluX19wcm9qZWN0c19fdGl0bGUnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWRpdC5jbGFzc0xpc3QuYWRkKCdtYWluX19wcm9qZWN0c19fZWRpdCcpO1xuICBlZGl0LnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCc7XG4gIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzYy5jbGFzc0xpc3QuYWRkKCdtYWluX19wcm9qZWN0c19fZGVzY3JpcHRpb24nKTtcbiAgZGVzYy50ZXh0Q29udGVudCA9IG9iai5kZXNjO1xuICBtYWluUHJvamVjdHMuYXBwZW5kKHRpdGxlLCBlZGl0LCBkZXNjKTtcbn1cblxuZnVuY3Rpb24gYWRkVG9kb0RPTShvYmopIHtcbiAgY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fdG9kb3MnKTtcbiAgY29uc3QgdG9kb0RJViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvRElWLmNsYXNzTGlzdC5hZGQoJ21haW5fX3RvZG9zX19jYXJkJywgJ3NtYWxsJywgYCR7b2JqLnByb2plY3RJRH1gKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdjYXJkX190aXRsZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcblxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgnY2FyZF9fZHVlRGF0ZScpO1xuICBkdWVEYXRlLnRleHRDb250ZW50ID0gb2JqLmR1ZURhdGU7XG5cbiAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2VkaXQnKTtcbiAgZWRpdC50ZXh0Q29udGVudCA9ICdFeHBhbmQgVG9kbyc7XG5cbiAgdG9kb0RJVi5hcHBlbmQodGl0bGUsIGR1ZURhdGUsIGVkaXQpO1xuICB0b2RvU2VjdGlvbi5hcHBlbmQodG9kb0RJVik7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRE9NKCkge1xuICAvLyBQcm9qZWN0IHNlY3Rpb25cbiAgY29uc3QgcHJvalRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Byb2plY3RzX190aXRsZScpO1xuICBjb25zdCBwcm9qRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19wcm9qZWN0c19fZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgcHJvakVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHNfX2VkaXQnKTtcbiAgaWYgKHByb2pUaXRsZSAhPT0gbnVsbCkge1xuICAgIHByb2pUaXRsZS5yZW1vdmUoKTtcbiAgICBwcm9qRGVzYy5yZW1vdmUoKTtcbiAgICBwcm9qRWRpdC5yZW1vdmUoKTtcbiAgICAvLyBUb2RvIHNlY3Rpb25cbiAgICBjb25zdCBhbGxUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX190b2RvcycpO1xuICAgIHdoaWxlIChhbGxUb2Rvcy5maXJzdENoaWxkKSB7XG4gICAgICBhbGxUb2Rvcy5yZW1vdmVDaGlsZChhbGxUb2Rvcy5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc3dpdGNoUHJvakxpc3RlbmVyKCkge1xuICBjb25zdCBwcm9qcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG5TaWRlYmFyJyk7XG4gIEFycmF5LmZyb20ocHJvanMpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBwcm9qSUQgPSBNYXRoLmZsb29yKGVsZW1lbnQuaWQpO1xuICAgIGlmIChwcm9qSUQgIT09IGdldERpc3BsYXllZFByb2ooKSkge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xlYXJET00oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9qTGlzdGVuZXIoKSB7XG4gIGNvbnN0IGVkaXRQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Byb2plY3RzX19lZGl0Jyk7XG4gIGNvbnN0IHByb2pTaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICBgYnRuICR7Z2V0RGlzcGxheWVkUHJvaigpfWAsXG4gICk7XG4gIGVkaXRQcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Byb2plY3RzX190aXRsZScpO1xuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHNfX2Rlc2NyaXB0aW9uJyk7XG4gICAgaWYgKGVkaXRQcm9qLnRleHRDb250ZW50ID09PSAnRWRpdCBQcm9qZWN0Jykge1xuICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcbiAgICAgIGRlc2Muc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcbiAgICAgIGVkaXRQcm9qLnRleHRDb250ZW50ID0gJ1NhdmUgUHJvamVjdCc7XG4gICAgfSBlbHNlIGlmIChlZGl0UHJvai50ZXh0Q29udGVudCA9PT0gJ1NhdmUgUHJvamVjdCcpIHtcbiAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgZmFsc2UpO1xuICAgICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIGZhbHNlKTtcbiAgICAgIGVkaXRQcm9qLnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCc7XG4gICAgICBwcm9qU2lkZWJhclswXS50ZXh0Q29udGVudCA9IHRpdGxlLnRleHRDb250ZW50O1xuICAgICAgdXBkYXRlUHJvak9iaih0aXRsZS50ZXh0Q29udGVudCwgZGVzYy50ZXh0Q29udGVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kb0xpc3RlbmVyKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuVG9kbycpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gR2V0IGN1cnJlbnQgUHJvamVjdCBJRCBmb3IgYXNzaWdubWVudFxuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvakxpc3RlbmVyKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuUHJvamVjdCcpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7fSk7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBvYmplY3QtY3VybHktbmV3bGluZVxuZXhwb3J0IHtcbiAgYWRkUHJvakJ0bkRPTSxcbiAgYWRkUHJvak1haW5ET00sXG4gIGFkZFRvZG9ET00sXG4gIGNsZWFyRE9NLFxuICBlZGl0UHJvakxpc3RlbmVyLFxuICBzd2l0Y2hQcm9qTGlzdGVuZXIsXG59O1xuIiwiY29uc3QgcHJvamVjdFN0b3JhZ2UgPSBbXTtcbmNvbnN0IGRpc3BsYXllZFByb2ogPSAxO1xuXG5mdW5jdGlvbiBwcm9qZWN0Q291bnRlcigpIHtcbiAgaWYgKHR5cGVvZiBwcm9qZWN0Q291bnRlci5jb3VudGVyID09PSAndW5kZWZpbmVkJykge1xuICAgIHByb2plY3RDb3VudGVyLmNvdW50ZXIgPSAwO1xuICB9XG4gIHByb2plY3RDb3VudGVyLmNvdW50ZXIgKz0gMTtcbiAgcmV0dXJuIHByb2plY3RDb3VudGVyLmNvdW50ZXI7XG59XG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9ICh0aXRsZSwgZGVzYykgPT4ge1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSAoKSA9PiBjb25zb2xlLmxvZyh0aXRsZSk7XG4gIGNvbnN0IHByb2plY3RJRCA9IHByb2plY3RDb3VudGVyKCk7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzYyxcbiAgICBwcm9qZWN0SUQsXG4gICAgcHJvamVjdFRpdGxlLFxuICB9O1xufTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSwgZGVzYykge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkodGl0bGUsIGRlc2MpO1xuICBwcm9qZWN0U3RvcmFnZS5wdXNoKG5ld1Byb2plY3QpO1xufVxuXG5mdW5jdGlvbiBmaW5kUHJvamVjdChpZCkge1xuICBjb25zdCBmb3VuZE9iaiA9IHByb2plY3RTdG9yYWdlLmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQucHJvamVjdElEID09PSBpZCk7XG4gIHJldHVybiBmb3VuZE9iajtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvak9iaih0aXRsZSwgZGVzYykge1xuICBjb25zdCBmb3VuZEluZGV4ID0gcHJvamVjdFN0b3JhZ2UuZmluZEluZGV4KFxuICAgIChlbGVtZW50KSA9PiBlbGVtZW50LnByb2plY3RJRCA9PT0gZGlzcGxheWVkUHJvaixcbiAgKTtcbiAgcHJvamVjdFN0b3JhZ2VbZm91bmRJbmRleF0udGl0bGUgPSB0aXRsZTtcbiAgcHJvamVjdFN0b3JhZ2VbZm91bmRJbmRleF0uZGVzYyA9IGRlc2M7XG59XG5cbmZ1bmN0aW9uIGdldERpc3BsYXllZFByb2ooKSB7XG4gIHJldHVybiBkaXNwbGF5ZWRQcm9qO1xufVxuZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gIHJldHVybiBwcm9qZWN0U3RvcmFnZTtcbn1cblxuZXhwb3J0IHtcbiAgY3JlYXRlUHJvamVjdCxcbiAgZmluZFByb2plY3QsXG4gIHVwZGF0ZVByb2pPYmosXG4gIGdldERpc3BsYXllZFByb2osXG4gIGdldFByb2plY3RzLFxufTtcbiIsImltcG9ydCB7IGdldERpc3BsYXllZFByb2ogfSBmcm9tICcuL3Byb2plY3RzJztcblxuY29uc3QgdG9kb1N0b3JhZ2UgPSBbXTtcblxuZnVuY3Rpb24gdG9kb0NvdW50ZXIoKSB7XG4gIGlmICh0eXBlb2YgdG9kb0NvdW50ZXIuY291bnRlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0b2RvQ291bnRlci5jb3VudGVyID0gMDtcbiAgfVxuICB0b2RvQ291bnRlci5jb3VudGVyICs9IDE7XG4gIHJldHVybiB0b2RvQ291bnRlci5jb3VudGVyO1xufVxuXG5jb25zdCB0b2RvRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHRvZG9JRCwgcHJvamVjdElEKSA9PiAoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGR1ZURhdGUsXG4gIHRvZG9JRCxcbiAgcHJvamVjdElELFxufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG8odGl0bGUsIGRlc2MsIGR1ZURhdGUpIHtcbiAgY29uc3QgdG9kb0lEID0gdG9kb0NvdW50ZXIoKTtcbiAgY29uc3QgZGVmYXVsdFRvZG8gPSB0b2RvRmFjdG9yeShcbiAgICB0aXRsZSxcbiAgICBkZXNjLFxuICAgIGR1ZURhdGUsXG4gICAgdG9kb0lELFxuICAgIGdldERpc3BsYXllZFByb2ooKSxcbiAgKTtcblxuICB0b2RvU3RvcmFnZS5wdXNoKGRlZmF1bHRUb2RvKTtcbn1cblxuZnVuY3Rpb24gZmluZFRvZG8oaWQpIHtcbiAgY29uc3QgZm91bmRUb2RvID0gdG9kb1N0b3JhZ2UuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC50b2RvSUQgPT09IGlkKTtcbiAgcmV0dXJuIGZvdW5kVG9kbztcbn1cbmZ1bmN0aW9uIGdldFRvZG9zKCkge1xuICByZXR1cm4gdG9kb1N0b3JhZ2U7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG8sIGZpbmRUb2RvLCBnZXRUb2RvcyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBQc3VlZG9jb2RlXG4vLyBPbiBwYWdlIGxvYWQsIGNyZWF0ZSBhIGRlZmF1bHQgcHJvamVjdCBhbmQgYSBkZWZhdWx0IHRhc2sgd2l0aGluIHRoYXQgcHJvamVjdFxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgZmluZFByb2plY3QsIGdldFByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0cyc7XG5pbXBvcnQge1xuICBhZGRQcm9qQnRuRE9NLFxuICBhZGRQcm9qTWFpbkRPTSxcbiAgYWRkVG9kb0RPTSxcbiAgZWRpdFByb2pMaXN0ZW5lcixcbiAgc3dpdGNoUHJvakxpc3RlbmVyLFxufSBmcm9tICcuL2RvbU1hbmlwJztcbmltcG9ydCB7IGNyZWF0ZVRvZG8sIGZpbmRUb2RvLCBnZXRUb2RvcyB9IGZyb20gJy4vdG9kb3MnO1xuXG4vLyBJbml0aWFsaWF0aW9uIG9mIHRoZSBkZWZhdWx0IHdlYnBhZ2Vcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB3cmFwLWlpZmVcbihmdW5jdGlvbiBpbml0KCkge1xuICAvLyBDcmVhdGluZyBkZWZhdWx0IHByb2plY3RcbiAgY3JlYXRlUHJvamVjdCgnRGVmYXVsdCBQcm9qZWN0JywgJ1lvdSBjYW4gZW50ZXIgYSBwcm9qZWN0IGRlc2NyaXB0aW9uIGhlcmUhJyk7XG4gIGFkZFByb2pCdG5ET00oZmluZFByb2plY3QoMSkpO1xuICBhZGRQcm9qTWFpbkRPTShmaW5kUHJvamVjdCgxKSk7XG4gIGNyZWF0ZVRvZG8oXG4gICAgJ0EgZGVmYXVsdCB0b2RvJyxcbiAgICAnWW91IGNhbiBlbnRlciBhIGxvbmdlciBkZXNjcmlwdGlvbi9kZXRhaWxzIGZvciB5b3VyIHRvZG8gaGVyZS4nLFxuICAgICcwOC8xNS8yMDIyJyxcbiAgKTtcbiAgY29uc3QgZGVmYXVsdFRvZG8gPSBmaW5kVG9kbygxKTtcbiAgYWRkVG9kb0RPTShkZWZhdWx0VG9kbyk7XG4gIGVkaXRQcm9qTGlzdGVuZXIoKTtcblxuICAvLyBjcmVhdGluZyAybmQgcHJvamVjdCBleGFtcGxlXG4gIGNyZWF0ZVByb2plY3QoXG4gICAgJ0Fub3RoZXIgUHJvamVjdCcsXG4gICAgJ0hlcmUgaXMgYW5vdGhlciBwcm9qZWN0IHdpdGggYSBkaWZmZXJlbnQgZGVzY3JpcHRpb24nLFxuICApO1xuICBhZGRQcm9qQnRuRE9NKGZpbmRQcm9qZWN0KDIpKTtcblxuICBzd2l0Y2hQcm9qTGlzdGVuZXIoKTtcblxuICAvLyBEZWJ1Z2dpbmcuIFJldHJpdmUgY3VycmVudCBwcm9qZWN0cyBhbmQgdG9kb3NcbiAgY29uc29sZS5sb2coZ2V0UHJvamVjdHMoKSk7XG4gIGNvbnNvbGUubG9nKGdldFRvZG9zKCkpO1xufSkoKTtcblxuLy8gQWRkICdFZGl0IFByb2plY3QnIGZ1bmN0aW9uIC0gRE9ORVxuLy8gV3JpdGUgZnVuY3Rpb24gZm9yIGNsZWFyaW5nIERPTSAtLSBET05FXG4vLyBBZGQgcHJvamVjdCBzd2l0Y2hpbmdcblxuLy8gQWRkICdFeHBhbmQgVG9kbycgZnVuY3Rpb25cblxuLy8gSG93IHRvIGhhbmRsZSBiZWxvdyB0d28gY3JlYXRpb25zPyBNb2RhbD8gY29udGVudGVkaXRhYmxlP1xuLy8gaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9ob3d0by9ob3d0b19qc19wb3B1cF9mb3JtLmFzcFxuLy8gQWRkICdDcmVhdGUgVG9kbycgZnVuY3Rpb24gYW5kIGFkZCB0byBjdXJyZW50bHkgZGlzcGxheWVkIFByb2plY3Rcbi8vIEFkZCAnQ3JlYXRlIFByb2plY3QnIGZ1bmN0aW9uLCBjbGVhciBET00sIGFuZCB1cGRhdGUgd2l0aCBuZXcgUHJvamVjdFxuLy8gT24gUHJvamVjdCBjbGljaywgY2xlYXIgRE9NLCBhbmQgdXBkYXRlIHdpdGggY2xpY2tlZCBQcm9qZWN0XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=