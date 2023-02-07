import { useContext, useState } from "react"
import { cartContext } from "../../context/cartContex"
import { getFirestore,addDoc, collection } from "firebase/firestore"
import swal from "sweetalert";

export const Admin = () => {

    const{cart}=useContext(cartContext)
    const [newProduct,setNewProduct]= useState(
      {title: '',
      price: 0,
      category:'',
      stock:0,
      description:" ",
      image: ''});
    

    const db =getFirestore()
        
    const formulario =(x)=>{
    setNewProduct({
        ...newProduct,
        [x.target.name]:x.target.value
      })
    }


    const createProduct = () => {
      const querySnapshot = collection(db, "item")
      addDoc(querySnapshot, newProduct).then(
          (response) => {
                  swal({
                      title: "Creaste un nuevo producto",
                      text: `felicidades`,
                      icon: "success",
                      button: "Aceptar",
                  });}
             ).catch((e) => console.log(e))
  };


  return (

    <div>
      <form >
          nombre:
          <input type="text" name="title" placeholder="nombre" value={newProduct.title}  onChange ={(e)=>{formulario(e)}}/>
          stock:
          <input type="number" name="stock" placeholder="stock" value={newProduct.stock} onChange ={(e)=>{formulario(e)}}/>
          price:
          <input type="number" name="price" placeholder="price" value={newProduct.price} onChange ={(e)=>{parseInt(formulario(e))}}/>
          category
          <input type="text" name="category" placeholder="category" value={newProduct.category} onChange ={(e)=>{formulario(e)}}/>
          imagen:
          <input type="text" name="image" placeholder="image" value={newProduct.img} onChange ={(e)=>{formulario(e)}}/>
          Descripcion:
          <input type="text" name="description" placeholder="description" value={newProduct.description} onChange ={(e)=>{formulario(e)}}/>
      </form>
      <button onClick={()=>{createProduct()}}>enviar producto</button>
    </div>


  )};

  export default Admin;

