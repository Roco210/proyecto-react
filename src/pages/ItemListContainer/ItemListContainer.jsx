import "./style.css"
import { useEffect, useState } from "react";
import DataBase from "../../components/DataBase/DataBase"
import ItemsList from "../../components/Itemslist/ItemsList";

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] =useState ([])

  const getProducts = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      resolve(DataBase); 
      }, 2000);
    
  });
  
  useEffect (()=>{
    getProducts.then((response)=>{
      setProducts(response)
    })
    .catch(error => console.log("erorr")) },[]);

return (
  <div>
    <ItemsList productos={products}/> 
  </div>
); }
export default ItemListContainer;