import { Link } from "react-router-dom";
import "./style.css"

const CartWidget = () => {
  return (
    <div className="cart">
        <Link to="cart"><img alt="cart" src='../images/cart.png' /></Link>
        <p>1</p>
    </div>
    
  );
};

export default CartWidget;