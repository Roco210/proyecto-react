import "./style.css"
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({producto}) => {
 
  return ( 
    <li className="card" >
      <Link  to={`/item/${producto.id}`}>
        <img src={producto.image} alt={producto.name} />
        <div>{producto.title}</div>
        <div>${producto.price}</div>
        <button>Detalle</button>
      </Link>
      <ItemCount detalle={producto} />
    </li>
  )
};

export default Item