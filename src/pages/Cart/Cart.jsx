import { useState, useContext, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { cartContext } from "../../context/cartContex";
import "./style.css"
import swal from 'sweetalert';
import CartForm from "../../components/CartForm/CartForm";



const Cart = () => {
    const { cart, rest, plus, init, remove, tc, totalCart} = useContext(cartContext);
  


    useEffect(() => {
        tc(cart)
    }, [init, cart]);


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
                   <Link to="/final"><button> Finalizar compra</button></Link>
                </div>

            </ul>
        )
    }
};

export default Cart;