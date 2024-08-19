"use client";

import React, { createContext, useContext, useRef, useState } from "react";
import { useStore, createStore } from "zustand";
import { type Cart } from "@/api/types";

type CartState = {
  cart: Cart;
};

type CartActions = {
  setCart: (cart: Cart) => void;
};

const createCartStore = (cart: Cart) =>
  createStore<CartState & CartActions>((set) => ({
    cart,
    setCart(cart) {
      set({ cart });
    },
  }));

export const CartContext = createContext<ReturnType<
  typeof createCartStore
> | null>(null);

export const useCart = <T,>(
  selector: (state: CartState & CartActions) => T
): T => {
  const store = useContext(CartContext);
  if (!store) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return useStore(store, selector);
};

export const CartProvider = ({
  children,
  initialValue,
}: {
  children: React.ReactNode;
  initialValue: Cart;
}) => {
  const [store] = useState(() => createCartStore(initialValue));
  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
};
