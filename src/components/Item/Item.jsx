import "./style.css"
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContex";
import { useContext } from "react";


const Item = ({producto}) => {
  const conte =useContext(cartContext)
 
  return ( 
    <li className="card" >
      <Link  to={`/item/${producto.id}`}>
        <img src={producto.image} alt={producto.name} />
        <div>{producto.name}</div>
        <div>${producto.price}</div>
        <button>Detalle</button>
      </Link>
    </li>
  )
};

export default Item