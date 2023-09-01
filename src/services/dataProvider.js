import React, {createContext, useState, useEffect} from "react";
import {products} from '../data'

export const dataContext = createContext();

export const dataProvider = (props) => {
  const [products, setProducts] = useState([])
  const [menu, setMenu] = useEffect(false)
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0);

}

//Guardar datos 
const addCart = (product) =>{
  console.log(cart)

    const check = cart.every(item => {
      return item.id != product.id;
    })
    console.log(check)
    if(check){
        setCart([...cart, product])
    } else{
      alert("El producto se añadió al carrito")
    }
}

useEffect(() => {
    const getTotal = () => {
  
  const res = cart.reduce((prev, item) => {
    console.log(prev, item.price, item.amount)
    return prev + (item.price * item.amount)
  }, 0)
    getTotal(res)}
},[cart]
)

const value ={
    products : [products],
      menu: [menu, setMenu],
    addCart: addCart,
      cart: [cart, setCart],
      showcard:() => setMenu(true),
      closecard: () => setMenu(false),
      total:[total, setTotal]
}
   return(
    <dataContext.Provider value={value}>
        {props.children}
    </dataContext.Provider>
   )
