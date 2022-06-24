// Creates objects and stores them in an array.
const todoStorage = [];
function todoCounter() {
  if (typeof todoCounter.counter === 'undefined') {
    todoCounter.counter = 0;
  }
  todoCounter.counter++;
  return todoCounter.counter;
}
const TodoFactory = (title, description, dueDate, priority, project) => {
  todoID = todoCounter();
  return {
    todoID,
    title,
    description,
    dueDate,
    priority,
    project,
  };
};

function newTodo(title, description, dueDate, priority, project) {
  const newTodo = TodoFactory(title, description, dueDate, priority, project);

  todoStorage.push(newTodo);
}

newTodo('a title', 'a description', '08/15/22', 'low', 'project title');
newTodo('a title2', 'a description2', '08/15/22', 'low', 'project title2');
newTodo('a title3', 'a description3', '08/15/22', 'low', 'project title3');
todoStorage;

todoStorage[0].title;
