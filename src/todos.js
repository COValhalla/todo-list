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

export { createTodo, findTodo, getTodos, findProjTodos };
