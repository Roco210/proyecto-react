import "./style.css"
import { useEffect, useState } from "react";
import DataBase from "../../components/DataBase/DataBase"
import ItemsList from "../../components/Itemslist/ItemsList";

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] =useState ([])

  const getProduct = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      resolve(DataBase); 
      }, 2000);
    
  });
  
  useEffect (()=>{
    getProduct.then((response)=>{
      console.log(response)
      setProducts(response)
    })
    .then()
    .catch(error => console.log("erorr")) },[]);

return (
  <div>
    {greeting}
    
    <ItemsList productos={products}/>
  </div>
); }
export default ItemListContainer;