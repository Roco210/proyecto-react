import "./style.css"
import { useEffect, useState } from "react";
import ItemCount from "../../components/ItemCount/ItemCount"
import ItemsList from "../../components/Itemslist/ItemsList";

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] =useState ([])

  const getProduct = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      resolve(["produto 1",
        "produto 2",
        "produto 3",
        ]); 
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
    <ItemCount/>
    <ItemsList productos={products}/>
  </div>
); }
export default ItemListContainer;