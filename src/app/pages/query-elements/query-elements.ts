import { Component, signal, viewChild, computed, ChangeDetectionStrategy } from '@angular/core';
import { ProductCard } from './product-card/product-card';
import { CartSummary } from './cart-summary/cart-summary';

@Component({
  selector: 'app-query-elements',
  imports: [ProductCard, CartSummary],
  templateUrl: './query-elements.html',
  styleUrl: './query-elements.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueryElements {
  cartQuantity = signal(2);
  // viewChild and ViewChild is different
  // this use viewChlid. It is a new Angular feature.
  firstProduct = viewChild(ProductCard);
  cartSummary = viewChild(CartSummary);

  totalPrice = computed(() => {
    return this.cartQuantity() * 99;
  })

  updateQuantity(newQuantity: number) {
    const count = this.cartQuantity() + newQuantity;
    if (count >= 0 && count <= 10) {
      this.cartQuantity.set(count);
    }
  }

  showFirstProductDetails() {
    this.firstProduct()?.toggleDetails();
  }

  initiateCheckout() {
    this.cartSummary()?.initiateCheckout();
  }
}


