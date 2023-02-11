import swal from 'sweetalert';
import { addDoc, collection, getFirestore, doc, updateDoc } from "firebase/firestore";
import { useContext,useEffect, useState } from 'react';
import { cartContext } from '../../context/cartContex';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';


const CartForms = () => {
const { cart, totalCart , setCart,order, setOrder,user} = useContext(cartContext);
const[visit,setVisit]=useState(
    {name:" ",mail:" ",adress:" ",phone:"",} 
  
)



const db =getFirestore
const createOrder = () => {
  const querySnapshot = collection(db, "orders")
addDoc(querySnapshot, order).then(
 (response) => {
     updateStock();
         swal({
             title: "Orden creada",
             text: `El codigo de tu orden es ${response.id}`,
             icon: "success",
             button: "Aceptar",
         });}
    ).catch((e) => console.log(e))
  setCart([]);};

const updateStock =()=>{
  cart.forEach((p)=>{
      const querySnapshot = doc(db, "item",p.id);
      updateDoc(querySnapshot,{stock:p.stock-p.quantity}).then().catch(e=>console.log(e))
  
});};


const formulario =(x)=>{
    setVisit({
        ...visit,
        [x.target.name]:x.target.value
      })
    }



useEffect(() => {
  setOrder(
      {
          buyer: {
              name: user ?user.name+" "+user.lastName:visit.name,
              phone: visit.phone,
              mail: user ?user.mail:visit.mail,
              adress: user?user.adress:visit.adress
          },
          items: cart.map((p)=>{
              const {title, quantity, price, id}=p
              return {title, quantity, price, id}
          }),
          total: totalCart,
      })
}, [totalCart]);
  
const endShop=()=>{
  /* createOrder();
  updateStock(); */
  
}

  return (
    <div><h1>Finalizar compra</h1>
      <form onSubmit={x=>x.preventDefault}>
        <p>NOMBRE:</p>
        <input type="text" name='name' value={user ?user.name+" "+user.lastName:null}  onChange={user ? null:(x)=>formulario(x)}></input>
        <p>DIRECCION:</p>
        <input type="text" name='adress' value={user ?user.adress:null}  onChange={user ? null:(x)=>formulario(x)}></input>
        <p>MAil:</p>
        <input type="mail" name='mail' value={user ?user.mail:null}  onChange={user ? null:(x)=>formulario(x)}></input>
        <p>TELEFONO:</p>
        <input type="number" name='phone' value={null}  onChange={(x)=>formulario(x)}></input>
      </form>
      <button onClick={()=>{endShop()}}><Link to="/www.google.com">scscsc</Link>  </button> 
    </div>
  )
};

export default CartForms
