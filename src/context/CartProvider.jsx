import { useState } from "react";
import { cartContext } from "./cartContex";



const CartProvider = ({children}) => {
  const[dataBase,setDataBase]=useState([])
  const[product,setProduct]=useState({})
  const [cart,setCart]=useState([])
  
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
    }
  };
  return (<cartContext.Provider value={{cart, addItem, dataBase ,setDataBase,product,setProduct }}>
        {children}
    </cartContext.Provider>)
  
};

export default CartProvider;