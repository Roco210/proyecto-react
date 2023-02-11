import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./style.css";


const ItemDetail = ({prod}) => {
  return (
    <div className="cardDetail">
      <img src={prod.image} alt={prod.name} />
      <h1>{prod.title}</h1>
      <p>{prod.description}</p>
      <h3>$ {prod.price} </h3>
      <ItemCount detalle={prod} className="itemCount"/>
      <Link to="/"><button>VOLVER</button></Link>
        
    </div>
  )
}

export default ItemDetail