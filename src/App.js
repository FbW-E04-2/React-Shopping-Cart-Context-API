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
    setProducts([...products])
  };

  const removeOne=(cartProduct)=>{
    let productItem= products.find(item=>item.title===cartProduct.title)
        if(cartProduct.number===1){
            let updatedCart= cart.filter(item=>item.title!==cartProduct.title)
            setCart(updatedCart)  
        }else{
            cartProduct.number--;
            setCart([...cart])
        }
        productItem.inventory++;
        setProducts([...products])
}


const removeAll=(cartProduct)=>{
    let productItem= products.find(item=>item.title===cartProduct.title)
    productItem.inventory+=cartProduct.number
    setProducts([...products])
    let updatedCart= cart.filter(item=>item.title!==cartProduct.title)
    setCart(updatedCart)  
}


const deleteAllItems=()=>{
  /*   cart 
    products  
*/
    let updatedProducts = products.map(elem=>{
        let cartItem= cart.find(item=>item.title===elem.title)
        if(cartItem){
            elem.inventory+=cartItem.number;
            return elem
        }
        return elem
    })  
    
    setProducts(updatedProducts)
    setCart([])
}




  return (
    <MyContext.Provider value={{ products, setProducts,cart ,setCart,addToCart,removeOne,removeAll,deleteAllItems}}>
      <div>
        <Products />
        <Cart />
      </div>
    </MyContext.Provider>
  );
}
