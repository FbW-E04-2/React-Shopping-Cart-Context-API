import React, { useContext } from "react";
import { MyContext } from "../App";

function Products() {
  const { products,addToCart } = useContext(MyContext);

  

  return (
    <div style={{border:"5px solid black"}}>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>
              {product.title} | $ {product.price} | x {product.inventory}
            </h2>
            <button
              disabled={product.inventory === 0}
              onClick={() => addToCart(product)}
            >
              {product.inventory === 0 ? "sold out" : "add to cart"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
