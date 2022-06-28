const todoStorage = [];

const todoFactory = (title, description, dueDate, todoID) => ({
  title,
  description,
  dueDate,
  todoID,
});

function createDefaultTodo() {
  const defaultTodo = todoFactory(
    'Example Todo',
    'You can enter todo descriptions!',
    '07/15/2022',
    1,
  );

  todoStorage.push(defaultTodo);
}

function findTodo(id) {
  const foundTodo = todoStorage.find((element) => element.todoID === id);
  return foundTodo;
}

export { createDefaultTodo, findTodo };
