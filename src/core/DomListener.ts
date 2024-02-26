export class DomListener {
  // root - корневой элемент, на который будем вешать слушатели
  private $root: HTMLElement;
  private listeners: Array<DomListener>;

  constructor($root: HTMLElement, listeners: Array<DomListener> = []) {
    if (!$root) {
      throw new Error('No root provided for DomListener');
    }
    this.$root = $root;
    this.listeners = listeners;
  }
  initDOMListeners() {
    console.log(this.listeners);
  }
  removeDOMListeners() {

  }
}
