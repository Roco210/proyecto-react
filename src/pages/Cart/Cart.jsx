import { useState,useContext,useEffect } from "react";
import { cartContext } from "../../context/cartContex";
import "./style.css"

const Cart = () => {
    const { cart,init,cartRest} = useContext(cartContext)
    const[tp,setTp]=useState()
   
    function  total (cartItems){
        const price = cartItems.reduce((prev,p)=>prev+p.quantity*p.price,0)
        return price;
    };
    useEffect(()=>{
        
            const totalPrice=total(cart)
            setTp(totalPrice)
        
      },[init])


    

    
      console.log(cart)
   console.log (tp)
    return (
        <ul>
            {cart.map((p) => (
                <li key={p.id} className="cardCart">
                    <div>
                        <img src={p.image} />
                    </div>
                    <div>
                        <h4>{p.name}</h4>
                    </div>
                    <div>
                        <button onClick={()=>cartRest(p)} onChange>-</button>
                        <h4>{p.quantity}</h4>
                    </div>
                    <div>
                        ${p.price}
                    </div>
                    <div>
                        Total: $ {p.price*p.quantity}
                    </div>
                </li>
                ))}
                <li>
                    Total compra ${tp}
                </li>
        </ul>

    )
};

export default Cart;