const projectStorage = [];
const currentProject = 1;

function projectCounter() {
  if (typeof projectCounter.counter === 'undefined') {
    projectCounter.counter = 0;
  }
  projectCounter.counter += 1;
  return projectCounter.counter;
}
const projectFactory = (title, desc) => {
  const projectTitle = () => console.log(title);
  const projectID = projectCounter();
  return {
    title,
    desc,
    projectID,
    projectTitle,
  };
};

function createDefaultProject() {
  const defaultProject = projectFactory(
    'Default Project',
    'You can enter project descsription! Click Edit Project in order to edit the project name and the desc.',
  );
  projectStorage.push(defaultProject);
}

function findProject(id) {
  const foundObj = projectStorage.find((element) => element.projectID === id);
  return foundObj;
}

function updateProject(title, desc) {
  const foundIndex = projectStorage.findIndex(
    (element) => element.projectID === currentProject,
  );
  projectStorage[foundIndex].title = title;
  projectStorage[foundIndex].desc = desc;
  console.log(projectStorage);
}

export { createDefaultProject, findProject, updateProject };
