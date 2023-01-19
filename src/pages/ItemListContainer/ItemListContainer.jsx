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
      }, 2000);
    
  });
  
  useEffect (()=>{
    getProduct.then((response)=>{
      setProducts(response)
    })
    .catch(error => console.log("erorr")) },[]);

  useEffect(()=>{
    if(category){
      const filtradoCat = products.filter((p)=>p.category==category)
      setProducts(filtradoCat)
    }
  },[category])
return (
  <div>
    {greeting}
    
    <ItemsList productos={products}/>
  </div>
); }
export default ItemListContainer;