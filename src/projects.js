let projectStorage = [];
let displayedProj = 1;

// If project.counter undefined  && no local storage, start counting
// else, find highest stored ID, then count

function projectCounter() {
  if (
    typeof projectCounter.counter === 'undefined' &&
    localStorage.getItem('projectCounter') === null
  ) {
    console.log('No storage, project counter working');
    projectCounter.counter = 0;
    projectCounter.counter += 1;
    localStorage.setItem(
      'projectCounter',
      JSON.stringify(projectCounter.counter),
    );
    return projectCounter.counter;
  }
  console.log('Local storage counter detected');
  const test = JSON.parse(localStorage.getItem('projectStorage'));
  console.log(test);

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

function addProjLocalStorage() {
  localStorage.setItem('projectStorage', JSON.stringify(projectStorage));
}
function retrieveProjLocalStorag() {
  const retrievedObj = JSON.parse(localStorage.getItem('projectStorage'));
  return retrievedObj;
}

function createProject(title, desc) {
  const newProject = projectFactory(title, desc);
  projectStorage.push(newProject);
  addProjLocalStorage();
  return newProject;
}

function findProject(id) {
  console.log(projectStorage[0]);
  const foundObj = projectStorage.find((element) => element.projectID === id);
  return foundObj;
}

function updateProjObj(title, desc) {
  const foundIndex = projectStorage.findIndex(
    (element) => element.projectID === displayedProj,
  );
  projectStorage[foundIndex].title = title;
  projectStorage[foundIndex].desc = desc;
  console.log('Updated Projects: ', projectStorage);
}

function getDisplayedProj() {
  return displayedProj;
}
function updateDisplayedProj(projID) {
  displayedProj = projID;
}
function getProjects() {
  return projectStorage;
}
function updateProjects(projs) {
  projectStorage = projs;
}

export {
  createProject,
  findProject,
  updateProjObj,
  getDisplayedProj,
  getProjects,
  updateDisplayedProj,
  addProjLocalStorage,
  retrieveProjLocalStorag,
  updateProjects,
};
