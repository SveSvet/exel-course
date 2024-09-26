import { DomListener } from './DomListener';

export class ExcelComponent extends DomListener {
  // Возвращает шаблон компонента
  constructor($root: HTMLElement, options: Record<any, any> = {}) {
    console.log('options', options);
    super($root, options.listeners);
  }

  toHTML() {
    return '';
  }

  init() {
    this.initDOMListeners();
  }
}
