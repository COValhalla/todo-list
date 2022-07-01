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
/* harmony export */   "addAllListeners": () => (/* binding */ addAllListeners),
/* harmony export */   "addProjBtnDOM": () => (/* binding */ addProjBtnDOM),
/* harmony export */   "addProjMainDOM": () => (/* binding */ addProjMainDOM),
/* harmony export */   "addTodoDOM": () => (/* binding */ addTodoDOM),
/* harmony export */   "clearDOM": () => (/* binding */ clearDOM),
/* harmony export */   "closeForm": () => (/* binding */ closeForm),
/* harmony export */   "createDefaultPage": () => (/* binding */ createDefaultPage),
/* harmony export */   "createLocalStoragePage": () => (/* binding */ createLocalStoragePage),
/* harmony export */   "createProjListener": () => (/* binding */ createProjListener),
/* harmony export */   "createTodoListener": () => (/* binding */ createTodoListener),
/* harmony export */   "editProjListener": () => (/* binding */ editProjListener),
/* harmony export */   "generateDOM": () => (/* binding */ generateDOM),
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

function addAllListeners() {
  editProjListener();
  switchProjListener();
  // Create new todo
  createTodoListener();
  todoModalCancel();
  todoModalSubmit();
  // create new project
  createProjListener();
  projModalCancel();
  projModalSubmit();
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

function createDefaultPage() {
  (0,_projects__WEBPACK_IMPORTED_MODULE_0__.createProject)('Default Project', 'You can enter a project description here!');

  addProjBtnDOM((0,_projects__WEBPACK_IMPORTED_MODULE_0__.findProject)(1));
  addProjMainDOM((0,_projects__WEBPACK_IMPORTED_MODULE_0__.findProject)(1));
  (0,_todos__WEBPACK_IMPORTED_MODULE_1__.createTodo)(
    'A default todo',
    'You can enter a longer description/details for your todo here.',
    '08/15/2022',
  );

  const defaultTodo = (0,_todos__WEBPACK_IMPORTED_MODULE_1__.findTodo)(1);
  addTodoDOM(defaultTodo);

  // creating 2nd project example
  (0,_projects__WEBPACK_IMPORTED_MODULE_0__.createProject)(
    'Another Project',
    'Here is another project with a different description',
  );
  addProjBtnDOM((0,_projects__WEBPACK_IMPORTED_MODULE_0__.findProject)(2));

  addAllListeners();
}

function createLocalStoragePage() {
  if (
    // Load saved projects and todos
    localStorage.getItem('projectStorage') !== null &&
    storageAvailable('localStorage')
  ) {
    const projects = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.retrieveProjLocalStorag)();
    (0,_projects__WEBPACK_IMPORTED_MODULE_0__.updateProjects)(projects);

    const todos = (0,_todos__WEBPACK_IMPORTED_MODULE_1__.retriveTodoLocalStorage)();
    (0,_todos__WEBPACK_IMPORTED_MODULE_1__.updateTodos)(todos);

    projects.forEach((element) => {
      addProjBtnDOM(element);
    });

    // Set project counter
    let tempProj = 0;
    projects.forEach((element) => {
      if (tempProj <= element.projectID) {
        tempProj = element.projectID;
      }
    });
    (0,_projects__WEBPACK_IMPORTED_MODULE_0__.projectCounter)().setProjectCounter(tempProj);

    // Set todo counter
    let tempTodo = 0;
    todos.forEach((element) => {
      if (tempTodo <= element.todoID) {
        tempTodo = element.todoID;
      }
    });
    (0,_todos__WEBPACK_IMPORTED_MODULE_1__.todoCounter)().setTodoCounter(tempTodo);

    generateDOM(projects[0].projectID);
    addAllListeners();
  } else {
    createDefaultPage();
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
/* harmony export */   "projectCounter": () => (/* binding */ projectCounter),
/* harmony export */   "retrieveProjLocalStorag": () => (/* binding */ retrieveProjLocalStorag),
/* harmony export */   "updateDisplayedProj": () => (/* binding */ updateDisplayedProj),
/* harmony export */   "updateProjObj": () => (/* binding */ updateProjObj),
/* harmony export */   "updateProjects": () => (/* binding */ updateProjects)
/* harmony export */ });
let projectStorage = [];
let projectCount = 0;
let displayedProj = 1;

// If project.counter undefined  && no local storage, start counting
// else, find highest stored ID, then count

function projectCounter() {
  projectCount += 1;
  localStorage.setItem('projectCounter', JSON.stringify(projectCount));

  function setProjectCounter(num) {
    projectCount = num;
  }
  return { projectCount, setProjectCounter };
}

const projectFactory = (title, desc) => {
  const projectID = projectCounter().projectCount;
  return {
    title,
    desc,
    projectID,
  };
};

function addProjLocalStorage() {
  localStorage.setItem('projectStorage', JSON.stringify(projectStorage));
}
function retrieveProjLocalStorag() {
  const retrievedObj = JSON.parse(localStorage.getItem('projectStorage'));
  return retrievedObj;
}

function createProject(title, desc) {
  const newProject = projectFactory(title, desc);
  projectStorage.push(newProject);
  addProjLocalStorage();
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
function updateProjects(projs) {
  projectStorage = projs;
  // Set project counter
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
/* harmony export */   "getTodos": () => (/* binding */ getTodos),
/* harmony export */   "retriveTodoLocalStorage": () => (/* binding */ retriveTodoLocalStorage),
/* harmony export */   "todoCounter": () => (/* binding */ todoCounter),
/* harmony export */   "updateTodos": () => (/* binding */ updateTodos)
/* harmony export */ });
/* harmony import */ var _domManip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManip */ "./src/domManip.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");



let todoStorage = [];
let todoCount = 0;

function todoCounter() {
  todoCount += 1;
  localStorage.setItem('projectCounter', JSON.stringify(todoCount));

  function setTodoCounter(num) {
    todoCount = num;
  }
  return { todoCount, setTodoCounter };
}

const todoFactory = (title, description, dueDate, todoID, projectID) => ({
  title,
  description,
  dueDate,
  todoID,
  projectID,
});

function addTodoLocalStorage() {
  localStorage.setItem('todoStorage', JSON.stringify(todoStorage));
}
function retriveTodoLocalStorage() {
  const retrievedObj = JSON.parse(localStorage.getItem('todoStorage'));
  return retrievedObj;
}

function createTodo(title, desc, dueDate) {
  const todoID = todoCounter().todoCount;
  const newTodo = todoFactory(title, desc, dueDate, todoID, (0,_projects__WEBPACK_IMPORTED_MODULE_1__.getDisplayedProj)());
  todoStorage.push(newTodo);
  addTodoLocalStorage();
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
function updateTodos(todos) {
  todoStorage = todos;
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
/* harmony import */ var _domManip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManip */ "./src/domManip.js");

// eslint-disable-next-line wrap-iife
(function init() {
  (0,_domManip__WEBPACK_IMPORTED_MODULE_0__.createLocalStoragePage)();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztBQ05vRDtBQUNwRDtBQUNBO0FBQ0EsRUFBRSxpRUFBc0I7QUFDeEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21NYW5pcC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICB1cGRhdGVQcm9qT2JqLFxuICBnZXREaXNwbGF5ZWRQcm9qLFxuICBmaW5kUHJvamVjdCxcbiAgdXBkYXRlRGlzcGxheWVkUHJvaixcbiAgY3JlYXRlUHJvamVjdCxcbiAgcmV0cmlldmVQcm9qTG9jYWxTdG9yYWcsXG4gIHVwZGF0ZVByb2plY3RzLFxuICBwcm9qZWN0Q291bnRlcixcbn0gZnJvbSAnLi9wcm9qZWN0cyc7XG5pbXBvcnQge1xuICBmaW5kUHJvalRvZG9zLFxuICBjcmVhdGVUb2RvLFxuICBmaW5kVG9kbyxcbiAgcmV0cml2ZVRvZG9Mb2NhbFN0b3JhZ2UsXG4gIHVwZGF0ZVRvZG9zLFxuICB0b2RvQ291bnRlcixcbn0gZnJvbSAnLi90b2Rvcyc7XG5cbmZ1bmN0aW9uIGFkZFByb2pCdG5ET00ob2JqKSB7XG4gIGNvbnN0IHNpZGViYXJQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX19wcm9qZWN0cycpO1xuICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZWZhdWx0UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyX19wcm9qZWN0Jyk7XG4gIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuU2lkZWJhcicpO1xuICBwcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtvYmoucHJvamVjdElEfWApO1xuICBwcm9qZWN0QnRuLnRleHRDb250ZW50ID0gYCR7b2JqLnRpdGxlfWA7XG4gIGRlZmF1bHRQcm9qZWN0LmFwcGVuZChwcm9qZWN0QnRuKTtcbiAgc2lkZWJhclByb2plY3RzLmFwcGVuZChkZWZhdWx0UHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2pNYWluRE9NKG9iaikge1xuICBjb25zdCBtYWluUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHMnKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnbWFpbl9fcHJvamVjdHNfX3RpdGxlJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVkaXQuY2xhc3NMaXN0LmFkZCgnbWFpbl9fcHJvamVjdHNfX2VkaXQnKTtcbiAgZWRpdC50ZXh0Q29udGVudCA9ICdFZGl0IFByb2plY3QnO1xuICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2MuY2xhc3NMaXN0LmFkZCgnbWFpbl9fcHJvamVjdHNfX2Rlc2NyaXB0aW9uJyk7XG4gIGRlc2MudGV4dENvbnRlbnQgPSBvYmouZGVzYztcbiAgbWFpblByb2plY3RzLmFwcGVuZCh0aXRsZSwgZWRpdCwgZGVzYyk7XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9ET00ob2JqKSB7XG4gIGNvbnN0IHRvZG9TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3RvZG9zJyk7XG4gIGNvbnN0IHRvZG9ESVYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb0RJVi5jbGFzc0xpc3QuYWRkKCdtYWluX190b2Rvc19fY2FyZCcsICdzbWFsbCcsIGAke29iai5wcm9qZWN0SUR9YCk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnY2FyZF9fdGl0bGUnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG5cbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2R1ZURhdGUnKTtcbiAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IG9iai5kdWVEYXRlO1xuXG4gIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWRpdC5jbGFzc0xpc3QuYWRkKCdjYXJkX19lZGl0Jyk7XG4gIGVkaXQudGV4dENvbnRlbnQgPSAnRXhwYW5kIFRvZG8nO1xuXG4gIHRvZG9ESVYuYXBwZW5kKHRpdGxlLCBkdWVEYXRlLCBlZGl0KTtcbiAgdG9kb1NlY3Rpb24uYXBwZW5kKHRvZG9ESVYpO1xufVxuXG5mdW5jdGlvbiBhZGRBbGxUb2Rvc0RPTShhcnJheSkge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiBhZGRUb2RvRE9NKGVsZW1lbnQpKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJET00oKSB7XG4gIC8vIFByb2plY3Qgc2VjdGlvblxuICBjb25zdCBwcm9qVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHNfX3RpdGxlJyk7XG4gIGNvbnN0IHByb2pEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Byb2plY3RzX19kZXNjcmlwdGlvbicpO1xuICBjb25zdCBwcm9qRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19wcm9qZWN0c19fZWRpdCcpO1xuICBpZiAocHJvalRpdGxlICE9PSBudWxsKSB7XG4gICAgcHJvalRpdGxlLnJlbW92ZSgpO1xuICAgIHByb2pEZXNjLnJlbW92ZSgpO1xuICAgIHByb2pFZGl0LnJlbW92ZSgpO1xuICAgIC8vIFRvZG8gc2VjdGlvblxuICAgIGNvbnN0IGFsbFRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3RvZG9zJyk7XG4gICAgd2hpbGUgKGFsbFRvZG9zLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGFsbFRvZG9zLnJlbW92ZUNoaWxkKGFsbFRvZG9zLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZURPTShwcm9qSUQpIHtcbiAgY29uc3QgcHJvaiA9IGZpbmRQcm9qZWN0KHByb2pJRCk7XG4gIGFkZFByb2pNYWluRE9NKHByb2opO1xuICBjb25zdCBwcm9qVG9kb3MgPSBmaW5kUHJvalRvZG9zKHByb2pJRCk7XG4gIGFkZEFsbFRvZG9zRE9NKHByb2pUb2Rvcyk7XG4gIHVwZGF0ZURpc3BsYXllZFByb2oocHJvaklEKTtcbn1cblxuZnVuY3Rpb24gZWRpdFByb2pMaXN0ZW5lcigpIHtcbiAgY29uc3QgZWRpdFByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHNfX2VkaXQnKTtcbiAgY29uc3QgcHJvalNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtnZXREaXNwbGF5ZWRQcm9qKCl9YCk7XG4gIGVkaXRQcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Byb2plY3RzX190aXRsZScpO1xuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcHJvamVjdHNfX2Rlc2NyaXB0aW9uJyk7XG4gICAgaWYgKGVkaXRQcm9qLnRleHRDb250ZW50ID09PSAnRWRpdCBQcm9qZWN0Jykge1xuICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcbiAgICAgIGRlc2Muc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcbiAgICAgIGVkaXRQcm9qLnRleHRDb250ZW50ID0gJ1NhdmUgUHJvamVjdCc7XG4gICAgfSBlbHNlIGlmIChlZGl0UHJvai50ZXh0Q29udGVudCA9PT0gJ1NhdmUgUHJvamVjdCcpIHtcbiAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgZmFsc2UpO1xuICAgICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIGZhbHNlKTtcbiAgICAgIGVkaXRQcm9qLnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCc7XG4gICAgICBwcm9qU2lkZWJhci50ZXh0Q29udGVudCA9IHRpdGxlLnRleHRDb250ZW50O1xuICAgICAgdXBkYXRlUHJvak9iaih0aXRsZS50ZXh0Q29udGVudCwgZGVzYy50ZXh0Q29udGVudCk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHN3aXRjaFByb2pMaXN0ZW5lcigpIHtcbiAgY29uc3QgcHJvanMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuU2lkZWJhcicpO1xuICBBcnJheS5mcm9tKHByb2pzKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcHJvaklEID0gTWF0aC5mbG9vcihlbGVtZW50LmlkKTtcbiAgICBpZiAocHJvaklEICE9PSBnZXREaXNwbGF5ZWRQcm9qKCkpIHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyRE9NKCk7XG4gICAgICAgIGdlbmVyYXRlRE9NKHByb2pJRCk7XG4gICAgICAgIC8vIE5lZWQgdG8gYWRkIGxpc3RlbmVycyBhZ2FpbiBhZnRlciBjbGVhcmluZyBET00gYW5kIHVwZGF0aW5nIGRpc3BsYXlpbmcgcHJvamVjdFxuICAgICAgICBzd2l0Y2hQcm9qTGlzdGVuZXIoKTtcbiAgICAgICAgZWRpdFByb2pMaXN0ZW5lcigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gb3BlbkZvcm0oKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Rm9ybVByb2onKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBjbG9zZUZvcm0oKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtUHJvaicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9MaXN0ZW5lcigpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0blRvZG8nKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtJykuc3R5bGUuZGlzcGxheSAhPT0gJ2Jsb2NrJykge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Rm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b2RvTW9kYWxDYW5jZWwoKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2VGb3JtKCkpO1xufVxuXG5mdW5jdGlvbiB0b2RvTW9kYWxTdWJtaXQoKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtMScpO1xuICAgIGNvbnN0IHRpdGxlID0gZm9ybS5lbGVtZW50c1swXS52YWx1ZTtcbiAgICBjb25zdCBkZXNjID0gZm9ybS5lbGVtZW50c1sxXS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZm9ybS5lbGVtZW50c1syXS52YWx1ZTtcblxuICAgIGlmICh0aXRsZSAhPT0gJycgJiYgZGVzYyAhPT0gJycgJiYgZHVlRGF0ZSAhPT0gJycpIHtcbiAgICAgIGNvbnN0IG5ld1RvZG8gPSBjcmVhdGVUb2RvKHRpdGxlLCBkZXNjLCBkdWVEYXRlKTtcbiAgICAgIGFkZFRvZG9ET00obmV3VG9kbyk7XG4gICAgICBjbG9zZUZvcm0oKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qTGlzdGVuZXIoKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5Qcm9qZWN0Jyk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Rm9ybVByb2onKS5zdHlsZS5kaXNwbGF5ICE9PSAnYmxvY2snKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtUHJvaicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtUHJvaicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJvak1vZGFsQ2FuY2VsKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvakNhbmNlbCcpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZUZvcm0oKSk7XG59XG5cbmZ1bmN0aW9uIHByb2pNb2RhbFN1Ym1pdCgpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2pTdWJtaXQnKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtMicpO1xuICAgIGNvbnN0IHRpdGxlID0gZm9ybS5lbGVtZW50c1swXS52YWx1ZTtcbiAgICBjb25zdCBkZXNjID0gZm9ybS5lbGVtZW50c1sxXS52YWx1ZTtcblxuICAgIGlmICh0aXRsZSAhPT0gJycgJiYgZGVzYyAhPT0gJycpIHtcbiAgICAgIGNvbnN0IG5ld1Byb2ogPSBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjKTtcbiAgICAgIGNsZWFyRE9NKCk7XG4gICAgICBnZW5lcmF0ZURPTShuZXdQcm9qLnByb2plY3RJRCk7XG4gICAgICBhZGRQcm9qQnRuRE9NKG5ld1Byb2opO1xuICAgICAgY2xvc2VGb3JtKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkQWxsTGlzdGVuZXJzKCkge1xuICBlZGl0UHJvakxpc3RlbmVyKCk7XG4gIHN3aXRjaFByb2pMaXN0ZW5lcigpO1xuICAvLyBDcmVhdGUgbmV3IHRvZG9cbiAgY3JlYXRlVG9kb0xpc3RlbmVyKCk7XG4gIHRvZG9Nb2RhbENhbmNlbCgpO1xuICB0b2RvTW9kYWxTdWJtaXQoKTtcbiAgLy8gY3JlYXRlIG5ldyBwcm9qZWN0XG4gIGNyZWF0ZVByb2pMaXN0ZW5lcigpO1xuICBwcm9qTW9kYWxDYW5jZWwoKTtcbiAgcHJvak1vZGFsU3VibWl0KCk7XG59XG5cbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICBsZXQgc3RvcmFnZTtcbiAgdHJ5IHtcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiAoXG4gICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAoZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxuICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgIHN0b3JhZ2UgJiZcbiAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0UGFnZSgpIHtcbiAgY3JlYXRlUHJvamVjdCgnRGVmYXVsdCBQcm9qZWN0JywgJ1lvdSBjYW4gZW50ZXIgYSBwcm9qZWN0IGRlc2NyaXB0aW9uIGhlcmUhJyk7XG5cbiAgYWRkUHJvakJ0bkRPTShmaW5kUHJvamVjdCgxKSk7XG4gIGFkZFByb2pNYWluRE9NKGZpbmRQcm9qZWN0KDEpKTtcbiAgY3JlYXRlVG9kbyhcbiAgICAnQSBkZWZhdWx0IHRvZG8nLFxuICAgICdZb3UgY2FuIGVudGVyIGEgbG9uZ2VyIGRlc2NyaXB0aW9uL2RldGFpbHMgZm9yIHlvdXIgdG9kbyBoZXJlLicsXG4gICAgJzA4LzE1LzIwMjInLFxuICApO1xuXG4gIGNvbnN0IGRlZmF1bHRUb2RvID0gZmluZFRvZG8oMSk7XG4gIGFkZFRvZG9ET00oZGVmYXVsdFRvZG8pO1xuXG4gIC8vIGNyZWF0aW5nIDJuZCBwcm9qZWN0IGV4YW1wbGVcbiAgY3JlYXRlUHJvamVjdChcbiAgICAnQW5vdGhlciBQcm9qZWN0JyxcbiAgICAnSGVyZSBpcyBhbm90aGVyIHByb2plY3Qgd2l0aCBhIGRpZmZlcmVudCBkZXNjcmlwdGlvbicsXG4gICk7XG4gIGFkZFByb2pCdG5ET00oZmluZFByb2plY3QoMikpO1xuXG4gIGFkZEFsbExpc3RlbmVycygpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2NhbFN0b3JhZ2VQYWdlKCkge1xuICBpZiAoXG4gICAgLy8gTG9hZCBzYXZlZCBwcm9qZWN0cyBhbmQgdG9kb3NcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdFN0b3JhZ2UnKSAhPT0gbnVsbCAmJlxuICAgIHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpXG4gICkge1xuICAgIGNvbnN0IHByb2plY3RzID0gcmV0cmlldmVQcm9qTG9jYWxTdG9yYWcoKTtcbiAgICB1cGRhdGVQcm9qZWN0cyhwcm9qZWN0cyk7XG5cbiAgICBjb25zdCB0b2RvcyA9IHJldHJpdmVUb2RvTG9jYWxTdG9yYWdlKCk7XG4gICAgdXBkYXRlVG9kb3ModG9kb3MpO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgYWRkUHJvakJ0bkRPTShlbGVtZW50KTtcbiAgICB9KTtcblxuICAgIC8vIFNldCBwcm9qZWN0IGNvdW50ZXJcbiAgICBsZXQgdGVtcFByb2ogPSAwO1xuICAgIHByb2plY3RzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmICh0ZW1wUHJvaiA8PSBlbGVtZW50LnByb2plY3RJRCkge1xuICAgICAgICB0ZW1wUHJvaiA9IGVsZW1lbnQucHJvamVjdElEO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHByb2plY3RDb3VudGVyKCkuc2V0UHJvamVjdENvdW50ZXIodGVtcFByb2opO1xuXG4gICAgLy8gU2V0IHRvZG8gY291bnRlclxuICAgIGxldCB0ZW1wVG9kbyA9IDA7XG4gICAgdG9kb3MuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKHRlbXBUb2RvIDw9IGVsZW1lbnQudG9kb0lEKSB7XG4gICAgICAgIHRlbXBUb2RvID0gZWxlbWVudC50b2RvSUQ7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdG9kb0NvdW50ZXIoKS5zZXRUb2RvQ291bnRlcih0ZW1wVG9kbyk7XG5cbiAgICBnZW5lcmF0ZURPTShwcm9qZWN0c1swXS5wcm9qZWN0SUQpO1xuICAgIGFkZEFsbExpc3RlbmVycygpO1xuICB9IGVsc2Uge1xuICAgIGNyZWF0ZURlZmF1bHRQYWdlKCk7XG4gIH1cbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG9iamVjdC1jdXJseS1uZXdsaW5lXG5leHBvcnQge1xuICBjcmVhdGVEZWZhdWx0UGFnZSxcbiAgY3JlYXRlTG9jYWxTdG9yYWdlUGFnZSxcbiAgYWRkUHJvakJ0bkRPTSxcbiAgYWRkUHJvak1haW5ET00sXG4gIGFkZFRvZG9ET00sXG4gIGNsZWFyRE9NLFxuICBlZGl0UHJvakxpc3RlbmVyLFxuICBzd2l0Y2hQcm9qTGlzdGVuZXIsXG4gIGNyZWF0ZVRvZG9MaXN0ZW5lcixcbiAgdG9kb01vZGFsQ2FuY2VsLFxuICB0b2RvTW9kYWxTdWJtaXQsXG4gIGNsb3NlRm9ybSxcbiAgb3BlbkZvcm0sXG4gIGNyZWF0ZVByb2pMaXN0ZW5lcixcbiAgcHJvak1vZGFsQ2FuY2VsLFxuICBwcm9qTW9kYWxTdWJtaXQsXG4gIHN0b3JhZ2VBdmFpbGFibGUsXG4gIGdlbmVyYXRlRE9NLFxuICBhZGRBbGxMaXN0ZW5lcnMsXG59O1xuIiwibGV0IHByb2plY3RTdG9yYWdlID0gW107XG5sZXQgcHJvamVjdENvdW50ID0gMDtcbmxldCBkaXNwbGF5ZWRQcm9qID0gMTtcblxuLy8gSWYgcHJvamVjdC5jb3VudGVyIHVuZGVmaW5lZCAgJiYgbm8gbG9jYWwgc3RvcmFnZSwgc3RhcnQgY291bnRpbmdcbi8vIGVsc2UsIGZpbmQgaGlnaGVzdCBzdG9yZWQgSUQsIHRoZW4gY291bnRcblxuZnVuY3Rpb24gcHJvamVjdENvdW50ZXIoKSB7XG4gIHByb2plY3RDb3VudCArPSAxO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdENvdW50ZXInLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0Q291bnQpKTtcblxuICBmdW5jdGlvbiBzZXRQcm9qZWN0Q291bnRlcihudW0pIHtcbiAgICBwcm9qZWN0Q291bnQgPSBudW07XG4gIH1cbiAgcmV0dXJuIHsgcHJvamVjdENvdW50LCBzZXRQcm9qZWN0Q291bnRlciB9O1xufVxuXG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9ICh0aXRsZSwgZGVzYykgPT4ge1xuICBjb25zdCBwcm9qZWN0SUQgPSBwcm9qZWN0Q291bnRlcigpLnByb2plY3RDb3VudDtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjLFxuICAgIHByb2plY3RJRCxcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGFkZFByb2pMb2NhbFN0b3JhZ2UoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0U3RvcmFnZScsIEpTT04uc3RyaW5naWZ5KHByb2plY3RTdG9yYWdlKSk7XG59XG5mdW5jdGlvbiByZXRyaWV2ZVByb2pMb2NhbFN0b3JhZygpIHtcbiAgY29uc3QgcmV0cmlldmVkT2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdFN0b3JhZ2UnKSk7XG4gIHJldHVybiByZXRyaWV2ZWRPYmo7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2MpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHRpdGxlLCBkZXNjKTtcbiAgcHJvamVjdFN0b3JhZ2UucHVzaChuZXdQcm9qZWN0KTtcbiAgYWRkUHJvakxvY2FsU3RvcmFnZSgpO1xuICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuZnVuY3Rpb24gZmluZFByb2plY3QoaWQpIHtcbiAgY29uc3QgZm91bmRPYmogPSBwcm9qZWN0U3RvcmFnZS5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LnByb2plY3RJRCA9PT0gaWQpO1xuICByZXR1cm4gZm91bmRPYmo7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2pPYmoodGl0bGUsIGRlc2MpIHtcbiAgY29uc3QgZm91bmRJbmRleCA9IHByb2plY3RTdG9yYWdlLmZpbmRJbmRleChcbiAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5wcm9qZWN0SUQgPT09IGRpc3BsYXllZFByb2osXG4gICk7XG4gIHByb2plY3RTdG9yYWdlW2ZvdW5kSW5kZXhdLnRpdGxlID0gdGl0bGU7XG4gIHByb2plY3RTdG9yYWdlW2ZvdW5kSW5kZXhdLmRlc2MgPSBkZXNjO1xufVxuXG5mdW5jdGlvbiBnZXREaXNwbGF5ZWRQcm9qKCkge1xuICByZXR1cm4gZGlzcGxheWVkUHJvajtcbn1cbmZ1bmN0aW9uIHVwZGF0ZURpc3BsYXllZFByb2oocHJvaklEKSB7XG4gIGRpc3BsYXllZFByb2ogPSBwcm9qSUQ7XG59XG5mdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgcmV0dXJuIHByb2plY3RTdG9yYWdlO1xufVxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdHMocHJvanMpIHtcbiAgcHJvamVjdFN0b3JhZ2UgPSBwcm9qcztcbiAgLy8gU2V0IHByb2plY3QgY291bnRlclxufVxuXG5leHBvcnQge1xuICBjcmVhdGVQcm9qZWN0LFxuICBmaW5kUHJvamVjdCxcbiAgdXBkYXRlUHJvak9iaixcbiAgZ2V0RGlzcGxheWVkUHJvaixcbiAgZ2V0UHJvamVjdHMsXG4gIHVwZGF0ZURpc3BsYXllZFByb2osXG4gIGFkZFByb2pMb2NhbFN0b3JhZ2UsXG4gIHJldHJpZXZlUHJvakxvY2FsU3RvcmFnLFxuICB1cGRhdGVQcm9qZWN0cyxcbiAgcHJvamVjdENvdW50ZXIsXG59O1xuIiwiaW1wb3J0IHsgYWRkVG9kb0RPTSB9IGZyb20gJy4vZG9tTWFuaXAnO1xuaW1wb3J0IHsgZ2V0RGlzcGxheWVkUHJvaiB9IGZyb20gJy4vcHJvamVjdHMnO1xuXG5sZXQgdG9kb1N0b3JhZ2UgPSBbXTtcbmxldCB0b2RvQ291bnQgPSAwO1xuXG5mdW5jdGlvbiB0b2RvQ291bnRlcigpIHtcbiAgdG9kb0NvdW50ICs9IDE7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0Q291bnRlcicsIEpTT04uc3RyaW5naWZ5KHRvZG9Db3VudCkpO1xuXG4gIGZ1bmN0aW9uIHNldFRvZG9Db3VudGVyKG51bSkge1xuICAgIHRvZG9Db3VudCA9IG51bTtcbiAgfVxuICByZXR1cm4geyB0b2RvQ291bnQsIHNldFRvZG9Db3VudGVyIH07XG59XG5cbmNvbnN0IHRvZG9GYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgdG9kb0lELCBwcm9qZWN0SUQpID0+ICh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgdG9kb0lELFxuICBwcm9qZWN0SUQsXG59KTtcblxuZnVuY3Rpb24gYWRkVG9kb0xvY2FsU3RvcmFnZSgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9TdG9yYWdlJywgSlNPTi5zdHJpbmdpZnkodG9kb1N0b3JhZ2UpKTtcbn1cbmZ1bmN0aW9uIHJldHJpdmVUb2RvTG9jYWxTdG9yYWdlKCkge1xuICBjb25zdCByZXRyaWV2ZWRPYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvU3RvcmFnZScpKTtcbiAgcmV0dXJuIHJldHJpZXZlZE9iajtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGVzYywgZHVlRGF0ZSkge1xuICBjb25zdCB0b2RvSUQgPSB0b2RvQ291bnRlcigpLnRvZG9Db3VudDtcbiAgY29uc3QgbmV3VG9kbyA9IHRvZG9GYWN0b3J5KHRpdGxlLCBkZXNjLCBkdWVEYXRlLCB0b2RvSUQsIGdldERpc3BsYXllZFByb2ooKSk7XG4gIHRvZG9TdG9yYWdlLnB1c2gobmV3VG9kbyk7XG4gIGFkZFRvZG9Mb2NhbFN0b3JhZ2UoKTtcbiAgcmV0dXJuIG5ld1RvZG87XG59XG5cbmZ1bmN0aW9uIGZpbmRUb2RvKGlkKSB7XG4gIGNvbnN0IGZvdW5kVG9kbyA9IHRvZG9TdG9yYWdlLmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQudG9kb0lEID09PSBpZCk7XG4gIHJldHVybiBmb3VuZFRvZG87XG59XG5cbmZ1bmN0aW9uIGZpbmRQcm9qVG9kb3MocHJvaklEKSB7XG4gIC8vIEZpbmQgYWxsIHRvZG9zIGJhc2VkIG9uIHByb2pJRFxuICBjb25zdCBmb3VuZFRvZG9zID0gdG9kb1N0b3JhZ2UuZmlsdGVyKChvYmopID0+IG9iai5wcm9qZWN0SUQgPT09IHByb2pJRCk7XG4gIHJldHVybiBmb3VuZFRvZG9zO1xufVxuXG5mdW5jdGlvbiBnZXRUb2RvcygpIHtcbiAgcmV0dXJuIHRvZG9TdG9yYWdlO1xufVxuZnVuY3Rpb24gdXBkYXRlVG9kb3ModG9kb3MpIHtcbiAgdG9kb1N0b3JhZ2UgPSB0b2Rvcztcbn1cblxuZXhwb3J0IHtcbiAgY3JlYXRlVG9kbyxcbiAgZmluZFRvZG8sXG4gIGdldFRvZG9zLFxuICBmaW5kUHJvalRvZG9zLFxuICByZXRyaXZlVG9kb0xvY2FsU3RvcmFnZSxcbiAgdXBkYXRlVG9kb3MsXG4gIHRvZG9Db3VudGVyLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlTG9jYWxTdG9yYWdlUGFnZSB9IGZyb20gJy4vZG9tTWFuaXAnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHdyYXAtaWlmZVxuKGZ1bmN0aW9uIGluaXQoKSB7XG4gIGNyZWF0ZUxvY2FsU3RvcmFnZVBhZ2UoKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=