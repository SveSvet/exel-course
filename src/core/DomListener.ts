import { capitalize } from './utils';

export class DomListener {
  // root - корневой элемент, на который будем вешать слушатели
  public $root: any;
  private name: string;
  private listeners: Array<string>;

  constructor($root: any, listeners: Array<string> = []) {
    if (!$root) {
      throw new Error('No root provided for DomListener');
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach((listener: string) => {
      const method: string = getMethodName(listener);

      if (!this[method]) {
        const name = this.name || '';
        throw new Error(`Method ${listener} is not implemented in ${name} Component`);
      }
      this.$root.on(listener, this[method].bind(this));
    });
  }
  removeDOMListeners() {

  }
}

function getMethodName(eventName: string): string {
  return 'on' + capitalize(eventName);
}
