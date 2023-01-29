import { useState } from "react";
import { cartContext } from "./cartContex";



const CartProvider = ({children}) => {
  const[dataBase,setDataBase]=useState([])
  const[product,setProduct]=useState({})
  const [cart,setCart]=useState([])
  const addItem = (item, quantity)=>{
    const newProduct= {
      name:item.title,
      price:item.price,
      quantity:quantity,
      category:item.category,
    };
    setCart(...cart,newProduct)
  };
  return (<cartContext.Provider value={{cart, addItem, dataBase ,setDataBase,product,setProduct }}>
        {children}
    </cartContext.Provider>)
  
};

export default CartProvider;