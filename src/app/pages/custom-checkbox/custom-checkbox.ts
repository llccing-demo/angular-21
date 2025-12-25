import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { Checkbox } from './checkbox/checkbox';

@Component({
  selector: 'app-custom-checkbox',
  imports: [Checkbox],
  templateUrl: './custom-checkbox.html',
  styleUrl: './custom-checkbox.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCheckbox {
  agreedToTerms = model(false);
  enableNotifications = model(true);

  toggleTermsFromParent() {
    this.agreedToTerms.set(!this.agreedToTerms());
  }

  resetAll() {
    this.agreedToTerms.set(false);
    this.enableNotifications.set(false);
  }
}
