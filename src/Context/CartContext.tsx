"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Define the type for the context value
type CartContextType = [any[], React.Dispatch<React.SetStateAction<any[]>>];

// Create the context with the specified type
export const CartContext = createContext<CartContextType>([[], () => {}]);

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<any[]>([]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
