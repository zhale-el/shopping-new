import { createContext } from "react";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteFromCart: () => {},
  getTotalAmount: () => {},
});

export function CartProvider({ children }) {
  const ContextValue = {
    items: [],
    getProductQuantity,
    addItemToCart,
    removeItemFromCart,
    deleteFromCart,
    getTotalAmount,
  };

  return (
    <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
  );
}
