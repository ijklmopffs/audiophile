"use client";

import { createContext, useState, useContext, useEffect } from "react";

interface Headphone {
  slug: { current: string };
  product: object;
  price: number;
  id: string;
}

type CartItems = {
  slug: string;
  product: object;
  id: string;
  price: number;
  quantity: number;
};

type CartState = {
  cartItems: CartItems[];
};

type AppContextType = CartState & {
  addToCart: (headphone: Headphone, quantity: number) => void;
  clearCart: () => void;
  decrementQuantity: (slug: string) => void;
  incrementQuantity: (slug: string) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<CartItems[]>(() => {
    if (typeof window !== "undefined") {
      const storedCartItems = localStorage.getItem("cartItems");
      return storedCartItems ? JSON.parse(storedCartItems) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (headphone: Headphone, quantity: number) => {
    const { slug, product, id, price } = headphone;
    const slugCurrent = slug.current;

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.slug === slugCurrent);

      if (existingItem) {
        return prevItems.map((item) =>
          item.slug === slugCurrent
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...prevItems,
        { slug: slugCurrent, product, id, price, quantity },
      ];
    });
  };

  const decrementQuantity = (slug: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.slug === slug && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const incrementQuantity = (slug: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.slug === slug ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  return (
    <AppContext.Provider
      value={{
        cartItems,
        addToCart,
        clearCart,
        decrementQuantity,
        incrementQuantity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useProvider = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useCounter must be used within an AppProvider");
  }
  return context;
};
