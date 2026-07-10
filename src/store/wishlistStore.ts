import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from './cartStore';

interface WishlistState {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) => set((state) => ({
        items: state.items.some((item) => item.id === product.id) ? state.items : [...state.items, product],
      })),
      removeItem: (productId) => set((state) => ({ items: state.items.filter((item) => item.id !== productId) })),
    }),
    { name: 'learts-wishlist', version: 1 },
  ),
);
