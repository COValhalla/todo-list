import { addTodoDOM } from './domManip';
import { getDisplayedProj } from './projects';

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
    getDisplayedProj(),
  );

  todoStorage.push(defaultTodo);
}

function findTodo(id) {
  const foundTodo = todoStorage.find((element) => element.todoID === id);
  return foundTodo;
}

function findProjTodos(projID) {
  // Find all todos based on projID
  todoStorage.forEach((element) => {
    if (element.projectID === projID) {
      addTodoDOM(element);
    }
  });
}
function getTodos() {
  return todoStorage;
}

export { createTodo, findTodo, getTodos, findProjTodos };
