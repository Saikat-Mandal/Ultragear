import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, CartItem, RentalType } from './types';

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product, rentalType: RentalType) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  noOfItemsInCart: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
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

      noOfItemsInCart: () => get().cart.length
      
    }),
    {
      name: 'cart-storage', // key in localStorage
    }
  )
);