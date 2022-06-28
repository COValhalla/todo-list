const projectStorage = [];

function projectCounter() {
  if (typeof projectCounter.counter === 'undefined') {
    projectCounter.counter = 0;
  }
  projectCounter.counter += 1;
  return projectCounter.counter;
}
const projectFactory = (title, description) => {
  const projectTitle = () => console.log(title);
  const projectID = projectCounter();
  return {
    title,
    description,
    projectID,
    projectTitle,
  };
};

export default function createDefaultProject() {
  const defaultProject = projectFactory(
    'Default Project',
    'You can enter project descriptions! Click Edit Project in order to edit the project name and the description.',
  );
  projectStorage.push(defaultProject);
}

function findProject(id) {
  const foundObj = projectStorage.find((element) => element.projectID === id);
  return foundObj;
}
