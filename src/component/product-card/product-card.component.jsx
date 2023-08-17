import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";

import "./product-card.styles.scss";

import React, { useContext } from "react";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
