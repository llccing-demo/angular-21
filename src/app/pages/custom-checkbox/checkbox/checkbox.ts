import { Component, model, input, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  imports: [],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Checkbox {
  checked = model.required<boolean>();
  label = input<string>('');

  toggle() {
    this.checked.set(!this.checked());
  }
}
