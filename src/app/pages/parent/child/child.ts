import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child {
  name = input.required<string>()
  price = input.required<number>()
  available = input.required<boolean>()
}
