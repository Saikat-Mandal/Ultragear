import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product, RentalType } from '../types/types';


interface CartState {
  cart: CartItem[];
  addToCart: (product: Product, rentalType: RentalType) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  noOfItemsInCart: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product, rentalType) => {
        // 👇 Use product.id + rentalType as a unique cart item key
        const cartItemId = `${product.id}-${rentalType}`;
        const existing = get().cart.find(item => item.id === cartItemId);

        if (existing) {
          set({
            cart: get().cart.map(item =>
              item.id === cartItemId
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          const price =
            product[`${rentalType}Price` as keyof Product] as number;
          set({
            cart: [
              ...get().cart,
              {
                id: cartItemId, // unique id for this cart entry
                productId: product.id, // keep track of the actual product id
                name: product.name,
                rentalType,
                price,
                quantity: 1,
              },
            ],
          });
        }
      },

      removeFromCart: (cartItemId) => {
        set({
          cart: get().cart.filter(item => item.id !== cartItemId),
        });
      },

      updateQuantity: (cartItemId, quantity) => {
        set({
          cart: get().cart.map(item =>
            item.id === cartItemId ? { ...item, quantity } : item
          ),
        });
      },

      clearCart: () => set({ cart: [] }),

      noOfItemsInCart: () => get().cart.length,
    }),
    {
      name: 'cart-storage', // key in localStorage
    }
  )
);

