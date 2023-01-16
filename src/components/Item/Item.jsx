import "./style.css"
import ItemCount from "../../components/ItemCount/ItemCount"
const Item = ({producto}) => {

  return ( 
    <li className="card" key={producto.id}>
      <img src={producto.images} alt={producto.name} />
      <div>{producto.name}</div>
      <div><ItemCount/></div>
    
    </li>
  )
};

export default Item