import Item from "../Item/Item";
import "./style.css"
import { Link } from "react-router-dom";
const ItemsList = ({productos}) => {
  return (
    <ul className="cardContainer" >
        {productos.map((p)=>(
          <Link to="/" key={p.id}>
            <Item  producto={p}  />
          </Link>
        ))}
    </ul>

  );};
export default ItemsList;