import { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (productName: string, price: number) => void;
  getCartTotal: () => number;
  getTotalQuantity: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (productName: string, price: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === productName);

      if (existingItem) {
        return prevCart.map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { name: productName, price, quantity: 1 }];
      }
    });
  };

  const getCartTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const getTotalQuantity = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, getCartTotal, getTotalQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
