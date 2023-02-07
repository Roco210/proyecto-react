import swal from 'sweetalert';
import { addDoc, collection, getFirestore, doc, updateDoc } from "firebase/firestore";
import { useContext,useEffect, useState } from 'react';
import { cartContext } from '../../context/cartContex';

const CartForms = () => {
const { cart, rest, plus, init, remove, tc, totalCart , setCart,order, setOrder} = useContext(cartContext);
const[visit,setVisit]=useState(
    {name:" ",mail:" "} 
  
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
              name: "ricardo",
              phone: "15687733",
              mail: "algo@gmail.com"
          },
          items: cart.map((p)=>{
              const {title, quantity, price, id}=p
              return {title, quantity, price, id}
          }),
          total: totalCart,
      })
}, [totalCart]);
  const user = {name:"ricardo" }
  
  console.log(visit)

  /* user ? user.name : visit.name */
  return (
    <div><h1>Finalizar compra</h1>
      <form onSubmit={x=>x.preventDefault}>
        nombre:
        <input type="text" name='name' value={user.name ? user.name : visit.name}  onChange={user.name ? null:(x)=>formulario(x)}></input>
      </form>
    
    </div>
  )
};

export default CartForms
