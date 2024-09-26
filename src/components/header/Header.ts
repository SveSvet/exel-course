import { ExcelComponent } from '../../core/ExcelComponent';

export class Header extends ExcelComponent {
  static className: string = 'excel__header';

  toHTML(): string {
    return `
    <input type="text" name="" id="" class="input" value="Новая таблица" />
      <div>
        <button class="button">
          <span class="material-icons">clear</span>
        </button>
        <button class="button">
          <span class="material-icons">logout</span>
        </button>
      </div>`;
  }
}
