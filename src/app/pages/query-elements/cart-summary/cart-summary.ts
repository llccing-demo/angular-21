import { Component, input, signal, inject, DestroyRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  template: `
    <div [style.background]="isAnimating() ? '#e8f5e8' : ''">
      <h3>Cart Summary {{isAnimating() ? '🎉' : ''}}</h3>
      <p>Items in Cart: {{ itemCount() }}</p>
      <p>Total: \${{ total() }}</p>
      @if (isAnimating()) {
        <p>Processing your checkout...</p>
      }
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartSummary {
  itemCount = input.required<number>();
  total = input.required<number>();

  isAnimating = signal(false);

  private timeoutId?: ReturnType<typeof setTimeout>;
  private destroyRef = inject(DestroyRef);

  // Public method for parent interaction
  initiateCheckout() {
    this.isAnimating.set(true);
    this.timeoutId = setTimeout(() => this.isAnimating.set(false), 2000);
    this.destroyRef.onDestroy(() => clearTimeout(this.timeoutId));
  }
}
