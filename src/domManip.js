export default function addDefaultProject() {
  const sidebarProjects = document.querySelector('.sidebar__projects');
  const defaultProject = document.createElement('div');
  defaultProject.classList.add('defaultProject');
  defaultProject.textContent = 'Default Project';
  sidebarProjects.append(defaultProject);
}
