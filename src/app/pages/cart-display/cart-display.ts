import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartStore } from './cart-store';

@Component({
  selector: 'app-cart-display',
  imports: [],
  templateUrl: './cart-display.html',
  styleUrl: './cart-display.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartDisplay {
  cartStore = inject(CartStore);

  addLaptop() {
    this.cartStore.addItem(1, 'Laptop', 1000);
  }

  addMouse() {
    this.cartStore.addItem(2, 'Mouse', 20);
  }

  addKeyboard() {
    this.cartStore.addItem(3, 'Keyboard', 50);
  }

  decreaseQuantity(id: number) {
    const items = this.cartStore.cartItems();
    const item = items.find(i => i.id === id);
    if (item) {
      this.cartStore.updateQuantity(id, item.quantity - 1);
    }
  }

  increaseQuantity(id: number) {
    const items = this.cartStore.cartItems();
    const item = items.find(i => i.id === id);
    if (item) {
      this.cartStore.updateQuantity(id, item.quantity + 1);
    }
  }
}
