import { Component, signal } from '@angular/core';
import { Child } from "./child/child";

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  products = [
    { name: 'Laptop', price: 1200, available: true },
    { name: 'Smartphone', price: 800, available: false },
    { name: 'Tablet', price: 600, available: true }
  ];

  proudctName = signal('Default Product');
  proudctPrice = signal(0);
  proudctAvailable = signal(false);

  changeProduct(product: { name: string; price: number; available: boolean }) {
    this.proudctName.set(product.name);
    this.proudctPrice.set(product.price);
    this.proudctAvailable.set(product.available);
  }

  changeAvailable() {
    this.proudctAvailable.set(!this.proudctAvailable());
  }
}
