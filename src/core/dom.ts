// utils for interaction with DOM

export type TSelector = HTMLElement | string;

class Dom {
  $el: HTMLElement;

  constructor(selector: TSelector) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector;
  }

  html(html: TSelector) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
    }
    return this.$el.outerHTML.trim();
  }

  clear() {
    this.html('');
    return this;
  }

  append(node: HTMLElement | Dom) {
    if (node instanceof Dom) {
      node = node.$el;
    }

    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }

    return this;
  }
}

export function $(selector: TSelector) {
  return new Dom(selector);
}

$.create = (tagName: string, classes = '') => {
  const el: HTMLElement = document.createElement(tagName);

  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};
