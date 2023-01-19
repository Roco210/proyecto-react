import "./style.css"
import { Link } from "react-router-dom";
import ItemCount from "../../components/ItemCount/ItemCount"


const Item = ({producto}) => {
  return ( 
    <li className="card" >
      <Link  to={`/item/${producto.id}`}>
        <img src={producto.image} alt={producto.name} />
        <div>{producto.name}</div>
        <div>${producto.price}</div>
        <button>Detalle</button>
      </Link>
      <div><ItemCount/></div>
    
    </li>
  )
};

export default Item