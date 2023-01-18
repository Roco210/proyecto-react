
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail";



const ItemDetailContainer = () => {
const base = [
      {id:1,name:'jazmin',category:"planta",description:'planta de exterior muy grande',stock:5,image:"https://th.bing.com/th/id/R.dd3805ba64d77c6040979ad264b126de?rik=sLa5TJ9LBRzwfA&riu=http%3a%2f%2fhablemosdeflores.com%2fwp-content%2fuploads%2f2017%2f06%2fjazmin.jpg&ehk=%2bYre%2fpfNZo9hERCVjAG6vMWLF97S1r8VXov8z1R7rPU%3d&risl=&pid=ImgRaw&r=0"},
      {id:2,name:'rosa',category:"planta",description:'planta de hermoso color',stock:6,image:"./images/rosa.jpg"},
      {id:3,name:'margarita',category:"planta",description:'planta ideal para decorar',stock:7,image:"./images/margarita.jpg"},
      {id:4,name:'alegria',category:"planta",description:'alegria completa en tu hogar',stock:8,image:"./images/alegria.jpg"},
      {id:5,name:'tulipan',category:"planta",description:'de holanda a tu hogar',stock:9,image:"./images/tulipan.jpg"},
      {id:6,name:'maceta ',category:"jardineria",description:'capacidad de 20lts',stock:10,image:"./images/maceta.jpg"},
      {id:7,name:'fertilizante',category:"jardineria",description:'aliado ideal para el crecimiento de tus plantas',stock:11,image:"./images/ferti.jpg"},
      {id:8,name:'pala',category:"jardineria",description:'herramienta para hacer pozos',stock:12,image:"./images/pala.jpg"},
      {id:9,name:'rastrillo',category:"jardineria",description:'limpia las hojas de tu patio',stock:13,image:"./images/rastrillo.jpg"},
      {id:10,name:'sustrato',category:"jardineria",description:'tierra ideal para el desarrollo de tus plantas',stock:14,image:"./images/sustrato.jpg"}
      ]
const {id}=useParams()


const[product,setProduct] =useState(0)
useEffect(()=>{
  const filt = base.filter((p) => p.id == id)
  setProduct(filt)

},[id])

  return (
    <div>
      <ItemDetail product={product}/>
    </div>
  )
};

export default ItemDetailContainer;