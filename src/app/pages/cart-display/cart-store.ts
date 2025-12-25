import { Injectable, signal, computed } from '@angular/core';
import { CartType } from './cart-type';

@Injectable({
    providedIn: 'root'
})
export class CartStore {
    private items = signal<CartType[]>([]);

    readonly cartItems = this.items.asReadonly();

    readonly totalQuantity = computed(() => this.items().reduce((total, item) => total + item.quantity, 0));

    readonly totalPrice = computed(() => this.items().reduce((total, item) => total + item.price * item.quantity, 0));

    addItem(id: number, name: string, price: number) {
        this.items.update((currentItems) => {
            const existingItemIndex = currentItems.findIndex(i => i.id === id);
            if (existingItemIndex !== -1) {
                const updatedItems = [...currentItems];
                updatedItems[existingItemIndex].quantity += 1;
                return updatedItems;
            }
            return [...currentItems, { id, name, price, quantity: 1 }];
        });
    }

    removeItem(id: number) {
        this.items.update((currentItems) => currentItems.filter(i => i.id !== id));
    }

    updateQuantity(id: number, quantity: number) {
        if (quantity < 1) {
            this.removeItem(id);
            return;
        }

        this.items.update((currentItems) => {
            const updatedItems = currentItems.map(i => {
                if (i.id === id) {
                    return { ...i, quantity };
                }
                return i;
            });
            return updatedItems;
        });
    }


    getItems(): CartType[] {
        return [];
    }

    clearCart() {
        this.items.set([]);
    }
}