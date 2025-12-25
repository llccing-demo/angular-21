import { Component, computed, signal, linkedSignal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {
  userStatus = signal<'Offline' | 'Online'>('Offline');

  notificationsEnabled = linkedSignal(() => this.userStatus() === 'Online');

  statusMessage = computed(() => {
    return this.userStatus() === 'Online' ? 'You are online' : 'You are offline';
  });

  goOnline() {
    this.userStatus.set('Online');
  }

  goOffline() {
    this.userStatus.set('Offline');
  }

  toggleStatus() {
    this.userStatus.update((status) => (status === 'Online' ? 'Offline' : 'Online'));
  }

  toggleNotifications() {
    this.notificationsEnabled.set(!this.notificationsEnabled());
  }
}
