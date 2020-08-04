const TASKS_COUNT = 3;
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

import {createSiteMenuTemplate} from "./view/createSiteMenuTemplate.js";
import {createFilterTemplate} from "./view/createFilterTemplate.js";
import {createBoardTemplate} from "./view/createBoardTemplate.js";
import {createTaskAddTemplate} from "./view/createTaskAddTemplate.js";
import {createTaskTemplate} from "./view/createTaskTemplate.js";
import {createLoadButtonTemplate} from "./view/createLoadButtonTemplate.js";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const boardElement = siteMainElement.querySelector(`.board`);
const tasksListElement = siteMainElement.querySelector(`.board__tasks`);

render(tasksListElement, createTaskAddTemplate(), `beforeend`);

for (let i = 0; i < TASKS_COUNT; i++) {
  render(tasksListElement, createTaskTemplate(), `beforeend`);
}

render(boardElement, createLoadButtonTemplate(), `beforeend`);
