
import { useEffect,useContext } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { cartContext } from "../../context/cartContex";
import {getFirestore,getDoc, doc} from "firebase/firestore"



const ItemDetailContainer = () => {
const{product, setProduct}=useContext(cartContext)  
const {id}=useParams()


  const db = getFirestore();
  const querysnapshot =doc(db,"item",id);

  const getProduct=getDoc(querysnapshot)
  
  useEffect(()=>{
  getProduct.then((res)=>{
    const data =res.data()
    const newData ={id,...data}
    setProduct(newData)
  }).catch(e=>console.log(e))

},[id])

  return (
    <div>
      <ItemDetail prod={product}/>
    </div>
  )
};

export default ItemDetailContainer;