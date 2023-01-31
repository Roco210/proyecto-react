import { useState } from "react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContex";
import "./style.css"

const CartWidget = () => {

  const{cart,quantityProdsCart,init}=useContext(cartContext)
  const[value,setValue]=useState(0)
  
  useEffect(()=>{
    const total=quantityProdsCart(cart)
    setValue(total)
  },[init])
  
  return (
    <div className="cart">
        <Link to="cart"><img alt="cart" src='../images/cart.png' /></Link>
        <p>{value}</p>
    </div>
    
  );
};

export default CartWidget;