import swal from 'sweetalert';
import { addDoc, collection, getFirestore, doc, updateDoc } from "firebase/firestore";
import { useContext,useEffect, useState } from 'react';
import { cartContext } from '../../context/cartContex';
import "./style.css"



const CartForms = () => {
const { cart, totalCart , setCart,order, setOrder,user, mensaje} = useContext(cartContext);
const[finalizar,setfinalizar]=useState("no")

const[visit,setVisit]=useState(
    {name:" ",mail:" ",adress:" ",phone:"",} 
  
)
const db =getFirestore();
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
         });
         }
         
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
    


    console.log(mensaje)
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
  
useEffect(()=>{const{phone,mail,adress,name}=visit
if(user && phone!==""){setfinalizar("si")
}if (phone!==""&&mail!==""&&adress!==""&&name!==""){setfinalizar("si")}
else{setfinalizar("no")}},[visit])


  const endShop=()=>{
    createOrder();
    swal("Gracias por su compra").then((res)=>{if (res){window.location.assign("/")}});
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
      <button onClick={()=>{endShop()}} className={finalizar} >sxsxs{/* <a href={mensaje} target="_blank"> FINALIZAR COMPRA</a> */}</button> 
    </div>
  )
};

export default CartForms
