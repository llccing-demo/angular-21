import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  userStatus = signal<'Offline' | 'Online'>('Offline');

  goOnline() {
    this.userStatus.set('Online');
  }

  goOffline() {
    this.userStatus.set('Offline');
  }

  toggleStatus() {
    this.userStatus.update((status) => (status === 'Online' ? 'Offline' : 'Online'));
  }
}
