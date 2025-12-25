import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Hightlight } from './directives/hightlight';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref, Hightlight],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('angular-21');
}
