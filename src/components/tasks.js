import {createElement} from "../utils.js";

const createTasksTemplate = () => {
  return (
    `<div class="board__tasks"></div>`
  );
};

export default class Tasks {
  constructor(task) {
    this._task = task;

    this._element = null;
  }

  getTemplate() {
    return createTasksTemplate(this._task);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
