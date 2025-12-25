import { Component, signal, resource, computed, ChangeDetectionStrategy } from '@angular/core';
import { getUserApi } from './user-api';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Users {
  userId = signal(1);
  isloading = computed(() => this.userResource.status() === 'loading');
  hasError = computed( () => this.userResource.status() === 'error');

  userResource = resource({
    params: () => ({ id: this.userId() }),
    loader: (params) => getUserApi(params.params.id)
  })

  loadUser(id: number) {
    this.userId.set(id);
  }

  reloadUser() {
    this.userResource.reload();
  }

}
