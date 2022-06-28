// Prototype code, stores new todo objects in an array. Adds them to the DOM.
const todoStorage = [];

function todoCounter() {
  if (typeof todoCounter.counter === 'undefined') {
    todoCounter.counter = 0;
  }
  todoCounter.counter += 1;
  return todoCounter.counter;
}
const TodoFactory = (title, description, dueDate, priority, project) => {
  const todoID = todoCounter();
  return {
    todoID,
    title,
    description,
    dueDate,
    priority,
    project,
  };
};

function addTodoDOM(obj) {
  const todoSection = document.querySelector('.main__todos');
  const todoDIV = document.createElement('div');
  todoDIV.classList.add('todo');
  todoDIV.setAttribute('id', `todo${obj.todoID}`);
  todoDIV.textContent = obj.title;

  todoSection.append(todoDIV);
}

export default function newTodo(
  title,
  description,
  dueDate,
  priority,
  project,
) {
  const aNewTodo = TodoFactory(title, description, dueDate, priority, project);
  todoStorage.push(aNewTodo);
  addTodoDOM(aNewTodo);
}
