import { useState,useEffect } from "react";

import { cartContext } from "./cartContex";



const CartProvider = ({children}) => {
  const[dataBase,setDataBase]=useState([]);
  const[product,setProduct]=useState({});
  const [cart,setCart]=useState([]);
  const[init,setInit]=useState(0);
  const [totalCart, setTotalCart] = useState(0);
  const [order, setOrder] = useState({})
  const[mensaje,setMensaje]=useState("")

  const addItem = (item, quantity)=>{
    const newProduct= {
      id:item.id,
      title:item.title,
      price:item.price,
      quantity:quantity,
      category:item.category,
      image:item.image,
      stock:item.stock
    };
      const finder = cart.find((p)=>p.id ===item.id)
   
      if(finder){
        finder.quantity+=quantity
    }
    
  else{
      const cartNew =[...cart, newProduct]
      setCart(cartNew)
    };
    const initValue= init+1;
    setInit(initValue);

  };
  

  const rest = (x)=>{
    console.log(x)
    if(x.quantity>1){
      const finder = cart.find((p)=>p.id===x.id)
      if(finder.quantity>1){addItem(x,-1)}}
      else{remove(x)}
    
  };

  const plus = (x)=>{
    if(x.quantity<x.stock){
      const finder = cart.find((p)=>p.id===x.id)
      if(finder){addItem(x,1)}
    }
  };

  const remove =(x)=>{
    setCart (cart.filter((p)=>p.id!==x.id))

  };

  const tc =(x)=>{
      const price = x.reduce((prev, p) => prev + p.quantity * p.price, 0)
      setTotalCart (price);
  };

  const quantityProdsCart = (items)=>{
      const total = items.reduce((prev,p)=>prev+p.quantity,0);
      return total;
  };
  
  useEffect(()=>{setMensaje(`https://wa.me/1568255477?text=${encodeURIComponent(`Hola CrazyLove quiero hacer un pedio, este es el detalle: ${cart.map((p)=>p.title + " "+ p.quantity + " unidades total: $ " + p.price* p.quantity )} TOTAL DE LA COMPRA: ${totalCart}`)}`)},[totalCart]);

  // usuarios
  
  
  const [user, setUser] = useState(null);
  function userLog(){
    if(localStorage.getItem("user")){setUser(JSON.parse(localStorage.getItem("user")))}};


  const [userData, setUserData] = useState({
    mail: "",
    password: "",
    name:"",
    lastName:"",
    adress: "",
    mailCheck:"",
});

useEffect(()=>{if(user===null){userLog()}},[window])


const [act, setAct] = useState(null)

  //retorno

  return (<cartContext.Provider value={{mensaje,userLog,act, setAct,user, setUser,userData, setUserData,order, setOrder, cart,setCart, addItem, dataBase ,setDataBase,product,setProduct, quantityProdsCart,init,rest,plus,remove,tc,totalCart}}>
        {children}
    </cartContext.Provider>)
  
};

export default CartProvider;