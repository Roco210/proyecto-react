import { useContext } from "react";
import { cartContext } from "../../context/cartContex";
import "./style.css"

const Cart = () => {
    const { cart } = useContext(cartContext)
    console.log(cart)
    return (
        <ul>
            {cart.map((p) => (
                <li key={p.id} className="cardCart">
                    <img src={p.image} />
                    <h4>{p.name}</h4>
                    <h4>{p.quantity}</h4>
                </li>

            ))

            }
        </ul>

    )
}

export default Cart;