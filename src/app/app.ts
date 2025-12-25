import { ChangeDetectionStrategy, Component, signal, computed, effect } from '@angular/core';
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

  theme = signal<'light' | 'dark'>('light');
  username = signal('Guest');
  isLoginIn = signal(false);

  themeClass = computed(() => this.theme() === 'light' ? 'theme-light' : 'theme-dark');

  constructor() {
    effect(() => {
      localStorage.setItem('theme', this.theme());
      console.log('current theme:', this.theme());
    });

    effect(() => {
      console.log("isLoginIn changed:", this.isLoginIn());
      console.log("username is:", this.username());
    });

    effect((onCleanup) => {
      const interval = setInterval(() => {
        console.log('Interval tick - Current theme', this.theme());
      }, 5000)

      onCleanup(() => {
        clearInterval(interval)
        console.log('Cleaned up interval');
      });
    });
  }

  toggleTheme() {
    this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
  }

  login() {
    this.isLoginIn.set(true);
    this.username.set('Rowan');
  }

  logout() {
    this.isLoginIn.set(false);
    this.username.set('Guest');
  }
}
