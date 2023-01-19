import ItemCount from "../ItemCount/ItemCount"
import "./style.css"

const ItemDetail = ({prod}) => {
  console.log(prod.price)
  return (
    <div className="cardDetail">
      <img src= {`.${prod.image}`} alt={prod.name} />
      <h1>{prod.name}</h1>
      <p>{prod.description}</p>
      <h3>$ {prod.price} </h3>
      <ItemCount/>
    </div>
  )
}

export default ItemDetail