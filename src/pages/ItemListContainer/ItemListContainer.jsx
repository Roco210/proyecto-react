import "./style.css"
import { useEffect, useState } from "react";
import DataBase from "../../components/DataBase/DataBase"
import ItemsList from "../../components/Itemslist/ItemsList";
import { useParams } from "react-router-dom";
const ItemListContainer = ({greeting}) => {

  const [products, setProducts] =useState ([])
  const {category} =useParams()

  const getProduct = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      resolve(DataBase); 
      }, 10);
    
  });
  
  useEffect (()=>{
    getProduct.then((response)=>{
      if(category){
        const filtradoCat = products.filter((p)=>p.category===category)
        setProducts(filtradoCat)
      }else(setProducts(response))
    })
    .catch(error => console.log("error")) },[category]);


return (
  <div>
    
    <ItemsList productos={products}/>
  </div>
); }
export default ItemListContainer;