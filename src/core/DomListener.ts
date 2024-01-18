export class DomListener {
  // root - корневой элемент, на который будем вешать слушатели
  private root: HTMLElement;

  constructor(root: HTMLElement) {
    if (!root) {
      throw new Error('No root provided for DomListener');
    }
    this.root = root;
  }
}
