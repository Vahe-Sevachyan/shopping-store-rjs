import { createContext, useContext } from "react";

const shoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(shoppingCartContext);
}

export function ShoppingCartProvider({children}
    ShoppingCartProvider){
        return(
            <ShoppingCartProvider.Provider>
                {children}
            </ShoppingCartProvider.Provider>
        )
    }