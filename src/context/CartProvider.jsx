import { useState } from "react";
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
      image:item.image,
      stock:item.stock
    };
      const finder = cart.find((p)=>p.id ===item.id)
   
      if(finder){
        finder.quantity+=quantity
      
    }
    
  else{
      const cartNew =[...cart, newProduct]
      setCart(cartNew)
    };
    const initValue= init+1;
    setInit(initValue);

  };
  

  const rest = (x)=>{
    if(x.quantity>0){
      const finder = cart.find((p)=>p.id===x.id)
      if(finder){addItem(x,-1)}
      
    }
   
  }

  const plus = (x)=>{
    if(x.quantity<x.stock){
      const finder = cart.find((p)=>p.id===x.id)
      if(finder){addItem(x,1)}
    }
    
    
  }

  const remove =(x)=>{
    setCart (cart.filter((p)=>p.id!==x.id))
    
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