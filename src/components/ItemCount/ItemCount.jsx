import "./style.css"
import { useState } from "react";

const ItemCount = () => {
  const stock=10
  const [counter,setCounter] =useState(0);
  const suma =()=>{
    if(stock ==counter){
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
        <button> Agregar Carrito</button>
      </div>
      
    </div>
    
  );
};

export default ItemCount;