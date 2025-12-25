import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  count = signal(0);

  increment() {
    this.count.update((n) => n + 1);
  }

  decrement() {
    this.count.update((n) => n - 1);
  }

} 
