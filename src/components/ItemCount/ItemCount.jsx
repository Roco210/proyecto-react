import "./style.css"
import { useState } from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContex";



const ItemCount = ({detalle}) => {

  const {stock} =detalle
  const [counter,setCounter] =useState(0);
  
  const{addItem}=useContext(cartContext)
  const reset = ()=>{
    addItem(detalle, counter)
    setCounter(0)}
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