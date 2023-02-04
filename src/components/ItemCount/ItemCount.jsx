import "./style.css"
import { useState } from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContex";
import { useEffect } from "react";
import swal from "sweetalert";



const ItemCount = ({detalle}) => {

  const {stock} =detalle
  const [counter,setCounter] =useState(0);
  const [fil,setfil] =useState();
  const{addItem,cart,init}=useContext(cartContext)
  
  useEffect(()=>{
    const finder= cart.find((x)=>x.id==detalle.id)
    setfil(finder)
  },[cart,init])

  const reset = ()=>{
    if(fil ){
      if(fil.quantity+counter>stock){
    setCounter(0)
    swal(`No tenemos tantas unidades nos quedan ${stock-fil.quantity}`,"","error")}
    else{addItem(detalle,counter)
      setCounter(0)}}else
      addItem(detalle,counter)
      setCounter(0)
    }

  const suma =()=>{
    if(stock ===counter){
      return;
    }
    setCounter (counter+1);
    

    };
  const menos =()=>{
    if (counter<=0){
      return;
    }
    setCounter (counter-1);
  }
  return (
    <div className="counter">
      <div className="counterControllers">
        <button onClick={()=> menos()}>-</button>
        <div>
          <h4>{counter}</h4>
        </div>
        <button onClick={suma}>+</button>
      </div>
      <div>
        <button onClick={()=>reset()}> Agregar Carrito</button>
      </div>
    </div>
    
  );
};

export default ItemCount;