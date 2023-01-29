
import Item from "../Item/Item";
import "./style.css"

const ItemsList = ({productos}) => {
  return (
    <ul className="cardContainer">
        {productos.map((p)=>(
          <Item producto={p}  key={p.id} />
          
        ))}
    </ul>

  );};
export default ItemsList;