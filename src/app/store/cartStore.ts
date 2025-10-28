import { create } from 'zustand';
import { Product, CartItem, RentalType } from '../types/types';

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product, rentalType: RentalType) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({

  //global state
  cart: [],

  addToCart: (product, rentalType) => {
    const id = `${product.name}-${rentalType}`;
    const existing = get().cart.find(item => item.id === id);

    if (existing) {
      set({
        cart: get().cart.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      });
    } else {
      const price = product[`${rentalType}Price` as keyof Product] as number;
      set({
        cart: [
          ...get().cart,
          {
            id,
            name: product.name,
            rentalType,
            price,
            quantity: 1,
          },
        ],
      });
    }
  },

  removeFromCart: (id) => {
    set({
      cart: get().cart.filter(item => item.id !== id),
    });
  },

  updateQuantity: (id, quantity) => {
    set({
      cart: get().cart.map(item =>
        item.id === id ? { ...item, quantity } : item
      ),
    });
  },

  clearCart: () => set({ cart: [] }),
}));