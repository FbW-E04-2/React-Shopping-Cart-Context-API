import React, { useContext } from "react";
import { MyContext } from "../App";

function Products() {
  const { products, setCart, cart } = useContext(MyContext);

  const addToCart = (product) => {
    let item = cart.find((elem) => elem.title === product.title); //finding existing item in cart
    if (item) {
      item.number++;
      setCart([...cart]);
    } else {
      product.number = 1;
      setCart([...cart, product]);
    }

    product.inventory--;
  };

  
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
