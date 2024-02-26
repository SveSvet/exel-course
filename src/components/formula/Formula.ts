import { ExcelComponent } from '../../core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className: string = 'excel__formula';

  constructor($root: HTMLElement) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
    });
  }

  toHTML(): string {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>`;
  }

  onInput(event: EventListener) {
    console.log('Formula onInput', event);
  }
}
