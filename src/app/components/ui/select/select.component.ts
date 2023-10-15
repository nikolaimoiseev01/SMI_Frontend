import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  // @Input() title: string
  // @Input() options: any
  // @Input() model: string

  @Input() options: string[]; // Массив значений для <select>
  @Input() selectedOption: string; // Выбранное значение
  @Output() selectionChanged = new EventEmitter<string>(); // Событие изменения выбранного значения

  onSelectionChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectionChanged.emit(selectedValue);
  }
}
