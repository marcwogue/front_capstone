import React, { createContext, useState, useContext, type ReactNode } from "react";

export interface Dish {
  id: number;
  name: string;
  desc: string;
  price: number;
}

// Ce qu'on mettra dans le context
interface CartContextType {
  cart: Dish[];
  addToCart: (dish: Dish) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider du contexte
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Dish[]>([]);

  const addToCart = (dish: Dish) => {
    setCart((prev) => [...prev, dish]);
  };

   const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook pratique pour accéder au contexte
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};



