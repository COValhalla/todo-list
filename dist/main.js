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
/* harmony export */   "projModalSubmit": () => (/* binding */ projModalSubmit),
/* harmony export */   "storageAvailable": () => (/* binding */ storageAvailable),
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
      closeForm();
    }
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

function projModalSubmit() {
  const button = document.querySelector('.projSubmit');
  button.addEventListener('click', () => {
    const form = document.getElementById('myForm2');
    const title = form.elements[0].value;
    const desc = form.elements[1].value;

    if (title !== '' && desc !== '') {
      const newProj = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.createProject)(title, desc);
      clearDOM();
      generateDOM(newProj.projectID);
      addProjBtnDOM(newProj);
      closeForm();
    }
  });
}

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
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
/* harmony export */   "addProjLocalStorage": () => (/* binding */ addProjLocalStorage),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "findProject": () => (/* binding */ findProject),
/* harmony export */   "getDisplayedProj": () => (/* binding */ getDisplayedProj),
/* harmony export */   "getProjects": () => (/* binding */ getProjects),
/* harmony export */   "retriveProjLocalStorage": () => (/* binding */ retriveProjLocalStorage),
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

function addProjLocalStorage() {
  localStorage.setItem('projectStorage', JSON.stringify(projectStorage));
}
function retriveProjLocalStorage() {
  const retrievedObj = localStorage.getItem('projectStorage');
  console.log(JSON.parse(retrievedObj));
}

function createProject(title, desc) {
  const newProject = projectFactory(title, desc);
  projectStorage.push(newProject);
  addProjLocalStorage();
  retriveProjLocalStorage();
  return newProject;
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
  if ((0,_domManip__WEBPACK_IMPORTED_MODULE_1__.storageAvailable)('localStorage')) {
    // Yippee! We can use localStorage awesomeness
  } else {
    // Creating default project
    (0,_projects__WEBPACK_IMPORTED_MODULE_0__.createProject)(
      'Default Project',
      'You can enter a project description here!',
    );
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
    (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.projModalSubmit)();
    // Debugging. Retrive current projects and todos
    console.log('Initial Projects: ', (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getProjects)());
    console.log('Initial Todos: ', (0,_todos__WEBPACK_IMPORTED_MODULE_2__.getTodos)());
  }

  // addProjLocalStorage();
  // retriveProjLocalStorage();
})();

// Add 'Edit Project' function - DONE
// Write function for clearing DOM -- DONE
// Add project switching -- DONE
// Add new todos -- DONE
// Add 'Create Project' function, clear DOM, and update with new Project -- DONE

// Add 'Expand Todo' function
// Add local storage

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgdXBkYXRlUHJvak9iaixcbiAgZ2V0RGlzcGxheWVkUHJvaixcbiAgZmluZFByb2plY3QsXG4gIHVwZGF0ZURpc3BsYXllZFByb2osXG4gIGNyZWF0ZVByb2plY3QsXG59IGZyb20gJy4vcHJvamVjdHMnO1xuaW1wb3J0IHsgZmluZFByb2pUb2RvcywgY3JlYXRlVG9kbyB9IGZyb20gJy4vdG9kb3MnO1xuXG5mdW5jdGlvbiBhZGRQcm9qQnRuRE9NKG9iaikge1xuICBjb25zdCBzaWRlYmFyUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fcHJvamVjdHMnKTtcbiAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVmYXVsdFByb2plY3QuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcl9fcHJvamVjdCcpO1xuICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0blNpZGViYXInKTtcbiAgcHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7b2JqLnByb2plY3RJRH1gKTtcbiAgcHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IGAke29iai50aXRsZX1gO1xuICBkZWZhdWx0UHJvamVjdC5hcHBlbmQocHJvamVjdEJ0bik7XG4gIHNpZGViYXJQcm9qZWN0cy5hcHBlbmQoZGVmYXVsdFByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qTWFpbkRPTShvYmopIHtcbiAgY29uc3QgbWFpblByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Byb2plY3RzJyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ21haW5fX3Byb2plY3RzX190aXRsZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoJ21haW5fX3Byb2plY3RzX19lZGl0Jyk7XG4gIGVkaXQudGV4dENvbnRlbnQgPSAnRWRpdCBQcm9qZWN0JztcbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXNjLmNsYXNzTGlzdC5hZGQoJ21haW5fX3Byb2plY3RzX19kZXNjcmlwdGlvbicpO1xuICBkZXNjLnRleHRDb250ZW50ID0gb2JqLmRlc2M7XG4gIG1haW5Qcm9qZWN0cy5hcHBlbmQodGl0bGUsIGVkaXQsIGRlc2MpO1xufVxuXG5mdW5jdGlvbiBhZGRUb2RvRE9NKG9iaikge1xuICBjb25zdCB0b2RvU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX190b2RvcycpO1xuICBjb25zdCB0b2RvRElWID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9ESVYuY2xhc3NMaXN0LmFkZCgnbWFpbl9fdG9kb3NfX2NhcmQnLCAnc21hbGwnLCBgJHtvYmoucHJvamVjdElEfWApO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX3RpdGxlJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19kdWVEYXRlJyk7XG4gIGR1ZURhdGUudGV4dENvbnRlbnQgPSBvYmouZHVlRGF0ZTtcblxuICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVkaXQuY2xhc3NMaXN0LmFkZCgnY2FyZF9fZWRpdCcpO1xuICBlZGl0LnRleHRDb250ZW50ID0gJ0V4cGFuZCBUb2RvJztcblxuICB0b2RvRElWLmFwcGVuZCh0aXRsZSwgZHVlRGF0ZSwgZWRpdCk7XG4gIHRvZG9TZWN0aW9uLmFwcGVuZCh0b2RvRElWKTtcbn1cblxuZnVuY3Rpb24gYWRkQWxsVG9kb3NET00oYXJyYXkpIHtcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4gYWRkVG9kb0RPTShlbGVtZW50KSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRE9NKCkge1xuICAvLyBQcm9qZWN0IHNlY3Rpb25cbiAgY29uc3QgcHJvalRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Byb2plY3RzX190aXRsZScpO1xuICBjb25zdCBwcm9qRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19wcm9qZWN0c19fZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgcHJvakVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHNfX2VkaXQnKTtcbiAgaWYgKHByb2pUaXRsZSAhPT0gbnVsbCkge1xuICAgIHByb2pUaXRsZS5yZW1vdmUoKTtcbiAgICBwcm9qRGVzYy5yZW1vdmUoKTtcbiAgICBwcm9qRWRpdC5yZW1vdmUoKTtcbiAgICAvLyBUb2RvIHNlY3Rpb25cbiAgICBjb25zdCBhbGxUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX190b2RvcycpO1xuICAgIHdoaWxlIChhbGxUb2Rvcy5maXJzdENoaWxkKSB7XG4gICAgICBhbGxUb2Rvcy5yZW1vdmVDaGlsZChhbGxUb2Rvcy5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVET00ocHJvaklEKSB7XG4gIGNvbnN0IHByb2ogPSBmaW5kUHJvamVjdChwcm9qSUQpO1xuICBhZGRQcm9qTWFpbkRPTShwcm9qKTtcblxuICBjb25zdCBwcm9qVG9kb3MgPSBmaW5kUHJvalRvZG9zKHByb2pJRCk7XG4gIGFkZEFsbFRvZG9zRE9NKHByb2pUb2Rvcyk7XG4gIHVwZGF0ZURpc3BsYXllZFByb2oocHJvaklEKTtcbn1cblxuZnVuY3Rpb24gZWRpdFByb2pMaXN0ZW5lcigpIHtcbiAgY29uc3QgZWRpdFByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHNfX2VkaXQnKTtcbiAgY29uc3QgcHJvalNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtnZXREaXNwbGF5ZWRQcm9qKCl9YCk7XG4gIGVkaXRQcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Byb2plY3RzX190aXRsZScpO1xuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHNfX2Rlc2NyaXB0aW9uJyk7XG4gICAgaWYgKGVkaXRQcm9qLnRleHRDb250ZW50ID09PSAnRWRpdCBQcm9qZWN0Jykge1xuICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcbiAgICAgIGRlc2Muc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcbiAgICAgIGVkaXRQcm9qLnRleHRDb250ZW50ID0gJ1NhdmUgUHJvamVjdCc7XG4gICAgfSBlbHNlIGlmIChlZGl0UHJvai50ZXh0Q29udGVudCA9PT0gJ1NhdmUgUHJvamVjdCcpIHtcbiAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgZmFsc2UpO1xuICAgICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIGZhbHNlKTtcbiAgICAgIGVkaXRQcm9qLnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCc7XG4gICAgICBwcm9qU2lkZWJhci50ZXh0Q29udGVudCA9IHRpdGxlLnRleHRDb250ZW50O1xuICAgICAgdXBkYXRlUHJvak9iaih0aXRsZS50ZXh0Q29udGVudCwgZGVzYy50ZXh0Q29udGVudCk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHN3aXRjaFByb2pMaXN0ZW5lcigpIHtcbiAgY29uc3QgcHJvanMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuU2lkZWJhcicpO1xuICBBcnJheS5mcm9tKHByb2pzKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcHJvaklEID0gTWF0aC5mbG9vcihlbGVtZW50LmlkKTtcbiAgICBpZiAocHJvaklEICE9PSBnZXREaXNwbGF5ZWRQcm9qKCkpIHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyRE9NKCk7XG4gICAgICAgIGdlbmVyYXRlRE9NKHByb2pJRCk7XG4gICAgICAgIC8vIE5lZWQgdG8gYWRkIGxpc3RlbmVycyBhZ2FpbiBhZnRlciBjbGVhcmluZyBET00gYW5kIHVwZGF0aW5nIGRpc3BsYXlpbmcgcHJvamVjdFxuICAgICAgICBzd2l0Y2hQcm9qTGlzdGVuZXIoKTtcbiAgICAgICAgZWRpdFByb2pMaXN0ZW5lcigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gb3BlbkZvcm0oKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Rm9ybVByb2onKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBjbG9zZUZvcm0oKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtUHJvaicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9MaXN0ZW5lcigpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0blRvZG8nKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtJykuc3R5bGUuZGlzcGxheSAhPT0gJ2Jsb2NrJykge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Rm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b2RvTW9kYWxDYW5jZWwoKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2VGb3JtKCkpO1xufVxuXG5mdW5jdGlvbiB0b2RvTW9kYWxTdWJtaXQoKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtMScpO1xuICAgIGNvbnN0IHRpdGxlID0gZm9ybS5lbGVtZW50c1swXS52YWx1ZTtcbiAgICBjb25zdCBkZXNjID0gZm9ybS5lbGVtZW50c1sxXS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZm9ybS5lbGVtZW50c1syXS52YWx1ZTtcblxuICAgIGlmICh0aXRsZSAhPT0gJycgJiYgZGVzYyAhPT0gJycgJiYgZHVlRGF0ZSAhPT0gJycpIHtcbiAgICAgIGNvbnN0IG5ld1RvZG8gPSBjcmVhdGVUb2RvKHRpdGxlLCBkZXNjLCBkdWVEYXRlKTtcbiAgICAgIGFkZFRvZG9ET00obmV3VG9kbyk7XG4gICAgICBjbG9zZUZvcm0oKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qTGlzdGVuZXIoKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5Qcm9qZWN0Jyk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Rm9ybVByb2onKS5zdHlsZS5kaXNwbGF5ICE9PSAnYmxvY2snKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtUHJvaicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtUHJvaicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJvak1vZGFsQ2FuY2VsKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvakNhbmNlbCcpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZUZvcm0oKSk7XG59XG5cbmZ1bmN0aW9uIHByb2pNb2RhbFN1Ym1pdCgpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2pTdWJtaXQnKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtMicpO1xuICAgIGNvbnN0IHRpdGxlID0gZm9ybS5lbGVtZW50c1swXS52YWx1ZTtcbiAgICBjb25zdCBkZXNjID0gZm9ybS5lbGVtZW50c1sxXS52YWx1ZTtcblxuICAgIGlmICh0aXRsZSAhPT0gJycgJiYgZGVzYyAhPT0gJycpIHtcbiAgICAgIGNvbnN0IG5ld1Byb2ogPSBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjKTtcbiAgICAgIGNsZWFyRE9NKCk7XG4gICAgICBnZW5lcmF0ZURPTShuZXdQcm9qLnByb2plY3RJRCk7XG4gICAgICBhZGRQcm9qQnRuRE9NKG5ld1Byb2opO1xuICAgICAgY2xvc2VGb3JtKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gIGxldCBzdG9yYWdlO1xuICB0cnkge1xuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgY29uc3QgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpICYmXG4gICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgc3RvcmFnZSAmJlxuICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICApO1xuICB9XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBvYmplY3QtY3VybHktbmV3bGluZVxuZXhwb3J0IHtcbiAgYWRkUHJvakJ0bkRPTSxcbiAgYWRkUHJvak1haW5ET00sXG4gIGFkZFRvZG9ET00sXG4gIGNsZWFyRE9NLFxuICBlZGl0UHJvakxpc3RlbmVyLFxuICBzd2l0Y2hQcm9qTGlzdGVuZXIsXG4gIGNyZWF0ZVRvZG9MaXN0ZW5lcixcbiAgdG9kb01vZGFsQ2FuY2VsLFxuICB0b2RvTW9kYWxTdWJtaXQsXG4gIGNsb3NlRm9ybSxcbiAgb3BlbkZvcm0sXG4gIGNyZWF0ZVByb2pMaXN0ZW5lcixcbiAgcHJvak1vZGFsQ2FuY2VsLFxuICBwcm9qTW9kYWxTdWJtaXQsXG4gIHN0b3JhZ2VBdmFpbGFibGUsXG59O1xuIiwiY29uc3QgcHJvamVjdFN0b3JhZ2UgPSBbXTtcbmxldCBkaXNwbGF5ZWRQcm9qID0gMTtcblxuZnVuY3Rpb24gcHJvamVjdENvdW50ZXIoKSB7XG4gIGlmICh0eXBlb2YgcHJvamVjdENvdW50ZXIuY291bnRlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBwcm9qZWN0Q291bnRlci5jb3VudGVyID0gMDtcbiAgfVxuICBwcm9qZWN0Q291bnRlci5jb3VudGVyICs9IDE7XG4gIHJldHVybiBwcm9qZWN0Q291bnRlci5jb3VudGVyO1xufVxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAodGl0bGUsIGRlc2MpID0+IHtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gKCkgPT4gY29uc29sZS5sb2codGl0bGUpO1xuICBjb25zdCBwcm9qZWN0SUQgPSBwcm9qZWN0Q291bnRlcigpO1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2MsXG4gICAgcHJvamVjdElELFxuICAgIHByb2plY3RUaXRsZSxcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGFkZFByb2pMb2NhbFN0b3JhZ2UoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0U3RvcmFnZScsIEpTT04uc3RyaW5naWZ5KHByb2plY3RTdG9yYWdlKSk7XG59XG5mdW5jdGlvbiByZXRyaXZlUHJvakxvY2FsU3RvcmFnZSgpIHtcbiAgY29uc3QgcmV0cmlldmVkT2JqID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RTdG9yYWdlJyk7XG4gIGNvbnNvbGUubG9nKEpTT04ucGFyc2UocmV0cmlldmVkT2JqKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2MpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHRpdGxlLCBkZXNjKTtcbiAgcHJvamVjdFN0b3JhZ2UucHVzaChuZXdQcm9qZWN0KTtcbiAgYWRkUHJvakxvY2FsU3RvcmFnZSgpO1xuICByZXRyaXZlUHJvakxvY2FsU3RvcmFnZSgpO1xuICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuZnVuY3Rpb24gZmluZFByb2plY3QoaWQpIHtcbiAgY29uc3QgZm91bmRPYmogPSBwcm9qZWN0U3RvcmFnZS5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LnByb2plY3RJRCA9PT0gaWQpO1xuICByZXR1cm4gZm91bmRPYmo7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2pPYmoodGl0bGUsIGRlc2MpIHtcbiAgY29uc3QgZm91bmRJbmRleCA9IHByb2plY3RTdG9yYWdlLmZpbmRJbmRleChcbiAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5wcm9qZWN0SUQgPT09IGRpc3BsYXllZFByb2osXG4gICk7XG4gIHByb2plY3RTdG9yYWdlW2ZvdW5kSW5kZXhdLnRpdGxlID0gdGl0bGU7XG4gIHByb2plY3RTdG9yYWdlW2ZvdW5kSW5kZXhdLmRlc2MgPSBkZXNjO1xuICBjb25zb2xlLmxvZygnVXBkYXRlZCBQcm9qZWN0czogJywgcHJvamVjdFN0b3JhZ2UpO1xufVxuXG5mdW5jdGlvbiBnZXREaXNwbGF5ZWRQcm9qKCkge1xuICByZXR1cm4gZGlzcGxheWVkUHJvajtcbn1cbmZ1bmN0aW9uIHVwZGF0ZURpc3BsYXllZFByb2oocHJvaklEKSB7XG4gIGRpc3BsYXllZFByb2ogPSBwcm9qSUQ7XG59XG5mdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgcmV0dXJuIHByb2plY3RTdG9yYWdlO1xufVxuXG5leHBvcnQge1xuICBjcmVhdGVQcm9qZWN0LFxuICBmaW5kUHJvamVjdCxcbiAgdXBkYXRlUHJvak9iaixcbiAgZ2V0RGlzcGxheWVkUHJvaixcbiAgZ2V0UHJvamVjdHMsXG4gIHVwZGF0ZURpc3BsYXllZFByb2osXG4gIGFkZFByb2pMb2NhbFN0b3JhZ2UsXG4gIHJldHJpdmVQcm9qTG9jYWxTdG9yYWdlLFxufTtcbiIsImltcG9ydCB7IGFkZFRvZG9ET00gfSBmcm9tICcuL2RvbU1hbmlwJztcbmltcG9ydCB7IGdldERpc3BsYXllZFByb2ogfSBmcm9tICcuL3Byb2plY3RzJztcblxuY29uc3QgdG9kb1N0b3JhZ2UgPSBbXTtcblxuZnVuY3Rpb24gdG9kb0NvdW50ZXIoKSB7XG4gIGlmICh0eXBlb2YgdG9kb0NvdW50ZXIuY291bnRlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0b2RvQ291bnRlci5jb3VudGVyID0gMDtcbiAgfVxuICB0b2RvQ291bnRlci5jb3VudGVyICs9IDE7XG4gIHJldHVybiB0b2RvQ291bnRlci5jb3VudGVyO1xufVxuXG5jb25zdCB0b2RvRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHRvZG9JRCwgcHJvamVjdElEKSA9PiAoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGR1ZURhdGUsXG4gIHRvZG9JRCxcbiAgcHJvamVjdElELFxufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG8odGl0bGUsIGRlc2MsIGR1ZURhdGUpIHtcbiAgY29uc3QgdG9kb0lEID0gdG9kb0NvdW50ZXIoKTtcbiAgY29uc3QgbmV3VG9kbyA9IHRvZG9GYWN0b3J5KHRpdGxlLCBkZXNjLCBkdWVEYXRlLCB0b2RvSUQsIGdldERpc3BsYXllZFByb2ooKSk7XG5cbiAgdG9kb1N0b3JhZ2UucHVzaChuZXdUb2RvKTtcbiAgcmV0dXJuIG5ld1RvZG87XG59XG5cbmZ1bmN0aW9uIGZpbmRUb2RvKGlkKSB7XG4gIGNvbnN0IGZvdW5kVG9kbyA9IHRvZG9TdG9yYWdlLmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQudG9kb0lEID09PSBpZCk7XG4gIHJldHVybiBmb3VuZFRvZG87XG59XG5cbmZ1bmN0aW9uIGZpbmRQcm9qVG9kb3MocHJvaklEKSB7XG4gIC8vIEZpbmQgYWxsIHRvZG9zIGJhc2VkIG9uIHByb2pJRFxuICBjb25zdCBmb3VuZFRvZG9zID0gdG9kb1N0b3JhZ2UuZmlsdGVyKChvYmopID0+IG9iai5wcm9qZWN0SUQgPT09IHByb2pJRCk7XG4gIHJldHVybiBmb3VuZFRvZG9zO1xufVxuXG5mdW5jdGlvbiBnZXRUb2RvcygpIHtcbiAgcmV0dXJuIHRvZG9TdG9yYWdlO1xufVxuXG5leHBvcnQgeyBjcmVhdGVUb2RvLCBmaW5kVG9kbywgZ2V0VG9kb3MsIGZpbmRQcm9qVG9kb3MgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gUHN1ZWRvY29kZVxuLy8gT24gcGFnZSBsb2FkLCBjcmVhdGUgYSBkZWZhdWx0IHByb2plY3QgYW5kIGEgZGVmYXVsdCB0YXNrIHdpdGhpbiB0aGF0IHByb2plY3RcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QsIGZpbmRQcm9qZWN0LCBnZXRQcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdHMnO1xuaW1wb3J0IHtcbiAgYWRkUHJvakJ0bkRPTSxcbiAgYWRkUHJvak1haW5ET00sXG4gIGFkZFRvZG9ET00sXG4gIGNyZWF0ZVByb2pMaXN0ZW5lcixcbiAgY3JlYXRlVG9kb0xpc3RlbmVyLFxuICBlZGl0UHJvakxpc3RlbmVyLFxuICBwcm9qTW9kYWxDYW5jZWwsXG4gIHByb2pNb2RhbFN1Ym1pdCxcbiAgc3dpdGNoUHJvakxpc3RlbmVyLFxuICB0b2RvTW9kYWxDYW5jZWwsXG4gIHRvZG9Nb2RhbFN1Ym1pdCxcbiAgc3RvcmFnZUF2YWlsYWJsZSxcbn0gZnJvbSAnLi9kb21NYW5pcCc7XG5pbXBvcnQgeyBjcmVhdGVUb2RvLCBmaW5kVG9kbywgZ2V0VG9kb3MgfSBmcm9tICcuL3RvZG9zJztcblxuLy8gSW5pdGlhbGlhdGlvbiBvZiB0aGUgZGVmYXVsdCB3ZWJwYWdlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgd3JhcC1paWZlXG4oZnVuY3Rpb24gaW5pdCgpIHtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgLy8gWWlwcGVlISBXZSBjYW4gdXNlIGxvY2FsU3RvcmFnZSBhd2Vzb21lbmVzc1xuICB9IGVsc2Uge1xuICAgIC8vIENyZWF0aW5nIGRlZmF1bHQgcHJvamVjdFxuICAgIGNyZWF0ZVByb2plY3QoXG4gICAgICAnRGVmYXVsdCBQcm9qZWN0JyxcbiAgICAgICdZb3UgY2FuIGVudGVyIGEgcHJvamVjdCBkZXNjcmlwdGlvbiBoZXJlIScsXG4gICAgKTtcbiAgICBhZGRQcm9qQnRuRE9NKGZpbmRQcm9qZWN0KDEpKTtcbiAgICBhZGRQcm9qTWFpbkRPTShmaW5kUHJvamVjdCgxKSk7XG4gICAgY3JlYXRlVG9kbyhcbiAgICAgICdBIGRlZmF1bHQgdG9kbycsXG4gICAgICAnWW91IGNhbiBlbnRlciBhIGxvbmdlciBkZXNjcmlwdGlvbi9kZXRhaWxzIGZvciB5b3VyIHRvZG8gaGVyZS4nLFxuICAgICAgJzA4LzE1LzIwMjInLFxuICAgICk7XG4gICAgY29uc3QgZGVmYXVsdFRvZG8gPSBmaW5kVG9kbygxKTtcbiAgICBhZGRUb2RvRE9NKGRlZmF1bHRUb2RvKTtcblxuICAgIC8vIGNyZWF0aW5nIDJuZCBwcm9qZWN0IGV4YW1wbGVcbiAgICBjcmVhdGVQcm9qZWN0KFxuICAgICAgJ0Fub3RoZXIgUHJvamVjdCcsXG4gICAgICAnSGVyZSBpcyBhbm90aGVyIHByb2plY3Qgd2l0aCBhIGRpZmZlcmVudCBkZXNjcmlwdGlvbicsXG4gICAgKTtcbiAgICBhZGRQcm9qQnRuRE9NKGZpbmRQcm9qZWN0KDIpKTtcblxuICAgIC8vIEV2ZW50IGxpc3RlbmVycywgZXZlbnR1YWxseSBhZGQgaW50byB0aGVpciBvd24gZnVuY3Rpb25cbiAgICBlZGl0UHJvakxpc3RlbmVyKCk7XG4gICAgc3dpdGNoUHJvakxpc3RlbmVyKCk7XG4gICAgLy8gQ3JlYXRlIG5ldyB0b2RvXG4gICAgY3JlYXRlVG9kb0xpc3RlbmVyKCk7XG4gICAgdG9kb01vZGFsQ2FuY2VsKCk7XG4gICAgdG9kb01vZGFsU3VibWl0KCk7XG4gICAgLy8gY3JlYXRlIG5ldyBwcm9qZWN0XG4gICAgY3JlYXRlUHJvakxpc3RlbmVyKCk7XG4gICAgcHJvak1vZGFsQ2FuY2VsKCk7XG4gICAgcHJvak1vZGFsU3VibWl0KCk7XG4gICAgLy8gRGVidWdnaW5nLiBSZXRyaXZlIGN1cnJlbnQgcHJvamVjdHMgYW5kIHRvZG9zXG4gICAgY29uc29sZS5sb2coJ0luaXRpYWwgUHJvamVjdHM6ICcsIGdldFByb2plY3RzKCkpO1xuICAgIGNvbnNvbGUubG9nKCdJbml0aWFsIFRvZG9zOiAnLCBnZXRUb2RvcygpKTtcbiAgfVxuXG4gIC8vIGFkZFByb2pMb2NhbFN0b3JhZ2UoKTtcbiAgLy8gcmV0cml2ZVByb2pMb2NhbFN0b3JhZ2UoKTtcbn0pKCk7XG5cbi8vIEFkZCAnRWRpdCBQcm9qZWN0JyBmdW5jdGlvbiAtIERPTkVcbi8vIFdyaXRlIGZ1bmN0aW9uIGZvciBjbGVhcmluZyBET00gLS0gRE9ORVxuLy8gQWRkIHByb2plY3Qgc3dpdGNoaW5nIC0tIERPTkVcbi8vIEFkZCBuZXcgdG9kb3MgLS0gRE9ORVxuLy8gQWRkICdDcmVhdGUgUHJvamVjdCcgZnVuY3Rpb24sIGNsZWFyIERPTSwgYW5kIHVwZGF0ZSB3aXRoIG5ldyBQcm9qZWN0IC0tIERPTkVcblxuLy8gQWRkICdFeHBhbmQgVG9kbycgZnVuY3Rpb25cbi8vIEFkZCBsb2NhbCBzdG9yYWdlXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=