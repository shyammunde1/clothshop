import { createContext, useEffect, useState } from "react";

const addCartItems = (cartItems, productToAdd) => {
  //find if cartItems contains
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  //if found ,increment quality
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }
  //return new array  with modified cartitems/ new cart items

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const initialState = {
  isCartOpen: false,
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  cartCount: 0,
};

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount)
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItems(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems,cartCount };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
