import {createSiteMenuTemplate} from "./view/createSiteMenuTemplate.js";
import {createFilterTemplate} from "./view/createFilterTemplate.js";
import {createBoardTemplate} from "./view/createBoardTemplate.js";
import {createTaskEditTemplate} from "./view/createTaskEditTemplate.js";
import {createTaskTemplate} from "./view/createTaskTemplate.js";
import {createLoadMoreButtonTemplate} from "./view/createLoadMoreButtonTemplate.js";
import {generateTask} from "./mock/task.js";

const TASKS_COUNT = 3;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tasks = new Array(TASKS_COUNT).fill().map(generateTask);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = siteMainElement.querySelector(`.board__tasks`);

render(taskListElement, createTaskEditTemplate(), `beforeend`);

for (let i = 0; i < TASKS_COUNT; i++) {
  render(taskListElement, createTaskTemplate(tasks[i]), `beforeend`);
}

render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);
