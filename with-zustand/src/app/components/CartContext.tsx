"use client";

import React, { createContext, useState } from "react";
import { type Cart } from "@/api/types";

const useCartState = (cart: Cart) => useState<Cart>(cart);

export const CartContext = createContext<ReturnType<
  typeof useCartState
> | null>(null);

export const useCart = () => {
  const cart = React.useContext(CartContext);
  if (!cart) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return cart;
};

export const CartProvider = ({
  children,
  initialValue,
}: {
  children: React.ReactNode;
  initialValue: Cart;
}) => {
  const [cart, setCart] = useCartState(initialValue);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};
