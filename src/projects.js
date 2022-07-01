let projectStorage = [];
let projectCount = 0;
let displayedProj = 1;

// If project.counter undefined  && no local storage, start counting
// else, find highest stored ID, then count

function projectCounter(num) {
  console.log('No storage, project counter working');
  projectCount += 1;
  localStorage.setItem(
    'projectCounter',
    JSON.stringify(projectCounter.counter),
  );

  function setProjectCounter(num) {
    projectCount = num;
  }
  return { projectCount, setProjectCounter };
}

const projectFactory = (title, desc) => {
  const projectID = projectCounter().projectCount;
  return {
    title,
    desc,
    projectID,
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
  console.log(projectStorage);
  // Set project counter
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
  projectCounter,
};
