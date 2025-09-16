import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * Global store for ProductSales, ProductDetails, and Cart screens
 * - Save as: src/store/useShopStore.js
 */

export const useShopStore = create(
  persist(
    (set, get) => ({
      // Catalog
      products: [],
      setProducts: (list) => set({ products: list ?? [] }),

      // UI state
      isCartOpen: false,
      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),

      isDetailsOpen: false,
      selectedProduct: null,
      selectedQty: 1,
      openDetails: (product) => set({ isDetailsOpen: true, selectedProduct: product, selectedQty: 1 }),
      closeDetails: () => set({ isDetailsOpen: false, selectedProduct: null, selectedQty: 1 }),
      setSelectedQty: (qty) => set({ selectedQty: Math.max(1, qty) }),

      // Cart
      items: [], // [{id, name, image, price, compareAt?, qty}]

      addToCart: (product, qty = 1) => {
        const q = Math.max(1, qty);
        set((state) => {
          const index = state.items.findIndex((it) => it.id === product.id);
          if (index >= 0) {
            const items = state.items.slice();
            items[index] = { ...items[index], qty: items[index].qty + q };
            return { items, isCartOpen: true };
          }
          return {
            items: [
              ...state.items,
              {
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                compareAt: product.compareAt,
                qty: q,
              },
            ],
            isCartOpen: true,
          };
        });
      },

      increment: (id) =>
        set((state) => ({
          items: state.items.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it)),
        })),

      decrement: (id) =>
        set((state) => ({
          items: state.items.map((it) => (it.id === id ? { ...it, qty: Math.max(1, it.qty - 1) } : it)),
        })),

      removeItem: (id) => set((state) => ({ items: state.items.filter((it) => it.id !== id) })),

      clearCart: () => set({ items: [] }),

      getTotal: () => get().items.reduce((sum, it) => sum + it.price * it.qty, 0),
    }),
    { name: "aipay-shop" }
  )
);

// Helper
export const formatNGN = (n) => {
  try {
    return new Intl.NumberFormat("en-NG").format(n);
  } catch {
    return n;
  }
};
