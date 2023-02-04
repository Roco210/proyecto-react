import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContex";
import "./style.css"
import swal from 'sweetalert';
import { addDoc, collection, getFirestore, doc, updateDoc } from "firebase/firestore";
import { async } from "@firebase/util";


const Cart = () => {
    const { cart, rest, plus, init, remove, tc, totalCart , setCart} = useContext(cartContext);
    const [order, setOrder] = useState({})
    const db = getFirestore();

    useEffect(() => {
        tc(cart)
    }, [init, cart]);


    
    useEffect(() => {
        setOrder(
            {
                buyer: {
                    name: "ricardo",
                    phone: "15687733",
                    mail: "algo@gmail.com"
                },
                items: cart.map((p)=>{
                    const {name, quantity, price, id}=p
                    return {name, quantity, price, id}
                }),
                total: totalCart,
            })
    }, [totalCart]);


    const createOrder = async() => {
        const querySnapshot = collection(db, "orders")
        await addDoc(querySnapshot, order).then(
            (response) => {
                updateStock();
                    swal({
                        title: "Orden creada",
                        text: `El codigo de tu orden es ${response.id}`,
                        icon: "success",
                        button: "Aceptar",
                    });}
               ).catch((e) => console.log(e))
        await setCart([]);
    };

    const updateStock =()=>{
        cart.forEach((p)=>{
            const querySnapshot = doc(db, "item",p.id);
            updateDoc(querySnapshot,{stock:p.stock-p.quantity}).then().catch(e=>console.log(e))
    });

    };

    if (cart.length == 0) {
        return <h1 className="cartEmpty">Tu carrito esta vacio <br /> :( </h1>
    } else {
        return (
            <ul>
                {cart.map((p) => (
                    <li key={p.id} className="cardCart">
                        <div>
                            <img src={p.image} alt={p.name} />
                        </div>
                        <div>
                            <h4>{p.name}</h4>
                        </div>
                        <div className="selectQ">
                            <button onClick={() => { rest(p) }}>-</button>
                            <h4>{p.quantity}</h4>
                            <button onClick={() => { plus(p) }}>+</button>
                        </div>
                        <div>
                            ${p.price}
                        </div>
                        <div>
                            <button onClick={() => { remove(p) }}>Eliminar </button>
                        </div>
                        <div>
                            Total: $ {p.price * p.quantity}
                        </div>

                    </li>
                ))}
                <div className="endShop">
                    <h2>Total compra ${totalCart}</h2>
                    <Link to="/"> <button onClick={() => createOrder() }> Finalizar compra</button> </Link> 
                </div>

            </ul>
        )
    }
};

export default Cart;