"use client";

import React, { createContext, useContext, useState } from "react";
import { create } from "zustand";
import { type Cart } from "@/api/types";

const createStore = (cart: Cart) =>
  create<{ cart: Cart; setCart: (cart: Cart) => void }>((set) => ({
    cart,
    setCart(cart) {
      set({ cart });
    },
  }));

export const CartContext = createContext<ReturnType<typeof createStore> | null>(
  null
);

export const useCart = () => {
  if (!CartContext) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return useContext(CartContext)!;
};

export const CartProvider = ({
  children,
  initialValue,
}: {
  children: React.ReactNode;
  initialValue: Cart;
}) => {
  const [store] = useState(() => createStore(initialValue));
  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
};
