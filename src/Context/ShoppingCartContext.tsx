import { createContext, useContext, ReactNode } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(shoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  return (
    <ShoppingCartProvider.Provider value={{}}>
      {children}
    </ShoppingCartProvider.Provider>
  );
}
