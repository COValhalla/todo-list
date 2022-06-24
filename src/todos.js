let todoStorage = [];

const todoFactory = (title, description, dueDate, priority, project) => {
  return { title, description, dueDate, priority, project };
};

function createDefaultTodo() {
  const defaultTodo = todoFactory(
    'Example Todo',
    'You can enter todo descriptions!',
    '07/15/2022',
    'Low',
    'Default Project',
  );

  todoStorage.push(defaultTodo);
}

createDefaultTodo();
console.log(todoStorage);
