import { useContext } from "react";
import ProductCard from "../../component/product-card/product-card.component";


import './shop.styles.scss'
import { ProductsContext } from "../../context/product.context";
const Shop = () => {

  const {products}= useContext(ProductsContext)

  return (
    <div className="shop-container"> 
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default Shop;
