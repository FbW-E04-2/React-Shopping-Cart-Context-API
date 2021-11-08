import React, { createContext, useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";

//Create Context
export const MyContext = createContext();

export default function App() {

  const [products, setProducts]= useState([
    {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
    {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
    {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
  ])
  const [cart,setCart]= useState([])

  return (
    <MyContext.Provider value={{products, setProducts,cart ,setCart}}>
      <div>
        <Products />
        <Cart />
      </div>
    </MyContext.Provider>
  );
}
