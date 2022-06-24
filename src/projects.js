let projectStorage = [];

const projectFactory = (title, description) => {
  const projectTitle = () => console.log(title);
  projectID = projectCounter();
  return { title, description, projectID, projectTitle };
};

function projectCounter() {
  if (typeof projectCounter.counter == 'undefined') {
    projectCounter.counter = 0;
  }
  projectCounter.counter++;
  return projectCounter.counter;
}

function createDefaultProject() {
  const defaultProject = projectFactory(
    'Your Project Name',
    'You can enter project descriptions!',
  );

  projectStorage.push(defaultProject);
}

createDefaultProject();
console.log(defaultProject);
