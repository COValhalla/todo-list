import { findProject } from './projects';
import { findTodo } from './todos';

function addDefaultProjBtn() {
  const sidebarProjects = document.querySelector('.sidebar__projects');
  const defaultProject = document.createElement('div');
  defaultProject.classList.add('sidebar__project', '1');

  const projectBtn = document.createElement('button');
  projectBtn.classList.add('btn');
  projectBtn.textContent = 'Default Project';
  defaultProject.append(projectBtn);

  sidebarProjects.append(defaultProject);
}

function addDefaultProjMain() {
  const mainProjects = document.querySelector('.main__projects');
  const title = document.createElement('div');
  title.classList.add('main__projects__title');
  title.textContent = 'Default Project';
  const edit = document.createElement('div');
  edit.classList.add('main__projects__edit');
  edit.textContent = 'Edit Project';
  const desc = document.createElement('div');
  desc.classList.add('main__projects__description');
  desc.textContent =
    'You can enter project descriptions! Click Edit Project in order to edit the project name and the description.';

  mainProjects.append(title, edit, desc);
}

function addTodoDOM(obj) {
  const todoSection = document.querySelector('.main__todos');
  const todoDIV = document.createElement('div');
  todoDIV.classList.add('main__todos__card', 'small', `${obj.todoID}`);

  const title = document.createElement('div');
  title.classList.add('card__title');
  title.textContent = obj.title;

  const dueDate = document.createElement('div');
  dueDate.classList.add('card__dueDate');
  dueDate.textContent = obj.dueDate;

  const edit = document.createElement('div');
  edit.classList.add('card__edit');
  edit.textContent = 'Expand Todo';

  todoDIV.append(title, dueDate, edit);
  todoSection.append(todoDIV);
}

export { addDefaultProjBtn, addDefaultProjMain, addTodoDOM };
