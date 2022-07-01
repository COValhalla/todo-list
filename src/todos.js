import { addTodoDOM } from './domManip';
import { getDisplayedProj } from './projects';

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
  const newTodo = todoFactory(title, desc, dueDate, todoID, getDisplayedProj());
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

export {
  createTodo,
  findTodo,
  getTodos,
  findProjTodos,
  retriveTodoLocalStorage,
  updateTodos,
  todoCounter,
};
