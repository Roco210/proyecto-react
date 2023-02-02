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
      finder.quantity+=quantity
    }else{
      const cartNew =[...cart, newProduct]
      setCart(cartNew)
    };

    const initValue= init+1;
    setInit(initValue);

  };
  
  const rest = (x)=>{
    const finder = cart.find((p)=>p.id===x.id)
    if(finder){addItem(x,-1)}
    
  }

  const plus = (x)=>{
    const finder = cart.find((p)=>p.id===x.id)
    if(finder){addItem(x,1)}
    
  }

  const remove =(x)=>{
    /* const finder = cart.find((p)=>p.id===x.id)
    if(!finder){addItem(x,0)} */
    console.log(x)
  }



  const quantityProdsCart = (items)=>{
      const total = items.reduce((prev,p)=>prev+p.quantity,0);
      return total;
  };

 

  return (<cartContext.Provider value={{cart, addItem, dataBase ,setDataBase,product,setProduct, quantityProdsCart,init,rest,plus,remove}}>
        {children}
    </cartContext.Provider>)
  
};

export default CartProvider;