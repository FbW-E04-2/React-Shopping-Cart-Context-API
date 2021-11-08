import React,{useContext,useEffect} from 'react'
import { useState } from 'react'
import {MyContext} from "../App"

function Cart() {


   
    const {cart,setCart} = useContext(MyContext)
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
            {cart.map(product=>{
                return(
                    <div key={product.id}>
                    <h2>{product.title} | $ {product.price} | x {product.number}</h2>
                    <button>remove one</button>
                    <button>remove all</button>
                </div>
                )
            })}
            <h2>Total : {total}</h2>
        </div>
    )
}

export default Cart
