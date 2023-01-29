import ItemCount from "../ItemCount/ItemCount";
import "./style.css";


const ItemDetail = ({prod}) => {
  console.log(prod.price)

  const product=prod
  return (
    <div className="cardDetail">
      <img src={prod.image} alt={prod.name} />
      <h1>{prod.name}</h1>
      <p>{prod.description}</p>
      <h3>$ {prod.price} </h3>
      <ItemCount detalle={product}/>
    </div>
  )
}

export default ItemDetail