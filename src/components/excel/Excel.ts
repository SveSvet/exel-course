/**
 * Represent an Excel class
 * @param {string} selector - The HTML element selector
 * @param {array} options - The object of items
 */

import { HeaderType, ToolbarType, FormulaType, TableType } from '../../types';
import { $ } from '../../core/dom';

export class Excel {
  element: HTMLElement | null;
  components: Array<HeaderType | ToolbarType | FormulaType | TableType>;

  constructor(selector: string, options: Record<string, Array<HeaderType | ToolbarType | FormulaType | TableType>>) {
    this.element = document.querySelector(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const root = $.create('div', 'excel');

    this.components = this.components.map((Component) => {
      const el = $.create('div', Component.className);
      const component = new Component(el);
      el.html(component.toHTML());
      root.append(el);
      return component;
    });

    return root;
  }

  render() {
    const node = this.getRoot().$el;
    this.element.append(node);
    console.log(this.components);

    this.components.forEach((component) => component.init());
  }
}
