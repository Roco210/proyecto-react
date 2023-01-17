import "./style.css"
import ItemCount from "../../components/ItemCount/ItemCount"

const Item = ({producto}) => {
  return ( 
      <li  className="card" >
        <img className="cardImage" src={producto.image} alt={producto.id} />
        <div>{producto.name}</div>
        <button>Detalle</button>
        <div><ItemCount/></div>
      </li>
  )
};

export default Item;