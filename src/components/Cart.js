import React,{useContext,useEffect} from 'react'
import { useState } from 'react'
import {MyContext} from "../App"

function Cart() {


   
    const {cart,removeAll,removeOne,deleteAllItems} = useContext(MyContext)
    const [total,setTotal]=useState(0)

    useEffect(()=>{
        const sum = cart.reduce((acc,product)=>{
                acc+= (product.price*product.number)
                return acc
        } ,0 )

        setTotal(sum)

    },[cart])


    return (
        <div style={{border:"5px solid green"}}>
            {cart.map(cartProduct=>{
                return(
                    <div key={cartProduct.id}>
                    <h2>{cartProduct.title} | $ {cartProduct.price} | x {cartProduct.number}</h2>
                    <button onClick={()=>removeOne(cartProduct)}>remove one</button>
                    <button onClick={()=>removeAll(cartProduct)}>remove all</button>
                </div>
                )
            })}
            <h2>Total : {total}  </h2><button onClick={deleteAllItems}>checkout</button>
        </div>
    )
}

export default Cart
