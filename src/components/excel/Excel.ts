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
    const root: HTMLElement = $.create('div', 'excel');

    this.components.forEach((Component) => {
      const el: HTMLElement = $.create('div', Component.className);
      const component = new Component(el);
      el.innerHTML = component.toHTML();
      root.append(el);
    });

    return root;
  }

  render() {
    const node: HTMLElement | void = this.getRoot();
    this.element.append(node);
  }
}
