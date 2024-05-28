"use client";

import { createContext, useState, useContext } from "react";

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
  hFigure: number;
  eFigure: number;
  sFigure: number;
  addToCart: (headphone: Headphone, quantity: number) => void;
  incHQty: () => void;
  decHQty: () => void;
  incEQty: () => void;
  decEQty: () => void;
  incSQty: () => void;
  decSQty: () => void;
  resetFigure: () => void;
  clearCart: () => void;
  decrementQuantity: (slug: string) => void;
  incrementQuantity: (slug: string) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);
  const [hFigure, setHFigure] = useState(1);
  const [eFigure, setEFigure] = useState(1);
  const [sFigure, setSFigure] = useState(1);

  const incHQty = () => setHFigure((prevHFigure) => prevHFigure + 1);
  const decHQty = () => {
    setHFigure((prevHFigure) =>
      prevHFigure > 1 ? prevHFigure - 1 : prevHFigure
    );
  };
  const incEQty = () => setEFigure((prevEFigure) => prevEFigure + 1);
  const decEQty = () => {
    setEFigure((prevEFigure) =>
      prevEFigure > 1 ? prevEFigure - 1 : prevEFigure
    );
  };
  const incSQty = () => setSFigure((prevSFigure) => prevSFigure + 1);
  const decSQty = () => {
    setSFigure((prevSFigure) =>
      prevSFigure > 1 ? prevSFigure - 1 : prevSFigure
    );
  };

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
        item.slug === slug && item.quantity > 1
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const clearCart = () => setCartItems([]);
  const resetFigure = () => {
    setEFigure(1);
    setHFigure(1);
    setSFigure(1);
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        addToCart,
        hFigure,
        decHQty,
        incHQty,
        eFigure,
        decEQty,
        incEQty,
        sFigure,
        decSQty,
        incSQty,
        clearCart,
        resetFigure,
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
