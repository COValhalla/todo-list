projectStorage = [];

const projectFactory = (title, description) => {
  return { title, description };
};

function createDefaultProject() {
  const defaultProject = projectFactory(
    'Your Project Name',
    'You can enter project descriptions!',
  );

  projectStorage.push(defaultProject);
}

createDefaultProject();
console.log(projectStorage);
