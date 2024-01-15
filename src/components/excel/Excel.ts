/**
 * Represent an Excel class
 * @param {string} selector - The HTML element selector
 * @param {array} options - The object of items
 */

export class Excel {
  element: HTMLElement | null;
  components: Array<string>;
  constructor(selector: string, options: Record<string, Array<string>>) {
    this.element = document.querySelector(selector);
    this.components = options.components || [];
  }
}
