import { useState } from "react";
import { createRoutesFromElements } from "react-router";
import { cartContext } from "./cartContex";



const CartProvider = ({children}) => {
  const[dataBase,setDataBase]=useState([])
  const[product,setProduct]=useState({})
  const [cart,setCart]=useState([])
  const[init,setInit]=useState(0)
  
  const addItem = (item, quantity)=>{
    
    const newProduct= {
      id:item.id,
      name:item.title,
      price:item.price,
      quantity:quantity,
      category:item.category,
      image:item.image
    };
    const finder = cart.find((p)=>p.id ===item.id)
    if(finder){
      console.log(finder)
      finder.quantity+=quantity
      console.log(finder)
    }else{
      const cartNew =[...cart, newProduct]
      setCart(cartNew)
      console.log(cart)
    };

    const initValue= init+1;
    setInit(initValue);
    console.log(init);
  };
  
  const cartRest =(item)=>{
    const finder = cart.find((p)=>p.id ===item.id)
    cart.find((p)=>p.id ===item.id)
  if(finder){
    finder.quantity=finder.quantity-1;}}



  const quantityProdsCart = (items)=>{
      const total = items.reduce((prev,p)=>prev+p.quantity,0);
      return total;
  };

 

  return (<cartContext.Provider value={{cart, addItem, dataBase ,setDataBase,product,setProduct, quantityProdsCart,init,cartRest}}>
        {children}
    </cartContext.Provider>)
  
};

export default CartProvider;