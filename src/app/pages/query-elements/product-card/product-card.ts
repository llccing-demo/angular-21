import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  template: `
    <div #cardElement>
      <h3 #productTitle>{{ name() }}</h3>
      <p>price: {{price()}}</p>
      <p>description: {{ description() }}</p>

      <div>
        <button (click)="toggleDetails()">
          {{ showDetails() ? 'Hide Details' : 'Show Details' }}
        </button>
      </div>

      @if(showDetails()) {
        <div>
          <p>Product ID: {{ productId() }}</p>
          <p>Category: {{ category() }}</p>
        </div>
      }
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCard {
  name = input.required();
  price = input.required<number>();
  description = input('');
  available = input(true);
  productId = input('');
  category = input('');

  showDetails = signal(false);

  toggleDetails() {
    this.showDetails.set(!this.showDetails());
  }

  // Public methods for parent interaction
  highlight() {
    this.showDetails.set(true);
  }
}
