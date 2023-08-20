import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import { Shopping, CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  return (
    <CartIconContainer
      className="cart-icon-container"
      onClick={() => setIsCartOpen(!isCartOpen)}
    >
      <Shopping className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
