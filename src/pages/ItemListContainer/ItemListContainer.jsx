import "./style.css"
import { useEffect,useContext ,useState} from "react";
/* import DataBase from "../../components/DataBase/DataBase" */
import ItemsList from "../../components/Itemslist/ItemsList";
import { useParams } from "react-router-dom";
import {getFirestore,collection,getDocs} from "firebase/firestore"
import { cartContext } from "../../context/cartContex";

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] =useState ([])
  const {category} =useParams()
  const { dataBase ,setDataBase}=useContext(cartContext)
  const db = getFirestore();
  const querysnapshot =collection(db,"item");

  const getProducts=getDocs(querysnapshot)
  
  useEffect(()=>{
  getProducts.then((res)=>{
    const data =res.docs.map((p)=>{return {id:p.id,...p.data()}})
    setDataBase(data)
    if(category){
      const filtradoCat =data.filter((p)=>p.category===category)
      setDataBase(filtradoCat)
    }
  }).catch(e=>console.log(e))
  },[category]);
console.log(dataBase)

return (
  <div>
    
    <ItemsList productos={dataBase}/>
  </div>
); }
export default ItemListContainer;