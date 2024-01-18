// utils for interaction with DOM


class Dom {
  constructor() {
  }
}

export function $() {
  return new Dom();
}

$.create = (tagName: string, classes = '') => {
  const el: HTMLElement = document.createElement(tagName);

  if (classes) {
    el.classList.add(classes);
  }
  return el;
};
