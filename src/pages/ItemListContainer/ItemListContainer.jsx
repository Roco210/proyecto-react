import "./style.css"
import ItemCount from "../../components/ItemCount/ItemCount"

const ItemListContainer = ({greeting}) => {
  return (
    <div>
      {greeting}
      <ItemCount/>
    </div>
  );
};

export default ItemListContainer;